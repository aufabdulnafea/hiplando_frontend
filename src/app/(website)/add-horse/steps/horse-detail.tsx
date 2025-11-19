import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// horsetelex
// my show advisor
// POST
// https://www.horsetelex.com/search/search/search-horses
// {"name":"Test","father":null,"mother":null,"fatherOfMother":null,"year":null,"studbook":null,"reg":null,"fei":null,"chipnumber":null,"page":1}


interface HorseDetailProps {
    disciplines: any[];
    genders: any[];
}

export default function HorseDetail(props: HorseDetailProps) {
    const { disciplines, genders } = props;

    const { register, watch, setValue } = useFormContext();

    const name = watch("name");
    const yearOfBirth = watch("yearOfBirth");
    const gender = watch("genderId");
    const discipline = watch("disciplineId");
    const location = watch("location");
    const price = watch("price");
    const height = watch("height");

    return (
        <div className="py-10">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-5">
                    <div>
                        <Label htmlFor="name" className="text-sm">
                            Horse Name*
                        </Label>
                        <Input id="name" {...register("name")} autoComplete="off" required />
                    </div>

                    <div>
                        <Label htmlFor="pedigree" className="text-sm">
                            HorseTelex Link
                        </Label>
                        <Input id="pedigree" {...register("pedigree")} autoComplete="off" required />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="year-of-birth" className="text-sm">
                                Year of Birth*
                            </Label>
                            <Input id="year-of-birth" type="number" {...register("yearOfBirth", { valueAsNumber: true })} required />
                        </div>

                        <div>
                            <Label htmlFor="gender" className="text-sm">
                                Gender*
                            </Label>
                            <Select
                                onValueChange={(val) => setValue("genderId", val, { shouldValidate: true })}
                                value={gender}
                            >
                                <SelectTrigger className="w-full capitalize">
                                    <SelectValue placeholder="Select gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    {genders.map((el) => (
                                        <SelectItem className="capitalize" value={el.id} key={el.id}>
                                            {el.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="height" className="text-sm">
                            Height (cm)*
                        </Label>
                        <Input id="height" type="number" {...register("height", { valueAsNumber: true })} required />
                    </div>

                    <div>
                        <Label htmlFor="discipline" className="text-sm">
                            Discipline*
                        </Label>
                        <Select onValueChange={(val) => setValue("disciplineId", val, { shouldValidate: true })} value={discipline}>
                            <SelectTrigger className="w-full capitalize">
                                <SelectValue placeholder="Select discipline" />
                            </SelectTrigger>
                            <SelectContent>
                                {disciplines.map((el) => (
                                    <SelectItem className="capitalize" value={el.id} key={el.id}>
                                        {el.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label htmlFor="location" className="text-sm">
                            Location*
                        </Label>
                        <Input id="location" {...register("location")} autoComplete="off" required />
                    </div>

                    <div>
                        <Label htmlFor="price" className="text-sm">
                            Price*
                        </Label>
                        <Input id="price" type="number" {...register("price", { valueAsNumber: true })} autoComplete="off" required />
                    </div>

                    <div>
                        <Label htmlFor="description" className="text-sm">
                            Description
                        </Label>
                        <Textarea id="description" {...register("description")} autoComplete="off" />
                    </div>
                </div>

                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Preview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between">
                                <h4>Name:</h4>
                                <h4>{name || "-"}</h4>
                            </div>
                            <div className="flex justify-between">
                                <h4>Age & Sex:</h4>
                                <h4>
                                    {(yearOfBirth || "-") +
                                        (gender
                                            ? " / " + genders.find((el) => el.id === gender)?.name
                                            : "")}
                                </h4>
                            </div>
                            <div className="flex justify-between">
                                <h4>Discipline:</h4>
                                <h4>
                                    {discipline
                                        ? disciplines.find((el) => el.id === discipline)?.name
                                        : "-"}
                                </h4>
                            </div>
                            <div className="flex justify-between">
                                <h4>Height:</h4>
                                <h4>{height || "-"}</h4>
                            </div>
                            <div className="flex justify-between">
                                <h4>Location:</h4>
                                <h4>{location || "-"}</h4>
                            </div>
                            <div className="flex justify-between">
                                <h4>Price:</h4>
                                <h4>{price || "-"}</h4>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
