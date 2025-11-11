"use client";

import { useState } from "react";
import Container from "@/components/container";
import HorseCard from "@/components/horse-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { Grid3X3, List, Filter } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function HorsesPage() {
    const [viewMode, setViewMode] = useState("grid");

    return (
        <Container>
            {/* Header */}
            <div className="flex flex-col py-10 gap-4 border-b">
                <h2 className="text-3xl text-primary font-extrabold">Horses for Sale</h2>

                <div className="flex flex-col md:flex-row gap-3">
                    {/* Search */}
                    <div className="flex-1">
                        <Input placeholder="Search horses by name or breed" className="w-full" />
                    </div>

                    {/* Filters & View Controls */}
                    <div className="flex gap-2 items-center">
                        <Select>
                            <SelectTrigger className="flex-1 md:w-[180px]">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="price">Price</SelectItem>
                                <SelectItem value="age">Age</SelectItem>
                                <SelectItem value="breed">Breed</SelectItem>
                            </SelectContent>
                        </Select>

                        <ToggleGroup
                            type="single"
                            value={viewMode}
                            onValueChange={(value) => value && setViewMode(value)}
                            // className=""
                        >
                            <ToggleGroupItem
                                value="grid"
                                aria-label="Grid view"
                                className="border-l border-t border-b data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                            >
                                <Grid3X3 className="h-4 w-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="list"
                                aria-label="List view"
                                className="border-r border-t border-b data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                            >
                                <List className="h-4 w-4" />
                            </ToggleGroupItem>
                        </ToggleGroup>

                        {/* Mobile Filter Toggle */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="lg:hidden">
                                    <Filter className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[280px]">
                                <SheetHeader>
                                    <SheetTitle>Filters</SheetTitle>
                                </SheetHeader>
                                <div className="mt-4 flex flex-col gap-4">
                                    <div className="flex justify-between items-start">
                                        <h4 className="text-primary font-bold text-lg">Filters</h4>
                                        <Button variant="link" size="sm" className="text-foreground p-0">
                                            Clear all
                                        </Button>
                                    </div>
                                    {/* Add your filter controls here */}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>

            {/* Main Area */}
            <div className="w-full flex flex-col md:flex-row py-6 gap-5">
                {/* Sidebar (hidden on small screens) */}
                <div className="hidden lg:block min-w-[220px] pr-5">
                    <div className="flex justify-between items-start">
                        <h4 className="text-primary font-bold text-lg">Filters</h4>
                        <Button variant="link" size="sm" className="text-foreground p-0">
                            Clear all
                        </Button>
                    </div>
                    {/* Add filter options here */}
                </div>

                {/* Horses grid */}
                <div
                    className={`flex-1 grid gap-4 ${viewMode === "grid"
                            ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                            : "grid-cols-1"
                        }`}
                >
                    <HorseCard />
                    <HorseCard />
                    <HorseCard />
                    <HorseCard />
                    <HorseCard />
                    <HorseCard />
                </div>
            </div>
        </Container>
    );
}
