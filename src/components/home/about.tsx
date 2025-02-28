import Image from "next/image";
import icon from "@/assets/images/icon.png";
import "@/components/home/home.css";

interface Props {
  lang: "en" | "id";
}

export default function About({ lang }: Props) {
  return (
    <section id="about" className="w-full flex justify-center items-center py-10 md:py-20">
      <div className="md:basis-1/2 flex flex-col gap-y-5">
        <figure className="flex justify-center items-center gap-x-2">
          <Image src={icon} alt="Icon Kanigara Nur Series" quality={100} className="max-w-8" />
          <figcaption className="text-xl text-lime-600 font-bold">KANIGARA NURSERIES</figcaption>
        </figure>
        <h1 className="text-center font-bold text-3xl">PT EKA NUGRAHA SEJAHTERA</h1>
        <p className="text-center text-pretty text-lime-600 w-[90%] mx-auto">
          {lang == "id"
            ? "Kanigara Nurseries sejak 2014 secara konsisten telah membantu memenuhi kebutuhan klien, baik secara grosir maupun eceran, dan secara profesional mendedikasikan diri menjadi standar tertinggi hortikultura."
            : "Born from a love for plants and experience in international landscaping and nurseries, Kanigara Nurseries grew by partnering with local farmers, turning their land into assets and equipping them with standardized knowledge to produce high-quality plants."}
        </p>
        <a href="#our-advantage" className="mx-auto text-center outline outline-1 outline-black font-bold px-4 py-2 rounded-full hover:bg-black hover:bg-opacity-5">
          {lang == "id" ? "Jelajahi Lebih Lanjut" : "Explore More"}
        </a>
      </div>
    </section>
  );
}
