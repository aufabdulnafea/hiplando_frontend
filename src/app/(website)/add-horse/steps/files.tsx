'use client';

import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Upload, X } from "lucide-react";
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"
import { FileUpload, FileUploadDropzone, FileUploadItem, FileUploadItemDelete, FileUploadItemMetadata, FileUploadItemPreview, FileUploadList } from "@/components/ui/file-upload";


export default function Files() {
  const { register, watch, setValue } = useFormContext();
  const photos = watch<"photos">("photos", []) as File[];
  watch("xray", null);
  watch("veterinary", null)
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  useEffect(() => {
    if (photos && photos.length > 0) {
      const filesArray = Array.from(photos as File[]);
      const urls = filesArray.map((file) => URL.createObjectURL(file));
      setPreviewUrls(urls);
      return () => {
        urls.forEach((url) => URL.revokeObjectURL(url));
      };
    } else {
      setPreviewUrls([]);
    }
  }, [photos]);

  return (
    <div className="w-full flex flex-col gap-5 py-5">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Photos</h3>
          <p className="text-sm">
            <span className="hidden md:inline">{previewUrls.length}/3 images.</span> Minimum 1 required
          </p>
        </div>

        <FileUpload
          value={photos}
          onValueChange={el => setValue("photos", el)}
          // onFileValidate={() => {}}
          // onFileReject={onFileReject}
          accept="image/*"
          maxFiles={3}
          className="w-full"
          multiple
        >
          {photos.map((file) => (
            <FileUploadItem key={file.name} value={file}>
              <FileUploadItemPreview />
              <FileUploadItemMetadata />
              <FileUploadItemDelete asChild>
                <Button variant="ghost" size="icon" className="size-7">
                  <X />
                </Button>
              </FileUploadItemDelete>
            </FileUploadItem>
          ))}
          <FileUploadDropzone>
            <div className="flex flex-col items-center gap-1 py-4">
              <div className="flex items-center justify-center rounded-full border p-2.5">
                <Upload className="size-6 text-muted-foreground" />
              </div>
              <p className="font-medium text-sm">Drag & drop files here</p>
              <p className="text-muted-foreground text-xs">
                Or click to browse (max 3 files)
              </p>
            </div>
          </FileUploadDropzone>
          <FileUploadList>
          </FileUploadList>
        </FileUpload>

      </div>

      <div>
        <div className="flex flex-col justify-between">
          <h3 className="font-bold text-lg">
            Video <span className="text-sm font-normal">(Optional)</span>
          </h3>
          <p className="text-sm text-neutral-500">YouTube or ClipMyHorse Link</p>
        </div>
        <Input
          placeholder="https://www.youtube.com/watch?"
          {...register("video")}
        />
      </div>


      <div>
        <div className="flex flex-col justify-between">
          <h3 className="font-bold text-lg">
            X-Ray Results <span className="text-sm font-normal">(Optional)</span>
          </h3>
        </div>
        <div className="grid w-full items-center gap-3">
          <Input
            id="picture"
            type="file"
            multiple={false}
            accept=".pdf,image/*"
            onChange={el => setValue("xray", el)}
          />
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-between">
          <h3 className="font-bold text-lg">
            Veterinary Report <span className="text-sm font-normal">(Optional)</span>
          </h3>
        </div>
        <div className="grid w-full items-center gap-3">
          <Input
            id="picture"
            type="file"
            multiple={false}
            accept=".pdf,image/*"
            onChange={el => setValue("veterinary", el)}
          />
        </div>
      </div>

    </div>
  );
}
