"use client";

import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Image from "next/image";
import { AlertContext, MaterialContext } from "@/components/context/context";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type MaterialForm = {
  name: string;
  image: File | string;
  idDescription: string;
  enDescription: string;
};
export default function MaterialModal() {
  const context = useContext(MaterialContext);
  const alertCtx = useContext(AlertContext);
  const [formData, setFormData] = useState<MaterialForm>({
    name: "",
    image: "",
    idDescription: "",
    enDescription: "",
  });
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | StaticImport | undefined | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files && e?.target?.files[0];
    if (file) {
      // For preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result);
      };
      reader.readAsDataURL(file);

      // In a real app, you'd handle the file upload to get a URL
      // For now, we'll just store the file name
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, you would:
      // 1. Upload the image to storage and get URL
      // 2. Send the form data to your API

      console.log("Submitting data:", formData);

      // Create FormData object
      const submitFormData = new FormData();
      submitFormData.append("name", formData.name);
      submitFormData.append("idDescription", formData.idDescription);
      submitFormData.append("enDescription", formData.enDescription);
      submitFormData.append("image", formData.image);

      // Send to API route
      const response = await fetch("/api/materials", {
        method: "POST",
        body: submitFormData,
        // Don't set Content-Type header - browser will set it with boundary for FormData
      });

      const data = await response.json();

      if (!response.ok) {
        alertCtx?.setMessage(data.message);
        alertCtx?.setSuccess(false);
        if (alertCtx?.open) alertCtx?.open();
        return;
      }

      // Success: reset form and close modal
      setFormData({
        name: "",
        image: "",
        idDescription: "",
        enDescription: "",
      });
      setImagePreview(null);
      context?.setShouldRefetch(true);
      alertCtx?.setMessage(data.message);
      alertCtx?.setSuccess(true);
      if (alertCtx?.open) alertCtx?.open();

      // Close the modal (assuming there's a close button with method="dialog")
      closeModal();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    const modalAdd = document.getElementById("my_modal_1") as HTMLDialogElement | null;
    modalAdd?.close();
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <form className="py-0 modal-box w-11/12 max-w-5xl px-4 md:px-10" onSubmit={handleSubmit}>
        <h3 className="font-bold text-lg py-4 sticky top-0 bg-white">Modal Tambah Material</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Nama Material</span>
          </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="input input-bordered w-full" placeholder="Masukkan nama material" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Gambar</span>
          </label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="file-input file-input-bordered w-full" required={!formData.image} />

          {imagePreview && (
            <div className="mt-2">
              <p className="text-sm mb-1">Preview:</p>
              <div className="relative h-40 w-40 border rounded-md overflow-hidden">
                <Image src={`${imagePreview}`} alt="Preview" fill style={{ objectFit: "cover" }} />
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
          <button type="button" className="btn btn-outline" onClick={closeModal} disabled={isSubmitting}>
            Batal
          </button>

          <button type="submit" className={`btn btn-primary`} disabled={isSubmitting}>
            {isSubmitting ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </form>
    </dialog>
  );
}
