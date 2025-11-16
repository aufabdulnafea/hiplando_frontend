'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCallback, useState } from "react";
import { z } from "zod";

// -----------------------
// Zod schema for numeric filters
// -----------------------
const numericStringToNumber = z
    .string()
    .optional()
    .transform((val) => (val === undefined || val === "" ? undefined : Number(val)));

const filtersSchema = z.object({
    ageMin: numericStringToNumber,
    ageMax: numericStringToNumber,
    priceMin: numericStringToNumber,
    priceMax: numericStringToNumber,
    heightMin: numericStringToNumber,
    heightMax: numericStringToNumber,
});

interface FilterFormProps {
    disciplines: { id: string; name: string }[];

    // callback when user clicks Apply
    applyFilters: (filters: {
        disciplines: string[];
        ageMin?: number;
        ageMax?: number;
        priceMin?: number;
        priceMax?: number;
        heightMin?: number;
        heightMax?: number;
    }) => void;
}

export function HorsesFilterForm({
    disciplines,
    applyFilters,
}: FilterFormProps) {

    // -----------------------
    // Local form state (draft values)
    // -----------------------
    const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([]);
    const [ageMin, setAgeMin] = useState<string>("");
    const [ageMax, setAgeMax] = useState<string>("");
    const [priceMin, setPriceMin] = useState<string>("");
    const [priceMax, setPriceMax] = useState<string>("");
    const [heightMin, setHeightMin] = useState<string>("");
    const [heightMax, setHeightMax] = useState<string>("");

    const toggleDiscipline = useCallback(
        (disciplineId: string, checked: boolean) => {
            if (checked) setSelectedDisciplines([...selectedDisciplines, disciplineId]);
            else setSelectedDisciplines(selectedDisciplines.filter((id) => id !== disciplineId));
        },
        [selectedDisciplines]
    );

    const clearAll = () => {
        setSelectedDisciplines([]);
        setAgeMin(""); setAgeMax("");
        setPriceMin(""); setPriceMax("");
        setHeightMin(""); setHeightMax("");
    };

    // -----------------------
    // Apply filters
    // -----------------------
    const handleApplyFilters = () => {
        const parsed = filtersSchema.safeParse({
            ageMin, ageMax, priceMin, priceMax, heightMin, heightMax
        });

        if (!parsed.success) {
            console.error("Invalid filter input", parsed.error);
            return;
        }

        applyFilters({
            ...parsed.data,
            disciplines: selectedDisciplines,
        });
    };

    return (
        <>
            <div className="flex justify-between items-center mb-2">
                <h4 className="text-primary font-bold text-lg hidden lg:block">Filters</h4>
                <Button variant="link" size="sm" className="p-0" onClick={clearAll}>
                    Clear all
                </Button>
            </div>

            {/* Disciplines */}
            <div className="mt-6">
                <Label className="font-semibold">Disciplines</Label>
                <div className="flex flex-col gap-2 mt-2">
                    {disciplines.map((discipline) => {
                        const checked = selectedDisciplines.includes(discipline.id);
                        return (
                            <div key={discipline.id} className="flex items-center gap-2 capitalize">
                                <Checkbox
                                    checked={checked}
                                    onCheckedChange={(checked) =>
                                        toggleDiscipline(discipline.id, Boolean(checked))
                                    }
                                    id={discipline.id}
                                />
                                <Label htmlFor={discipline.id}>{discipline.name}</Label>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Age */}
            <div className="mt-6">
                <Label className="font-semibold">Age Range</Label>
                <div className="flex gap-2 mt-1">
                    <Input type="number" placeholder="Min" value={ageMin} onChange={(e) => setAgeMin(e.target.value)} />
                    <Input type="number" placeholder="Max" value={ageMax} onChange={(e) => setAgeMax(e.target.value)} />
                </div>
            </div>

            {/* Price */}
            <div className="mt-6">
                <Label className="font-semibold">Price Range</Label>
                <div className="flex gap-2 mt-1">
                    <Input type="number" placeholder="Min" value={priceMin} onChange={(e) => setPriceMin(e.target.value)} />
                    <Input type="number" placeholder="Max" value={priceMax} onChange={(e) => setPriceMax(e.target.value)} />
                </div>
            </div>

            {/* Height */}
            <div className="mt-6">
                <Label className="font-semibold">Height (cm)</Label>
                <div className="flex gap-2 mt-1">
                    <Input type="number" placeholder="Min" value={heightMin} onChange={(e) => setHeightMin(e.target.value)} />
                    <Input type="number" placeholder="Max" value={heightMax} onChange={(e) => setHeightMax(e.target.value)} />
                </div>
            </div>

            <Button className="mt-4 w-full" onClick={handleApplyFilters}>
                Apply filters
            </Button>
        </>
    );
}
