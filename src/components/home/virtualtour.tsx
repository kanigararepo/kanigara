import Image from "next/image";
import icon from "@/assets/images/icon.png";

interface Props {
  lang: "en" | "id";
}

export default function VirtualTour({ lang }: Props) {
  return (
    <section id="a-virtual-tour" className="w-full flex flex-col justify-center items-center py-20 gap-x-4">
      <figure className="flex justify-center items-center gap-x-2">
        <Image src={icon} alt="Icon Kanigara Nur Series" quality={100} className="max-w-7" />
        <figcaption className="text-xl text-lime-600 font-bold">{lang == "id" ? "JANGKAUAN BISNIS" : "OUR BUSINESS REACH"}</figcaption>
      </figure>
      <h1 className="font-bold text-4xl font-sans mt-4 text-center">{lang == "id" ? "Jelajahi Jangkauan Pengiriman Kanigara Nurseries" : "Explore Kanigara Nurseries Delivery"}</h1>
      <div className="marquee overflow-hidden w-full">
        <ul className="marquee-card w-full flex mt-10 gap-x-4 px-4 py-4">
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Jakarta</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Bogor</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Depok</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Tangerang</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Bekasi</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Belitung</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Semarang</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Lampung</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Batam</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Palembang</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Riau</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Medan</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Aceh</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Belitung</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Semarang</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Surabaya</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Bali</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">IKN</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Halmahera</li>
          <li className="px-6 py-4 bg-gray-50 bg-opacity-5 text-lime-600 font-bold text-xl outline outline-[0.1px] outline-slate-100 shadow-lg rounded-lg">Merauke</li>
        </ul>
      </div>
      <a href="#our-product" className="mx-auto text-center text-lime-600 outline outline-1 outline-lime-600 font-bold px-4 py-2 rounded-full hover:bg-black hover:bg-opacity-5 mt-10">
        {lang == "id" ? "Jelajahi Lebih Lanjut" : "Explore More"}
      </a>
    </section>
  );
}
