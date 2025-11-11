"use client"

import { useFormContext } from "react-hook-form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { LuTrophy } from "react-icons/lu"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { FindManyHorseCategoryQuery } from "@/graphql/sdk"
import { getGraphQLClient } from '@/lib/graphql'

export default function SelectCategory() {
  const [categories, setCategories] = useState<FindManyHorseCategoryQuery['findManyHorseCategory']>([])
  const { setValue, watch, register } = useFormContext()
  const selected = watch("categoryId")

  useEffect(() => {
    // graphql.findManyHorseCategory().then(res => setCategories(res.findManyHorseCategory ?? []))
    getGraphQLClient().then(client => client.findManyHorseCategory()).then(res => setCategories(res.findManyHorseCategory))
  }, [])

  return (
    <div className="w-full m-auto py-8">
      <RadioGroup
        onValueChange={(value) => setValue("categoryId", value, { shouldValidate: true })}
        value={selected}
        className="grid grid-cols-2 sm:grid md:grid-cols-4 lg:grid-cols-5 gap-3 font-semibold"
      >
        {categories.map((cat) => (
          <Label
            key={cat.id}
            htmlFor={cat.id}
            className={cn(
              "flex flex-col gap-2 text-lg font-semibold items-center justify-center rounded-xl border py-7 cursor-pointer transition-all ease-in-out duration-150",
              "hover:shadow-sm transition-colors ease-in-out duration-150",
              selected === cat.id
                ? "border-yellow-300 bg-yellow-50 dark:bg-yellow-300/5 dark:border-yellow-300/30 text-primary shadow-md"
                : "border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            )}
          >
            <RadioGroupItem
              id={cat.id}
              value={cat.id}
              className="hidden"
            />
            <LuTrophy className="text-primary" size={40} />
            {cat.name}
          </Label>
        ))}
      </RadioGroup>

      {/* hidden input for react-hook-form sync */}
      <input type="hidden" {...register("categoryId")} />
    </div>
  )
}
