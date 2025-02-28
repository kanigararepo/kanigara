import Image from "next/image";
import icon from "@/assets/images/icon.png";
import aboutus from "@/assets/images/about-us.png";
import "@/components/home/home.css";

interface Props {
  lang: "en" | "id";
}

export default function AboutUs({ lang }: Props) {
  return (
    <section id="about-us" className="w-full flex justify-center items-center pb-10 md:py-20 gap-x-4">
      <div className="flex flex-col-reverse md:flex-row w-full gap-x-20 md:basis-3/4 px-10 md:px-0 gap-y-4 md:gap-y-0">
        <div className="basis-1/2 w-full">
          <Image src={aboutus} alt="Gambar Tentang Kanigara Nurseries" quality={100} className="object-cover" />
        </div>
        <div className="basis-1/2 flex flex-col w-full gap-y-4 md:justify-around">
          <figure className="flex items-center gap-x-2">
            <Image src={icon} alt="Icon Kanigara Nur Series" quality={100} className="max-w-7" />
            <figcaption className="text-xl text-lime-600 font-bold">{lang == "id" ? "TENTANG KAMI" : "ABOUT US"}</figcaption>
          </figure>
          <h1 className="text-3xl font-bold font-sans text-pretty"> {lang == "id" ? "Wujudkan Lanskap Impian dengan Kanigara Nurseries!" : "Make Your Dream Landscape Come True with Kanigara Nurseries!"}</h1>
          <p className="text-lime-600 text-start text-pretty">
            {" "}
            {lang == "id"
              ? "Kanigara Nurseries sejak 2014 secara konsisten telah membantu memenuhi kebutuhan klien, baik secara grosir maupun eceran."
              : "Kanigara Nurseries since 2014 has consistently helped meet client needs, both wholesale and retail."}
          </p>
          <div className="flex flex-wrap w-full sm:justify-between gap-4">
            {lang == "id"
              ? ["Berkualitas", "Berstandar", "Berkelanjutan"].map((text, index) => (
                  <p key={index} className="flex items-center gap-x-2">
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 1.16675L5 12.8334L1 8.16675" stroke="#83B71B" strokeWidth="1.94444" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {text}
                  </p>
                ))
              : ["Good Quality", "High Standard", "Sustainable"].map((text, index) => (
                  <p key={index} className="flex items-center gap-x-2">
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 1.16675L5 12.8334L1 8.16675" stroke="#83B71B" strokeWidth="1.94444" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {text}
                  </p>
                ))}
          </div>
          <div>
            <a href="/documents/company_profile.pdf" download className="px-6 py-3 bg-lime-700 hover:bg-lime-600 rounded-full text-white font-semibold">
              {lang == "id" ? "Dapatkan Company Profile" : "Get Company Profile"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
