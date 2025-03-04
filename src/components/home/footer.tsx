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
              <Link target="_blank" href="https://www.threads.net/@kanigara.nurseries" className="text-white hover:text-white/80">
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.6627 11.124C16.5586 11.0743 16.4536 11.0266 16.3477 10.981C16.1627 7.567 14.2977 5.613 11.1657 5.593H11.1237C9.2507 5.593 7.6927 6.393 6.7337 7.848L8.4557 9.029C9.1717 7.942 10.2957 7.711 11.1247 7.711H11.1527C12.1837 7.717 12.9627 8.017 13.4657 8.601C13.8327 9.027 14.0777 9.616 14.1987 10.358C13.2205 10.1994 12.2276 10.1514 11.2387 10.215C8.2617 10.387 6.3467 12.124 6.4757 14.537C6.5407 15.76 7.1507 16.814 8.1927 17.501C9.0727 18.083 10.2077 18.367 11.3867 18.303C12.9447 18.218 14.1667 17.623 15.0187 16.537C15.6657 15.712 16.0747 14.643 16.2557 13.296C16.9977 13.744 17.5477 14.333 17.8517 15.041C18.3677 16.246 18.3977 18.225 16.7837 19.838C15.3687 21.252 13.6677 21.863 11.0977 21.882C8.2467 21.862 6.0897 20.947 4.6877 19.165C3.3747 17.495 2.6967 15.085 2.6717 12C2.6967 8.915 3.3747 6.504 4.6877 4.835C6.0897 3.053 8.2457 2.139 11.0977 2.118C13.9687 2.138 16.1627 3.058 17.6187 4.848C18.3327 5.727 18.8707 6.831 19.2257 8.118L21.2437 7.58C20.8137 5.995 20.1367 4.63 19.2167 3.497C17.3507 1.2 14.6207 0.024 11.1047 0H11.0907C7.5807 0.024 4.8827 1.205 3.0697 3.51C1.4557 5.56 0.623703 8.414 0.595703 11.992V12.008C0.623703 15.586 1.4557 18.439 3.0697 20.49C4.8827 22.795 7.5807 23.976 11.0897 24H11.1047C14.2247 23.978 16.4237 23.162 18.2347 21.351C20.6057 18.983 20.5347 16.015 19.7527 14.193C19.1927 12.886 18.1237 11.826 16.6627 11.124ZM11.2757 16.187C9.9707 16.261 8.6157 15.675 8.5477 14.421C8.4977 13.491 9.2097 12.452 11.3557 12.329C11.6017 12.3143 11.843 12.3073 12.0797 12.308C12.8597 12.308 13.5877 12.383 14.2507 12.528C14.0037 15.616 12.5537 16.117 11.2757 16.187Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link target="_blank" href="https://www.tiktok.com/@kanigara.nurseries?_t=ZS-8uNWOpqfMPM&_r=1" className="text-white hover:text-white/80">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.5957 11.75C1.5957 6.68279 1.5957 4.14805 3.16973 2.57403C4.74376 1 7.27736 1 12.3457 1C17.4129 1 19.9476 1 21.5217 2.57403C23.0957 4.14805 23.0957 6.68166 23.0957 11.75C23.0957 16.8172 23.0957 19.3519 21.5217 20.926C19.9476 22.5 17.414 22.5 12.3457 22.5C7.27849 22.5 4.74376 22.5 3.16973 20.926C1.5957 19.3519 1.5957 16.8183 1.5957 11.75Z"
                    stroke="white"
                    strokeWidth="1.69737"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.689 10.6274C9.76106 10.4961 7.64501 10.7123 6.60848 12.6303C5.57196 14.5483 6.61641 16.5444 7.26933 17.3026C7.91319 18.0121 9.96022 19.3553 12.1317 18.0438C12.6704 17.719 13.3414 17.4757 14.1018 14.9353L14.0135 4.93896C13.8664 6.03999 15.0829 8.62225 18.5444 8.92778"
                    stroke="white"
                    strokeWidth="1.69737"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link target="_blank" href="https://www.facebook.com/share/15q1RyRkVm/" className="text-white hover:text-white/80">
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
                Jl. Randu Sari 38, Sinar Sari, Kec. Dramaga, Kabupaten Bogor, Jawa Barat 16680
                {/* <br />
                Cilandak Barat, Jakarta Selatan
                <br />
                12430 */}
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
                <Link href={"https://wa.me/6285219455690"} className="hover:underline">
                  +62-852-1945-5690
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
