"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ResponseType } from "../../../../libs/response";

export default function DynamicSidebar({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const onLogout = async () => {
    try {
      const response: Response = await fetch("/api/users/logout", {
        method: "POST",
      });

      const result: ResponseType = await response.json();

      if (!response.ok) {
        console.log(result.message);
      } else {
        router.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="w-full">
      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden fixed top-4 right-4 p-2 text-gray-600 hover:text-gray-900 z-50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-lime-700 text-white transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 z-40`}>
        <div className="p-4">
          {/* Close Button for Mobile */}
          <button onClick={() => setIsOpen(false)} className="md:hidden absolute top-4 right-4 p-2 text-white hover:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Sidebar Content */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link href="/admin/dashboard" className="block px-4 py-2 bg-white text-black hover:bg-opacity-25 hover:text-white rounded font-bold">
                    <div className="flex gap-x-2 items-center">
                      <svg className="w-6 h-6 hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                        <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z" />
                      </svg>
                      Material
                    </div>
                  </Link>
                </li>
                <li>
                  <button onClick={onLogout} className="block px-4 py-2 text-white hover:bg-black hover:bg-opacity-25 rounded font-bold w-full">
                    <div className="flex gap-x-2 items-center">
                      <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                      </svg>
                      Logout
                    </div>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-64 pt-14 md:pt-8 p-8 bg-slate-100 min-h-screen">
        <main>{children}</main>
      </div>
    </div>
  );
}
