"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import MaterialDeleteModal from "./deleteModal";
import MaterialEditModal from "./editModal";
import { MaterialContext } from "@/components/context/context";

export default function MaterialDetailModal() {
  const context = useContext(MaterialContext);
  const [activeTab, setActiveTab] = useState<"id" | "en">("id");

  const closeModal = () => {
    const modalDetail: HTMLDialogElement | null = document.getElementById("detail_modal") as HTMLDialogElement;
    if (modalDetail) modalDetail.close();
    if (context?.onClose) context?.onClose();
  };

  return (
    <dialog id="detail_modal" className="modal">
      <div className="py-0 modal-box w-11/12 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-6 py-4">
          {/* Material Image */}
          <div className="md:w-1/3">
            <div className="relative w-full h-64 rounded-lg overflow-hidden border">
              {context?.selectedMaterial?.image ? (
                <Image src={context?.selectedMaterial.image} alt={context?.selectedMaterial.name} fill style={{ objectFit: "contain" }} className="" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <p className="text-gray-400">No image available</p>
                </div>
              )}
            </div>
          </div>

          {/* context?.selectedMaterial Details */}
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">{context?.selectedMaterial?.name}</h2>

            {/* Language Tabs */}
            <div className="tabs tabs-boxed mb-4">
              <button className={`tab ${activeTab === "id" ? "bg-lime-700 text-white" : ""}`} onClick={() => setActiveTab("id")} type="button">
                Bahasa Indonesia
              </button>
              <button className={`tab ${activeTab === "en" ? "bg-lime-700 text-white" : ""}`} onClick={() => setActiveTab("en")} type="button">
                English
              </button>
            </div>

            {/* Description based on active tab */}
            <div className="bg-base-200 p-4 rounded-lg">
              {activeTab === "id" ? (
                <div className="prose">
                  <h3 className="text-lg font-semibold mb-2">Deskripsi</h3>
                  <p>{context?.selectedMaterial?.idDescription}</p>
                </div>
              ) : (
                <div className="prose">
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p>{context?.selectedMaterial?.enDescription}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Close button */}
        <div className="flex justify-end sticky bottom-0 bg-white border-t w-full h-full py-4 gap-x-2">
          <button type="button" className="btn btn-outline" onClick={closeModal}>
            Keluar
          </button>
          <button
            type="button"
            className="btn btn-outline btn-error"
            onClick={() => {
              const modalAdd = document.getElementById("delete_modal") as HTMLDialogElement | null;
              modalAdd?.showModal();
            }}
          >
            Hapus
          </button>
          <button
            type="button"
            className="btn btn-outline btn-primary"
            onClick={() => {
              const modalAdd = document.getElementById("edit_modal") as HTMLDialogElement | null;
              modalAdd?.showModal();
            }}
          >
            Edit
          </button>
        </div>
      </div>
      <MaterialDeleteModal />
      <MaterialEditModal />
    </dialog>
  );
}
