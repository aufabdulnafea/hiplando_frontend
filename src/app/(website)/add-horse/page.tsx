'use client';

import Container from "@/components/Container";
import SelectCategory from "./steps/SelectCategory";
import HorseDetail from "./steps/HorseDetail";
import Files from "./steps/Files";

import { z } from "zod";
import { useState, useRef } from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    category: z.string().min(1, "Please select a category"),
    name: z.string().min(2, "Horse name is required"),
    pedigree: z.string().optional(),
    age: z.string().min(1, "Age is required"),
    sex: z.string().min(1, "Sex is required"),
    height: z.string().min(1, "Height is required"),
    discipline: z.string().min(1, "Discipline is required"),
    location: z.string().min(1, "Location is required"),
    priceRange: z.string().min(1, "Price range is required"),
    description: z.string().optional(),
    veterinaryDocuments: z.boolean().optional(),
    xrayResults: z.boolean().optional(),
    photos: z.any().optional(),
    video: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

function StepTimeLine({ step }: { step: number }) {
    return (
        <div className="flex justify-center items-center gap-3 text-zinc-600 pt-10 pb-5">
            {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex items-center gap-3">
                    <div
                        className={`h-10 w-10 text-sm flex items-center justify-center rounded-full transition-colors duration-300 ${step >= index + 1 ? "font-bold bg-primary text-white" : "bg-zinc-200"
                            }`}
                    >
                        {index + 1}
                    </div>
                    {index !== 2 && (
                        <div
                            className={`h-1 w-12 rounded-full transition-colors duration-300 ${step - 1 > index ? "bg-primary" : "bg-zinc-200"
                                }`}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

function StepController({
    step,
    previousStep,
    handleNext,
    isLastStep,
}: {
    step: number;
    previousStep: () => void;
    handleNext: () => void;
    isLastStep: boolean;
}) {
    return (
        <div className="flex justify-between mb-20 mt-10">
            <button
                type="button"
                onClick={previousStep}
                disabled={step === 1}
                className="p-2.5 cursor-pointer px-6 bg-transparent border border-zinc-300 hover:bg-white text-zinc-600 rounded-md flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <LuChevronLeft size={18} />
                Back
            </button>

            <button
                type="button"
                onClick={handleNext}
                className="p-2.5 cursor-pointer px-6 bg-primary text-white rounded-md flex items-center gap-1"
            >
                {isLastStep ? "Submit" : "Next"}
                {!isLastStep && <LuChevronRight size={18} />}
            </button>
        </div>
    );
}

export default function AddHorse() {
    const [currentStep, setCurrentStep] = useState(1);
    const direction = useRef<number>(0); // 1 = forward, -1 = back

    const methods = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onTouched",
        defaultValues: {
            category: "",
            name: "",
            pedigree: "",
            age: "",
            sex: "",
            height: "",
            discipline: "",
            location: "",
            priceRange: "",
            description: "",
            veterinaryDocuments: false,
            xrayResults: false,
            photos: undefined,
            video: "",
        },
    });

    // fields to validate per step
    const stepFields: Record<number, (keyof FormData)[]> = {
        1: ["category"],
        2: ["name", "age", "sex", "height", "discipline", "location", "priceRange"],
        3: ["photos"], // final step might have optional requirements; adjust as needed
    };

    async function handleNext() {
        console.log('handle next')
        if (currentStep < 3) {
            const fields = stepFields[currentStep] ?? [];
            const valid = fields.length
                ? await methods.trigger(fields as Parameters<typeof methods.trigger>[0])
                : true;

            if (valid) {
                direction.current = 1;
                setCurrentStep((s) => s + 1);
            } else {
                // focus first invalid field
                const firstErrorField = Object.keys(methods.formState.errors)[0];
                console.log('first field', firstErrorField)
                if (firstErrorField) {
                    const el = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement | null;
                    if (el && typeof el.focus === "function") el.focus();
                }
            }
        } else {
            direction.current = 1;
            methods.handleSubmit(onSubmit)();
        }
    }

    function previousStep() {
        if (currentStep > 1) {
            direction.current = -1;
            setCurrentStep((s) => s - 1);
        }
    }

    function onSubmit(data: FormData) {
        // final submission
        console.log("Form submitted:", data);
        // proceed with API call or further action
    }

    const stepTitle =
        currentStep === 1 ? "Select Category" : currentStep === 2 ? "Horse Details" : "Upload Files";

    return (
        <Container>
            <FormProvider {...methods}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <StepTimeLine step={currentStep} />

                    <div className="text-center text-zinc-600">
                        <h2 className="text-center text-2xl font-bold text-primary">
                            Step {currentStep} of 3 - {stepTitle}
                        </h2>
                        <p className="hidden md:block">
                            {currentStep === 1 && "Choose the category that best describes your horse"}
                            {currentStep === 2 && "Enter the details of your horse"}
                            {currentStep === 3 && "Upload media files and finalize"}
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: direction.current === -1 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction.current === -1 ? 50 : -50 }}
                            transition={{ duration: 0.25 }}
                        >
                            {currentStep === 1 && <SelectCategory />}
                            {currentStep === 2 && <HorseDetail />}
                            {currentStep === 3 && <Files />}
                        </motion.div>
                    </AnimatePresence>

                    <StepController
                        previousStep={previousStep}
                        handleNext={handleNext}
                        step={currentStep}
                        isLastStep={currentStep === 3}
                    />
                </form>
            </FormProvider>
        </Container>
    );
}
