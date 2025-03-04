"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
interface Props {
  lang: "en" | "id";
}
export default function Navbar({ lang }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar text-white md:px-20 z-50 fixed top-0 w-full bg-lime-600 rounded-b-2xl">
      <div className="flex items-center justify-between w-full px-4 md:px-0">
        {/* Logo */}
        <Link href="/" className="text-xl text-white font-semibold">
          <Image src={logo} alt="Logo Kanigara Nurseries" priority quality={100} className="h-8 w-28 px-4 py-1 bg-white rounded-full" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="https://wa.me/6285219455690" target="_blank" className="bg-white text-lime-700 font-semibold px-4 py-2 rounded-lg hover:bg-lime-700 hover:text-white transition">
            {" "}
            {lang == "id" ? "Hubungi Kami" : "Contact Us"}
          </Link>
          <div className="dropdown dropdown-end ms-4">
            <div tabIndex={0} role="button" className="bg-transparent text-white font-semibold hover:text-white px-2 py-2 rounded-lg">
              {lang == "id" ? "Bahasa" : "Language"}
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-2 text-black">
              <li>
                <Link href="/">Indonesia</Link>
              </li>
              <li>
                <Link href="/en">English</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden bg-white px-1 py-1 rounded" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Popup on right side */}
      {isOpen && (
        <div className="md:hidden absolute right-0 top-full mt-0 bg-white rounded-bl-lg shadow-lg w-64">
          <div className="flex flex-col py-4 w-full">
            <Link href="https://wa.me/6285219455690" target="_blank" className="px-8 py-3 text-lime-700 font-medium hover:bg-gray-100">
              {lang == "id" ? "Hubungi Kami" : "Contact Us"}
            </Link>
            <div className="dropdown dropdown-end text-lime-700">
              <div tabIndex={0} role="button" className="bg-transparent text-lime-700 font-medium hover:bg-slate-200 px-8 py-3 rounded-lg">
                {lang == "id" ? "Bahasa" : "Language"}
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-2 text-black">
                <li>
                  <Link href="/">Indonesia</Link>
                </li>
                <li>
                  <Link href="/en">English</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
