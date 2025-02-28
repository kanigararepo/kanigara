"use client";

import MaterialModal from "@/components/admin/dashboard/addModal";
import AlertModal from "@/components/admin/dashboard/alertModal";
import MaterialDetailModal from "@/components/admin/dashboard/detailModal";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

// Mock data type - replace with your actual data type
type Material = {
  id: string;
  name: string;
  image: string;
  enDescription: string;
  idDescription: string;
};

type MaterialContextType = {
  setShouldRefetch: (value: boolean) => void;
  setSelectedMaterial?: (value: Material) => void;
  selectedMaterial?: Material;
  onClose?: (value: void) => void;
};

type AlertContextType = {
  success?: boolean;
  message?: string;
  setSuccess: (value: boolean) => void;
  setMessage: (value: string) => void;
  open?: (value: void) => void;
};

export const MaterialContext = createContext<MaterialContextType | undefined>(undefined);
export const AlertContext = createContext<AlertContextType | undefined>(undefined);

export default function Dashboard() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [shouldRefetch, setShouldRefetch] = useState(true);
  // Add state for selected material
  const [selectedMaterial, setSelectedMaterial] = useState<any | null>(null);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`/api/users/profile`, {
          method: "GET",
        });

        await response.json();

        if (!response.ok) {
          router.push("/admin");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchMaterial = async () => {
      try {
        const response = await fetch(`/api/materials/?page=${currentPage}`, {
          method: "GET",
        });

        const result = await response.json();

        if (!response.ok) {
          router.push("/admin");
        } else {
          setMaterials(result.data.materials);
          setCurrentPage(result.data.page);
          setTotalPages(result.data.total_page);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setShouldRefetch(false);
      }
    };

    if (shouldRefetch) {
      fetchMaterial();
    }
  }, [shouldRefetch, currentPage]);

  const handlePagination = (direction: "prev" | "next") => {
    setCurrentPage((prev) => (direction === "prev" ? Math.max(1, prev - 1) : Math.min(totalPages, prev + 1)));
    setShouldRefetch(true);
  };

  return (
    <div className="w-full bg-white rounded px-4 py-10">
      <h1 className="text-2xl font-bold font-sans text-center mb-8">Daftar Material</h1>
      <div className="flex justify-end">
        <button
          className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white mb-4"
          onClick={() => {
            const modalAdd: any = document.getElementById("my_modal_1");
            modalAdd.showModal();
          }}
        >
          Tambah Material
        </button>
        <MaterialContext.Provider value={{ setShouldRefetch: setShouldRefetch }}>
          <AlertContext.Provider
            value={{
              success: success,
              message,
              setMessage,
              setSuccess,
              open: () => {
                const modalAdd: any = document.getElementById("alert_modal");
                modalAdd.showModal();
              },
            }}
          >
            <MaterialModal />
          </AlertContext.Provider>
        </MaterialContext.Provider>
      </div>
      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {materials.map((material: any) => (
              <tr key={material.id}>
                <td className="px-6 py-4 whitespace-nowrap w-32 h-32 relative">
                  <Image src={`${material.image}`} alt={material.name} fill className=" px-4 py-4 object-contain rounded" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">{material.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                  <button
                    onClick={() => {
                      setSelectedMaterial(material);
                      const modalAdd: any = document.getElementById("detail_modal");
                      modalAdd.showModal();
                    }}
                    className="px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-500"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <MaterialContext.Provider value={{ setShouldRefetch, selectedMaterial: selectedMaterial, onClose: () => setSelectedMaterial(null), setSelectedMaterial }}>
        <AlertContext.Provider
          value={{
            success: success,
            message,
            setMessage,
            setSuccess,
            open: () => {
              const modalAdd: any = document.getElementById("alert_modal");
              modalAdd.showModal();
            },
          }}
        >
          <MaterialDetailModal />
          <AlertModal />
        </AlertContext.Provider>
      </MaterialContext.Provider>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6">
        <button onClick={() => handlePagination("prev")} disabled={currentPage === 1} className={`px-4 py-2 mx-1 text-sm ${currentPage === 1 ? "bg-gray-200 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"} rounded`}>
          Previous
        </button>

        <span className="mx-4 text-sm">
          Page {currentPage} of {totalPages}
        </span>

        <button onClick={() => handlePagination("next")} disabled={currentPage === totalPages} className={`px-4 py-2 mx-1 text-sm ${currentPage === totalPages ? "bg-gray-200 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"} rounded`}>
          Next
        </button>
      </div>
    </div>
  );
}
