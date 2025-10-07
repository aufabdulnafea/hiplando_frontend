'use client';
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { LuX } from "react-icons/lu";
import TextInput from "@/components/formElements/TextInput";

export default function Files() {
  const { register, watch, setValue } = useFormContext();
  const photos = watch("photos");
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  // Generate preview URLs whenever files change
  useEffect(() => {
    if (photos && photos.length > 0) {
      const filesArray = Array.from(photos as FileList);
      const urls = filesArray.map((file) => URL.createObjectURL(file));
      setPreviewUrls(urls);

      // cleanup URLs when unmount or files change
      return () => {
        urls.forEach((url) => URL.revokeObjectURL(url));
      };
    } else {
      setPreviewUrls([]);
    }
  }, [photos]);

  // remove photo at index
  const removePhoto = (index: number) => {
    const filesArray = Array.from(photos as FileList);
    filesArray.splice(index, 1);

    // Create a new FileList-like object using DataTransfer
    const dt = new DataTransfer();
    filesArray.forEach((file) => dt.items.add(file));
    setValue("photos", dt.files, { shouldValidate: true });
  };

  return (
    <div className="text-zinc-700 w-full flex flex-col gap-5 py-5">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Photos</h3>
          <p className="text-sm">
            <span className="hidden md:inline">{previewUrls.length}/10 images.</span> Minimum 3 required
          </p>
        </div>

        {/* 🖼️ Preview Grid */}
        {previewUrls.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {previewUrls.map((url, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={url}
                  alt={`Selected ${index + 1}`}
                  className="w-full h-40 object-cover"
                />
                <button
                  type="button"
                  onClick={() => removePhoto(index)}
                  className="absolute top-1 right-1 bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                >
                  <LuX size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* 📎 Dropzone */}
        <div className="flex items-center justify-center w-full mt-4">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-50 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-100 "
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">JPG, PNG up to 10MB each</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              multiple
              accept="image/*"
              {...register("photos")}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-between">
          <h3 className="font-bold text-lg">
            Video <span className="text-sm font-normal">(Optional)</span>
          </h3>
          <p className="text-sm text-zinc-500">YouTube or ClipMyHorse Link</p>
        </div>
        <TextInput
          placeholder="https://www.youtube.com/watch?"
          {...register("video")}
        />
      </div>
    </div>
  );
}
