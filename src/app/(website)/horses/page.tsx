import Container from "@/components/container";
import HorseCard from "@/components/horse-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Grid3X3, List } from "lucide-react";
// import { SelectItem, SelectTrigger } from "@radix-ui/react-select";


export default function HorsesPage() {
    return (
        <Container>
            <div className="flex flex-col py-15 gap-4 border-b">
                <h2 className="text-3xl text-primary font-extrabold">Horses for sale</h2>
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex-1">
                        <Input placeholder="Search horses by name or breed" className="w-full" />
                    </div>
                    <div className="flex gap-2">
                        <Select>
                            <SelectTrigger className="flex-1 md:w-[180px]">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>

                        <ToggleGroup type="single" defaultValue="bold">
                            <ToggleGroupItem className="border-l border-t border-b data-[state=on]:bg-primary data-[state=on]:text-primary-foreground" value="bold" aria-label="Toggle bold">
                                <Grid3X3 className="h-4 w-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem className="border-r border-t border-b data-[state=on]:bg-primary data-[state=on]:text-primary-foreground" value="italic" aria-label="Toggle italic">
                                <List className="h-4 w-4" />
                            </ToggleGroupItem>
                        </ToggleGroup>

                    </div>
                </div>
            </div>


            {/* main aria */}
            <div className="w-full flex py-5">
                <div className="min-w-xs pr-5">
                    <div className="flex justify-between items-start">
                        <h4 className="text-primary font-bold text-lg">Filters</h4>
                        <Button variant="link" size="sm" className="text-foreground">Clear all</Button>
                    </div>
                </div>
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    <HorseCard />
                    <HorseCard />
                    <HorseCard />
                    <HorseCard />
                    <HorseCard />
                    <HorseCard />
                </div>
            </div>
        </Container>
    )
}