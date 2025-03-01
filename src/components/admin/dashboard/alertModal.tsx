import { AlertContext } from "@/components/context/context";
import { useContext } from "react";

export default function AlertModal() {
  const alertCtx = useContext(AlertContext);

  const closeModal = () => {
    const modalDetail: HTMLDialogElement | null = document.getElementById("alert_modal") as HTMLDialogElement;
    if (modalDetail) modalDetail.close();
  };

  return (
    <dialog id="alert_modal" className="modal">
      <div className="modal-box px-10 py-6">
        <h1 className="text-center font-bold text-xl pt-10">{alertCtx?.success ? "Berhasil" : "Gagal"}</h1>
        <p className="text-center pb-10">{alertCtx?.message}</p>
        {/* Close button */}
        <div className="flex justify-end sticky bottom-0 bg-white border-t w-full h-full pt-2 gap-x-2">
          <button type="button" className="btn btn-outline" onClick={closeModal}>
            Keluar
          </button>
        </div>
      </div>
    </dialog>
  );
}
