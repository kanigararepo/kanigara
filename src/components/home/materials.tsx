import Image from "next/image";
import icon from "@/assets/images/icon.png";

type Material = {
  id: string;
  name: string;
  image: string;
  enDescription: string;
  idDescription: string;
};

interface MaterialProps {
  materials: Material[];
  lang: "en" | "id";
}

export default function Materials({ materials, lang }: MaterialProps) {
  return (
    <section id="our-product" className="w-full flex justify-center items-center py-10 gap-x-4">
      <div className="md:basis-2/3 overflow-hidden">
        <figure className="flex justify-center items-center gap-x-2">
          <Image src={icon} alt="Icon Kanigara Nur Series" quality={100} className="max-w-7" />
          <figcaption className="text-xl text-lime-600 font-bold">{lang == "id" ? "PRODUK KAMI" : "OUR PRODUCT"}</figcaption>
        </figure>
        <h1 className="font-bold text-4xl font-sans mt-4 text-center">{lang == "id" ? "Lihat Produk Kanigara Nurseries" : "Kanigara Nurseries's Products"}</h1>
        <div className="px-10 flex py-10 w-full overflow-x-auto">
          {materials.map((material, index) => {
            return (
              <div className="px-4 py-4 outline outline-slate-50 rounded-xl shadow-lg min-w-[250px]" key={index}>
                <figure className="flex flex-col justify-center items-center gap-x-2 relative">
                  <Image src={material.image} alt="Icon Kanigara Nur Series" width={200} height={200} className="h-32 w-auto object-cover" />
                  <figcaption className="text-xl text-lime-600 font-bold">{material.name}</figcaption>
                </figure>
                <p className="text-center font-light text-sm text-slate-600">{lang == "en" ? material.enDescription : material.idDescription}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <a href={"/documents/katalog.pdf"} download className="mx-auto px-4 py-2 bg-lime-600 text-white font-semibold rounded-full hover:bg-lime-700 mt-4 ">
            {lang == "id" ? "Dapatkan Katalog" : "Get Full Catalogue"}
          </a>
        </div>
      </div>
    </section>
  );
}
