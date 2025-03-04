import Image from "next/image";
import icon from "@/assets/images/icon.png";
import whyus from "@/assets/images/whyus.png";
import "@/components/home/home.css";

interface Props {
  lang: "en" | "id";
}

export default function WhyUs({ lang }: Props) {
  return (
    <section id="why-choose-us" className="w-full flex justify-center items-center py-20 gap-x-4 bg-lime-800">
      <div className="md:basis-3/4 flex flex-col gap-y-5 px-4 md:px-0 overflow-hidden">
        <figure className="flex justify-center items-center gap-x-2">
          <Image src={icon} alt="Icon Kanigara Nur Series" quality={100} className="max-w-8 bg-white rounded px-1 py-1" />
          <figcaption className="text-xl text-white font-bold">{lang == "id" ? "BISNIS KAMI" : "OUR BUSINESS"}</figcaption>
        </figure>
        <h1 className="text-white font-bold text-4xl font-sans mt-4 text-center"> {lang == "id" ? "Kenapa Memilih Kanigara Nur Series?" : "Why Choose Kanigara Nur Series?"}</h1>
        <Image src={whyus} alt="Kenapa Memilih Kanigara Nur Series" quality={100} className="mt-4" />

        {/* Fixed Slider Section */}
        <div className="flex md:justify-between gap-x-4 overflow-x-auto max-w-full w-full snap-x snap-mandatory scrollbar-hide pb-4">
          {/* Card 1 - Landscape Design */}
          <div className="snap-center max-w-[250px] md:max-w-[350px] flex-shrink-0">
            <div className="bg-white rounded-3xl px-8 py-2 flex flex-col items-center text-center shadow-lg h-full mx-2">
              <div className="mb-6">
                <svg className="w-16 h-16 text-[#4D6544]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <h3 className="text-[#4D6544] text-xl md:text-2xl font-semibold mb-4"> {lang == "id" ? "Desain & Konstruksi Lanskap" : "Landscape Design & Construction"}</h3>
              <p className="text-[#4D6544]/80 text-sm md:text-base">
                {lang == "id"
                  ? "Transformasi ruang hijau impian Anda dengan desain profesional dan material berkualitas tinggi."
                  : "Readiness to answer challenges is our commitment. The manifestation of all that, Kanigara pours into professional performance."}
              </p>
            </div>
          </div>

          {/* Card 2 - Plant Supply */}
          <div className="snap-center max-w-[250px] md:max-w-[350px] flex-shrink-0">
            <div className="bg-white rounded-3xl px-8 py-2 flex flex-col items-center text-center shadow-lg h-full mx-2">
              <div className="mb-6">
                <svg className="w-16 h-16 text-[#4D6544]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 2H7c-1.1 0-2 .9-2 2v16l7-3 7 3V4c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 17V5h10v12z" />
                </svg>
              </div>
              <h3 className="text-[#4D6544] text-xl md:text-2xl font-semibold mb-4">{lang == "id" ? "Penyediaan Tanaman" : "Sales & Procurement"}</h3>
              <p className="text-[#4D6544]/80 text-sm md:text-base">
                {" "}
                {lang == "id"
                  ? "Berbagai jenis tanaman berkualitas dengan standarisasi tinggi untuk kebutuhan proyek Anda."
                  : "Product capability and standardization are Kanigara's advantages in capturing the potential in the national and international markets."}
              </p>
            </div>
          </div>

          {/* Card 3 - Maintenance */}
          <div className="snap-center max-w-[250px] md:max-w-[350px] flex-shrink-0">
            <div className="bg-white rounded-3xl px-8 py-2 flex flex-col items-center text-center shadow-lg h-full mx-2">
              <div className="mb-6">
                <svg className="w-16 h-16 text-[#4D6544]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 6c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm3.75 10.85L11 14V8h1.5v5.25l4 2.37-.75 1.23z" />
                </svg>
              </div>
              <h3 className="text-[#4D6544] text-xl md:text-2xl font-semibold mb-4">{lang == "id" ? "Perawatan Berkala" : "Sustainable Project Development"}</h3>
              <p className="text-[#4D6544]/80 text-sm md:text-base">
                {lang == "id" ? "Layanan perawatan profesional untuk menjaga keindahan dan kesehatan tanaman Anda." : "In Kanigara Nurseries' capacity as an expert, we present this service with the spirit of growing together."}
              </p>
            </div>
          </div>
        </div>
        <a href="https://wa.me/085219455690" target="_blank" className="mx-auto bg-white px-6 py-2 rounded-full text-lime-600 font-bold hover:bg-slate-100 text-xl">
          {lang == "id" ? "Hubungi Kami" : "Contact Us"}
        </a>
      </div>
    </section>
  );
}
