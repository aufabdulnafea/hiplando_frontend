"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/container";
import HorseCard, { HorseCardSkeleton } from "@/components/horse-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Grid3X3, List, Filter } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetOverlay } from "@/components/ui/sheet";

import { HorseWhereInput, InputMaybe } from "@/graphql/sdk";
import { useHorses } from "@/hooks/use-horses";
import { SortingState } from "@tanstack/react-table";

import { HorsesFilterForm } from "./horses-filter-form";
import { buildHorseWhere } from './build-horse-where'

export const PAGE_SIZE = 6;

export interface HorsesGridProps {
    disciplines: { id: string; name: string }[];
}

import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export function HorsesGrid({ disciplines }: HorsesGridProps) {
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [sorting, setSorting] = useState<SortingState>([]);
    const [pageIndex, setPageIndex] = useState<number>(0);

    const [search, setSearch] = useState("");
    const [appliedFilters, setAppliedFilters] = useState<{
        disciplines: string[];
        ageMin?: number;
        ageMax?: number;
        priceMin?: number;
        priceMax?: number;
        heightMin?: number;
        heightMax?: number;
    }>({ disciplines: [] });

    const [where, setWhere] = useState<InputMaybe<HorseWhereInput> | undefined>(undefined);

    useEffect(() => {
        const newWhere = buildHorseWhere({
            search,
            disciplines: appliedFilters.disciplines,
            ageMin: appliedFilters.ageMin,
            ageMax: appliedFilters.ageMax,
            priceMin: appliedFilters.priceMin,
            priceMax: appliedFilters.priceMax,
            heightMin: appliedFilters.heightMin,
            heightMax: appliedFilters.heightMax,
        });
        setWhere(newWhere);
    }, [appliedFilters, search]);



    const applyFilters = (filtersFromForm: {
        disciplines: string[];
        ageMin?: number;
        ageMax?: number;
        priceMin?: number;
        priceMax?: number;
        heightMin?: number;
        heightMax?: number;
    }) => setAppliedFilters(filtersFromForm);

    const { data, isFetching, isLoading } = useHorses({
        pageIndex,
        pageSize: PAGE_SIZE,
        where,
        sorting,
    });

    useEffect(() => {
        console.log("loading ----")
    }, [isLoading, isFetching])

    return (
        <div className="mb-30">
            <Container>
                <div className="flex flex-col py-10 gap-4 border-b">
                    <h2 className="text-3xl text-primary font-extrabold">Horses for Sale</h2>

                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="flex-1">
                            <Input
                                placeholder="Search horses by name or breed"
                                className="w-full"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="flex gap-2 items-center">
                            <div className="flex-1">
                                <Select>
                                    <SelectTrigger className="w-full min-w-[120px]">
                                        <SelectValue placeholder="Sort by" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="price">Price</SelectItem>
                                        <SelectItem value="age">Age</SelectItem>
                                        <SelectItem value="breed">Breed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <ToggleGroup
                                type="single"
                                value={viewMode}
                                onValueChange={(val) => val && setViewMode(val as "grid" | "list")}
                            >
                                <ToggleGroupItem
                                    value="grid"
                                    aria-label="Grid view"
                                    className="border data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                                >
                                    <Grid3X3 className="h-4 w-4" />
                                </ToggleGroupItem>
                                <ToggleGroupItem
                                    value="list"
                                    aria-label="List view"
                                    className="border data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                                >
                                    <List className="h-4 w-4" />
                                </ToggleGroupItem>
                            </ToggleGroup>

                            <Sheet>
                                <SheetOverlay className="backdrop-blur-xs" />
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="icon" className="lg:hidden">
                                        <Filter className="h-5 w-5" />
                                    </Button>
                                </SheetTrigger>

                                <SheetContent side="left">
                                    <SheetHeader>
                                        <SheetTitle>Filters</SheetTitle>
                                    </SheetHeader>

                                    <div className="px-4">
                                        <HorsesFilterForm
                                            disciplines={disciplines}
                                            applyFilters={applyFilters}
                                        />
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-row py-6 gap-5">
                    <aside className="hidden lg:block w-64 pr-5">
                        <HorsesFilterForm
                            disciplines={disciplines}
                            applyFilters={applyFilters}
                        />
                    </aside>

                    <div className="flex flex-1 flex-col">
                        <div className="flex-1 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {isLoading || isFetching ? (
                                Array.from({ length: PAGE_SIZE }).map((_, idx) => <HorseCardSkeleton key={idx} />)
                            ) : (
                                data?.horses?.map((horse) => <HorseCard key={horse.id} horse={horse} />)
                            )}
                        </div>
                        <div className="flex justify-center mt-5">
                            <Pagination>
                                <PaginationContent>

                                    <PaginationItem>
                                        <PaginationPrevious
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (pageIndex > 0) setPageIndex(pageIndex - 1);
                                            }}
                                            className={pageIndex === 0 ? "pointer-events-none opacity-50" : ""}
                                        />
                                    </PaginationItem>

                                    {[...Array(Math.ceil((data?.count ?? 0 + 1) / PAGE_SIZE))].map((_, i) => (
                                        <PaginationItem key={i}>
                                            <PaginationLink
                                                href="#"
                                                isActive={i === pageIndex}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setPageIndex(i);
                                                }}
                                            >
                                                {i + 1}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}

                                    <PaginationItem>
                                        <PaginationNext
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if ((data?.count ?? 0 + 1) / PAGE_SIZE > pageIndex + 1) setPageIndex(pageIndex + 1);
                                            }}
                                            className={pageIndex >= (data?.count ?? 0 + 1) / PAGE_SIZE ? "pointer-events-none opacity-50" : ""}
                                        />
                                    </PaginationItem>

                                </PaginationContent>
                            </Pagination>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
