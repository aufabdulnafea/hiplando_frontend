'use client';

import { useState, useRef, useEffect } from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Container } from "@/components/container";
import { Button } from '@/components/ui/button';
import SelectCategory from "./steps/select-category";
import HorseDetail from "./steps/horse-detail";
import Files from "./steps/files";
import { auth } from '@/lib/firebase';
import { toast } from 'sonner';
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";
import { HorseAddedSuccessCard } from './added-success-card';

const schema = z.object({
    categoryId: z.string().min(1, "Please select a category"),
    name: z.string().min(2, "Horse name is required"),
    // pedigreeURL: z.url().optional().or(z.literal("")),
    yearOfBirth: z.number().positive("Year of birth is required"),
    genderId: z.string().min(1, "Gender is required"),
    height: z.number().positive("Height is required"),
    disciplineId: z.string().min(1, "Discipline is required"),
    location: z.string().min(1, "Location is required"),
    price: z.number().positive("Price is required"),
    description: z.string().optional(),
    photos: z.array(z.instanceof(File)).refine(f => f.length >= 1 && f.length <= 3, "Upload 1–3 photos"),
    // video: z.url().optional().or(z.literal("")),
    youtubeVideoId: z.string().optional(),
    xrayResults: z.array(z.instanceof(File)).optional(),
    vetReport: z.array(z.instanceof(File)).optional(),
    pedigree: z.array(z.any()).optional(),
});

type FormData = z.infer<typeof schema>;

function focusFirstError(methods: any) {
    const firstErrorField = Object.keys(methods.formState.errors)[0];
    if (firstErrorField) {
        const el = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement | null;
        if (el) el.focus();
    }
}


// todo one file to xray and vetreport
function convertToFormData(data: FormData) {
    const formData = new FormData();
    data.photos.forEach(file => formData.append('photos', file));
    // data.video && formData.append('video', data.video);
    data.xrayResults?.forEach(file => formData.append('xrayResults', file));
    data.vetReport?.forEach(file => formData.append('vetReport', file));

    Object.entries(data).forEach(([key, value]) => {
        if (!['photos', 'xrayResults', 'vetReport'].includes(key) && value !== undefined && value !== null) {
            if (key === "pedigree") {
                formData.append("pedigree", JSON.stringify(value));
            } else {
                formData.append(key, value as any);
            }
        }
    });

    return formData;
}

function StepTimeLine({ step }: { step: number }) {
    return (
        <div className="flex justify-center items-center gap-3 text-zinc-600 pt-10 pb-2">
            {Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="flex items-center gap-3">
                    <div className={`h-10 w-10 text-sm flex items-center justify-center rounded-full transition-colors duration-300 ${step >= idx + 1 ? "font-bold bg-primary text-white" : "bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100"}`}>
                        {idx + 1}
                    </div>
                    {idx !== 2 && (
                        <div className={`h-1 w-12 rounded-full transition-colors duration-300 ${step - 1 > idx ? "bg-primary" : "bg-neutral-200 dark:bg-neutral-700"}`} />
                    )}
                </div>
            ))}
        </div>
    );
}

interface StepControllerProps {
    step: number;
    previousStep: () => void;
    handleNext: () => void;
    isLastStep: boolean;
    isSubmitting: boolean;
}

function StepController({ step, previousStep, handleNext, isLastStep, isSubmitting }: StepControllerProps) {
    return (
        <div className="flex justify-between mb-20 mt-10">
            <Button onClick={previousStep} type="button" variant='outline' size="lg" disabled={step === 1}>
                <LuChevronLeft size={18} /> Back
            </Button>
            <Button size="lg" onClick={handleNext} disabled={isSubmitting}>
                {isLastStep ? isSubmitting ? <Spinner /> : "Submit" : "Next"}
                {!isLastStep && <LuChevronRight size={18} />}
            </Button>
        </div>
    );
}


interface AddHorseFormProps {
    categories: any[];
    disciplines: any[];
    genders: any[];
}

