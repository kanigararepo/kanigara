"use client";

import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { ResponseType } from "../../../../libs/response";
import { AlertContext, MaterialContext } from "@/components/context/context";

export default function MaterialEditModal() {
  const context = useContext(MaterialContext);
  const alertCtx = useContext(AlertContext);
  const [formData, setFormData] = useState({
    name: "",
    idDescription: "",
    enDescription: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load current material data into form when modal opens
  useEffect(() => {
    if (context?.selectedMaterial) {
      setFormData({
        name: context?.selectedMaterial?.name,
        idDescription: context?.selectedMaterial?.idDescription,
        enDescription: context?.selectedMaterial?.enDescription,
      });
      // Set current image as preview
      setImagePreview(context?.selectedMaterial?.image);
    }
  }, [context?.selectedMaterial]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alertCtx?.setMessage("Image size must be less than 5MB");
        alertCtx?.setSuccess(true);
        if (alertCtx?.open) alertCtx?.open();
        return;
      }

      // Check file type
      if (!file.type.startsWith("image/")) {
        alertCtx?.setMessage("File must be an image");
        alertCtx?.setSuccess(true);
        if (alertCtx?.open) alertCtx?.open();
        return;
      }

      setImageFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        setImagePreview(e?.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // Create FormData object
      const submitFormData = new FormData();
      submitFormData.append("name", formData.name);
      submitFormData.append("idDescription", formData.idDescription);
      submitFormData.append("enDescription", formData.enDescription);

      // Only append image if a new one was selected
      if (imageFile) {
        submitFormData.append("image", imageFile);
      }

      // Send to API route
      const response = await fetch(`/api/materials/${context?.selectedMaterial?.id}`, {
        method: "PUT",
        body: submitFormData,
      });

      const data: ResponseType = await response.json();

      if (!response.ok) {
        alertCtx?.setMessage(data.message);
        alertCtx?.setSuccess(false);
        if (alertCtx?.open) alertCtx?.open();
        return;
      }

      // Success
      closeModal();

      // Trigger refetch in the parent component
      context?.setShouldRefetch(true);
      alertCtx?.setMessage(data.message);
      alertCtx?.setSuccess(true);
      if (alertCtx?.open) alertCtx?.open();
      if (context?.setSelectedMaterial) context?.setSelectedMaterial(data.data);
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
        alertCtx?.setMessage(e.message);
      } else {
        console.log("An unknown error occurred");
        alertCtx?.setMessage("An unknown error occurred");
      }
      alertCtx?.setSuccess(true);
      if (alertCtx?.open) alertCtx?.open();
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = (): void => {
    const modalEdit = document.getElementById("edit_modal") as HTMLDialogElement;
    if (modalEdit) modalEdit.close();
  };

  return (
    <dialog id="edit_modal" className="modal">
      <form className="py-0 modal-box w-11/12 max-w-5xl px-10" onSubmit={handleSubmit}>
        <h3 className="font-bold text-xl sticky top-0 bg-white py-4">Edit Material</h3>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Nama Material</span>
          </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="input input-bordered w-full" placeholder="Masukkan nama material" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Gambar</span>
            <span className="label-text-alt">Kosongkan jika tidak ingin mengubah gambar</span>
          </label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="file-input file-input-bordered w-full" />

          {imagePreview && (
            <div className="mt-2">
              <p className="text-sm mb-1">Preview:</p>
              <div className="relative h-40 w-40 border rounded-md overflow-hidden">
                <Image src={imagePreview} alt="Preview" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Deskripsi (Indonesia)</span>
          </label>
          <textarea name="idDescription" value={formData.idDescription} onChange={handleChange} className="textarea textarea-bordered h-24" placeholder="Masukkan deskripsi dalam Bahasa Indonesia" required></textarea>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Description (English)</span>
          </label>
          <textarea name="enDescription" value={formData.enDescription} onChange={handleChange} className="textarea textarea-bordered h-24" placeholder="Enter description in English" required></textarea>
        </div>

        <div className="flex justify-between sticky bottom-0 bg-white border-t w-full h-full py-4">
          <button type="button" className="btn btn-outline" onClick={closeModal}>
            Batal
          </button>

          <button type="submit" className={`btn btn-primary`} disabled={isSubmitting}>
            {isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
        </div>
      </form>
    </dialog>
  );
}
