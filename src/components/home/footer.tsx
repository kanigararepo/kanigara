import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import "@/components/home/home.css";
import InputFooter from "./components/inputfooter";

interface Props {
  lang: "en" | "id";
}

export default function Footer({ lang }: Props) {
  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="bg-lime-900 px-8 md:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <Image src={logo} alt="Kanigara Nurseries" width={200} height={60} className="brightness-200 opacity-40" />
            <p className="text-white text-lg font-semibold">{lang == "id" ? "Follow kami di" : "Follow Us on"}</p>
            <div className="flex gap-4">
              <Link target="_blank" href="#" className="text-white hover:text-white/80">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link target="_blank" href="#" className="text-white hover:text-white/80">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>
              <Link target="_blank" href="https://www.instagram.com/kanigara.nurseries?igsh=eTExeWM5NGRyNnNx" className="text-white hover:text-white/80">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold">{lang == "id" ? "Hubungi Kami" : "Contact Us"}</h3>
            <div className="space-y-2">
              <p className="text-white/80 text-sm">
                Ruko Fatmawati Soho, Jl Lebak Bulus
                <br />
                Cilandak Barat, Jakarta Selatan
                <br />
                12430
              </p>
              <div className="flex items-center gap-2 text-white/80">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <Link href={"https://wa.me/6282213772860"} className="hover:underline">
                  +62 822-1377-2860
                </Link>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@kaniganurseries.com</span>
              </div>
            </div>
          </div>

          {/* Pages Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold"> {lang == "id" ? "Bagian" : "Section"}</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="#landing" className="hover:text-white">
                  {lang == "id" ? "Beranda" : "Home"}
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white">
                  {lang == "id" ? "Tentang Kami" : "About Us"}
                </Link>
              </li>
              <li>
                <Link href="#our-product" className="hover:text-white">
                  {lang == "id" ? "Produk" : "Products"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Chat Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold"> {lang == "id" ? "Hubungi Kami" : "Grow With Us!"}</h3>
            <div className="flex items-center w-full bg-white rounded-full shadow-md px-5 py-2">
              <InputFooter lang={lang} />
            </div>
            <Link href="/documents/katalog.pdf" target="_blank" className="flex items-center justify-between w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold px-5 py-2 rounded-full">
              <span> {lang == "id" ? "Katalog" : "Cataloque"}</span>
              <span className="bg-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-green-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link href="/documents/company_profile.pdf" target="_blank" className="flex items-center justify-between w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold px-5 py-2 rounded-full">
              <span className="text-nowrap">Company Profile</span>
              <span className="bg-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-green-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black px-8 md:px-20 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white/80 text-sm">
          <p className="text-center mx-auto">© Kanigara Nurseries - All rights reserved</p>
          {/* <div className="flex gap-6">
              <Link href="/terms" className="hover:text-white">
                Terms and Conditions
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/disclaimer" className="hover:text-white">
                Disclaimer
              </Link>
            </div> */}
        </div>
      </div>
    </footer>
  );
}
