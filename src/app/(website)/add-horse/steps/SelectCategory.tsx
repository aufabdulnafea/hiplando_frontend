'use client';
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { useFormContext } from "react-hook-form";
import { LuTrophy } from "react-icons/lu";

const categories = [
    "Show Jumpers",
    "Dressage",
    "Hunters",
    "Ponies",
    "Youngsters",
    "Foals & Mares",
    "Arabians",
    "Warmbloods",
    "Eventing",
    "Western",
    "Driving",
    "Leisure",
];

// export default function SelectCategory() {
//     const { setValue, watch, register } = useFormContext();
//     const selected = watch("category");

//     return (
//         <div className="w-full m-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 py-8 text-zinc-700 font-semibold">
//             {categories.map((cat) => (
//                 <div
//                     key={cat}
//                     role="button"
//                     onClick={() => setValue("category", cat, { shouldValidate: true })}
//                     className={`
//                         flex flex-col gap-2 items-center justify-center hover:shadow-md rounded-xl border py-7 cursor-pointer transition-all ease-in-out duration-150 
//                         ${selected === cat ? " border-secondary/70 bg-secondary/5 text-primary shadow-md" : "border-zinc-300 hover:bg-zinc-100"
//                         }`}
//                 >
//                     <LuTrophy className="text-primary" size={40} />
//                     {cat}
//                 </div>
//             ))}

//             {/* hidden input to register category with react-hook-form */}
//             <input type="hidden" {...register("category")} />
//         </div>
//     );
// }





export default function SelectCategory() {
  const { setValue, watch, register } = useFormContext()
  const selected = watch('category')

  return (
    <RadioGroup
      value={selected}
      onChange={(value) => setValue('category', value, { shouldValidate: true })}
    >
      <div className="w-full m-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 py-8 text-zinc-700 font-semibold">
        {categories.map((cat) => (
          <RadioGroup.Option
            key={cat}
            value={cat}
            className={({ checked }) =>
              `
              flex flex-col gap-2 items-center justify-center rounded-xl border py-7 cursor-pointer transition-all ease-in-out duration-150
              ${checked
                ? 'border-secondary bg-secondary/10 text-primary shadow-md'
                : 'border-zinc-300 hover:bg-zinc-100 hover:shadow-sm'}
              `
            }
          >
            <LuTrophy className="text-primary" size={40} />
            {cat}
          </RadioGroup.Option>
        ))}
      </div>

      {/* hidden input to sync with react-hook-form */}
      <input type="hidden" {...register('category')} />
    </RadioGroup>
  )
}


