import Image from "next/image";
import growRight from "@/assets/images/grow-with-us-right.png";
import growLeft from "@/assets/images/grow-with-us-left.png";

interface Props {
  lang: "en" | "id";
}
export default function GrowWithUs({ lang }: Props) {
  return (
    <section id="come-grow-with-us" className="flex justify-center px-4 md:px-20 pb-10 md:py-20">
      <div className="outline outline-2 outline-lime-700 py-20 px-20 w-full rounded-3xl md:rounded-full h-96 relative overflow-hidden">
        <div className="w-full h-full flex flex-col justify-center items-center gap-y-10">
          <h1 className="font-bold font-sans text-3xl md:text-4xl text-center text-pretty">{lang == "id" ? "Mari Berjalan Bersama Kami" : "Come grow with us"}</h1>
          <a href="https://wa.me/6282213772860" target="_blank" className="px-4 py-2 bg-lime-600 hover:bg-lime-700 text-white rounded-full font-bold ">
            {lang == "id" ? "Hubungi Kami" : "Contact Us"}
          </a>
        </div>
        <Image src={growRight} alt={lang == "id" ? "Gambar come grow with us" : "Picture come grow with us"} className="absolute right-0 bottom-0 h-28 w-28 md:h-72 md:w-80" />
        <Image src={growLeft} alt={lang == "id" ? "Gambar come grow with us" : "Picture come grow with us"} className="absolute left-0 bottom-0 w-[10rem] md:w-[28rem]" />
      </div>
    </section>
  );
}
