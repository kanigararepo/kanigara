"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import icon from "@/assets/images/icon.png";
import profile from "@/assets/images/profile.png";

interface Props {
  lang: "en" | "id";
}

export default function Customer({ lang }: Props) {
  // Sample testimonial data
  const testimonials = [
    {
      quote: "Terimakasih atas kerja yang profesional dari Pihak Kanigara Nurseries. Saya bisa membangung ruang hijau yang sudah saya impikan.",
      quoteEn: "Thank you for the professional work from Kanigara Nurseries. I can build the green space I've been dreaming of.",
      author: "Aisyah Wulandari",
      image: profile,
    },
    {
      quote: "Pelayanan sangat memuaskan. Tanaman yang dikirim selalu dalam kondisi prima dan sesuai dengan ekspektasi.",
      quoteEn: "Very satisfying service. The plants sent are always in prime condition and meet expectations.",
      author: "Budi Santoso",
      image: profile,
    },
    {
      quote: "Kualitas bibit tanaman dari Kanigara Nurseries luar biasa. Tumbuh dengan baik di taman saya.",
      quoteEn: "The quality of plant seeds from Kanigara Nurseries is extraordinary. Grows well in my garden.",
      author: "Dewi Anggraini",
      image: profile,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  useEffect(() => {
    // Reset animation state after transition completes
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this to your CSS transition duration

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section id="customer" className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row pb-20 pt-0 md:pt-20 px-10 md:px-32 gap-y-4 md:gap-y-0">
      <div className="md:basis-1/2 flex flex-col gap-y-2 md:gap-y-10 ">
        <figure className="flex justify-start items-center gap-x-2">
          <Image src={icon} alt="Icon Kanigara Nur Series" quality={100} className="max-w-7" />
          <figcaption className="text-xl text-lime-600 font-bold">{lang == "id" ? "TESTIMONI" : "TESTIMONIALS"}</figcaption>
        </figure>
        <h1 className="font-bold text-3xl md:w-[80%] font-sans text-start">{lang == "id" ? "Lihat Apa Yang Pelanggan Kami Katakan" : "Look What Our Customers Say"}</h1>
        <p>
          {lang == "id"
            ? "Kepercayaan pelanggan adalah bukti kualitas kami. Temukan pengalaman mereka dalam menciptakan lanskap hijau yang indah dan berkelanjutan bersama Kanigara Nurseries!"
            : "Customer trust is proof of our quality. Discover their experience in creating beautiful and sustainable green landscapes with Kanigara Nurseries!"}
        </p>
        <div className="md:flex gap-x-10 hidden">
          <button onClick={handlePrev} className="px-4 py-3 rounded-full outline outline-lime-700 text-lime-700 text-3xl font-bold hover:bg-lime-100 transition-colors">
            &larr;
          </button>
          <button onClick={handleNext} className="px-4 py-3 rounded-full outline outline-lime-700 text-lime-700 text-3xl font-bold hover:bg-lime-100 transition-colors">
            &rarr;
          </button>
        </div>
      </div>
      <div className="md:basis-1/2 flex flex-col gap-y-4 md:gap-y-0">
        <div className={`px-10 py-10 bg-white rounded-lg shadow-lg md:shadow-2xl transition-opacity duration-500 ease-in-out ${isAnimating ? "opacity-0" : "opacity-100"}`}>
          <svg width="60" height="38" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9606 0.545898L0 37.8091H21.7241L30.1478 0.545898H15.9606ZM45.8128 0.545898L29.8522 37.8091H51.5764L60 0.545898H45.8128Z" fill="#497D00" fillOpacity="0.67" />
          </svg>
          <p className="font-bold text-xl font-sans text-pretty text-start my-4">{lang == "id" ? testimonials[currentIndex].quote : testimonials[currentIndex].quoteEn}</p>
          <hr />
          <div className="flex items-center pt-4 gap-x-4">
            <Image src={testimonials[currentIndex].image} alt="profile" className="rounded-full w-14" />
            <p className="font-bold text-xl">{testimonials[currentIndex].author}</p>
          </div>
        </div>
        <div className="flex gap-x-10 md:hidden justify-center">
          <button onClick={handlePrev} className="px-4 py-3 rounded-full outline outline-lime-700 text-lime-700 text-3xl font-bold hover:bg-lime-100 transition-colors">
            &larr;
          </button>
          <button onClick={handleNext} className="px-4 py-3 rounded-full outline outline-lime-700 text-lime-700 text-3xl font-bold hover:bg-lime-100 transition-colors">
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
