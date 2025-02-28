import { AlertContext, MaterialContext } from "@/app/admin/dashboard/page";
import { useContext, useState } from "react";
import { ResponseType } from "../../../../libs/response";

export default function MaterialDeleteModal() {
  const context = useContext(MaterialContext);
  const alertCtx = useContext(AlertContext);

  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => {
    const modalDetail: HTMLDialogElement | null = document.getElementById("delete_modal") as HTMLDialogElement;
    if (modalDetail) modalDetail.close();
  };

  const deleteSuccess = () => {
    context?.setShouldRefetch(true);
    closeModal();
    const modalDetail: HTMLDialogElement | null = document.getElementById("detail_modal") as HTMLDialogElement;
    if (modalDetail) modalDetail.close();
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);
      // Send to API route
      const response = await fetch(`/api/materials/${context?.selectedMaterial?.id}`, {
        method: "DELETE",
        // Don't set Content-Type header - browser will set it with boundary for FormData
      });

      const data: ResponseType = await response.json();

      alertCtx?.setMessage(data.message);
      if (!response.ok) {
        alertCtx?.setSuccess(false);
        alertCtx?.open && alertCtx?.open();
        closeModal();
      } else {
        alertCtx?.setSuccess(true);
        alertCtx?.open && alertCtx?.open();
        deleteSuccess();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <dialog id="delete_modal" className="modal">
      <div className="modal-box p-10">
        <h1 className="text-center font-bold text-xl py-10">Apakah anda yakin ingin menghapus ?</h1>
        {/* Close button */}
        <div className="flex justify-end sticky bottom-0 bg-white border-t w-full h-full py-2 gap-x-2">
          <button type="button" className="btn btn-outline" onClick={closeModal} disabled={isLoading}>
            Batal
          </button>
          <button type="button" className="btn btn-outline btn-error" onClick={onDelete} disabled={isLoading}>
            {isLoading ? "Menunggu" : "Hapus"}
          </button>
        </div>
      </div>
    </dialog>
  );
}