export default function AddHorseForm(props: AddHorseFormProps) {
    const { categories, disciplines, genders } = props;
    const [currentStep, setCurrentStep] = useState(1);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submittedHorseId, setSubmittedHorseId] = useState("");

    const direction = useRef(0);
    const router = useRouter();

    const methods = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onTouched",
        defaultValues: {
            categoryId: "",
            name: "",
            // pedigreeURL: undefined,
            yearOfBirth: undefined,
            genderId: "",
            height: undefined,
            disciplineId: "",
            location: "",
            price: undefined,
            description: undefined,
            photos: [],
            // video: undefined,
            xrayResults: [],
            vetReport: []
        },
    });

    const stepFields: Record<number, (keyof FormData)[]> = {
        1: ["categoryId"],
        2: ["name", "yearOfBirth", "genderId", "height", "disciplineId", "location", "price", "description", "pedigree"],
        // 3: ["photos", "video"],
        3: ["photos"],
    };

    const stepTitles = ["Select Category", "Horse Details", "Upload Files"];
    const stepDescriptions = [
        "Choose the category that best describes your horse",
        "Enter the details of your horse",
        "Upload media files and finalize"
    ];

    // Auth check
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (!user) router.replace('/auth');
            else setLoading(false);
        });
        return unsubscribe;
    }, [router]);

    async function handleNext() {
        if (currentStep < 3) {
            const valid = await methods.trigger(stepFields[currentStep] || []);
            if (valid) {
                direction.current = 1;
                setCurrentStep(s => s + 1);
            } else {
                focusFirstError(methods);
            }
        } else {
            direction.current = 1;
            methods.handleSubmit(onSubmit)();
        }
    }

    function previousStep() {
        if (currentStep > 1) {
            direction.current = -1;
            setCurrentStep(s => s - 1);
        }
    }

    async function onSubmit(data: FormData) {
        setIsSubmitting(true);
        const user = auth.currentUser;
        if (!user) {
            toast.error("You must be logged in");
            setIsSubmitting(false);
            return;
        }

        try {
            const token = await user.getIdToken();
            const formData = convertToFormData(data);

            const res = await fetch("http://192.168.0.217:4000/api/v1/horses/create", {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
                body: formData
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "Failed to create horse");
            }

            const result = await res.json();
            setSubmittedHorseId(result.id);
            toast.success("Horse created successfully!");
            console.log("Horse created:", result);
        } catch (err) {
            console.error(err);
            toast.error("Error adding the horse", { duration: 5000 });
        } finally {
            setIsSubmitting(false);
        }
    }

    if (loading) return <div className="w-full h-screen flex items-center justify-center"><Spinner className="size-10" /></div>;
    if (submittedHorseId) return <HorseAddedSuccessCard id={submittedHorseId} />;

    return (
        <Container>
            <FormProvider {...methods}>
                <form onSubmit={e => e.preventDefault()}>
                    <StepTimeLine step={currentStep} />

                    <div className="text-center text-neutral-600">
                        <h2 className="text-2xl font-bold text-primary">
                            Step {currentStep} of 3 - {stepTitles[currentStep - 1]}
                        </h2>
                        <p className="hidden md:block">{stepDescriptions[currentStep - 1]}</p>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: direction.current === -1 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction.current === -1 ? 50 : -50 }}
                            transition={{ duration: 0.25 }}
                        >
                            {currentStep === 1 && <SelectCategory categories={categories} />}
                            {currentStep === 2 && <HorseDetail disciplines={disciplines} genders={genders} />}
                            {currentStep === 3 && <Files />}
                        </motion.div>
                    </AnimatePresence>

                    <StepController
                        previousStep={previousStep}
                        handleNext={handleNext}
                        step={currentStep}
                        isLastStep={currentStep === 3}
                        isSubmitting={isSubmitting}
                    />
                </form>
            </FormProvider>
        </Container>
    );
}
