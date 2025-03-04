import Image from "next/image";
import hero from "@/assets/images/hero.png";
import line1 from "@/assets/images/line1.png";
import line2 from "@/assets/images/line2.png";
import line3 from "@/assets/images/line3.png";
import line4 from "@/assets/images/line4.png";
import line5 from "@/assets/images/line5.png";
import "@/components/home/home.css";
import Customer from "@/components/home/customer";
import Navbar from "@/components/home/navbar";
import Materials from "@/components/home/materials";
import GrowWithUs from "@/components/home/growwithus";
import Footer from "@/components/home/footer";
import VirtualTour from "@/components/home/virtualtour";
import WhyUs from "@/components/home/whyus";
import AboutUs from "@/components/home/aboutus";
import OurAdvantage from "@/components/home/ouradvantage";
import About from "@/components/home/about";

type Material = {
  id: string;
  name: string;
  image: string;
  enDescription: string;
  idDescription: string;
};

async function getMaterials(): Promise<Material[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/materials/?page=all`, { cache: "no-store" }); // Ensure fresh data
  const result = await res.json();
  return result.data;
}

export default async function LandingPage() {
  const materials = await getMaterials(); // Fetch data on server

  return (
    <div className="scroll-smooth">
      <header className="w-100 h-screen relative" id="landing">
        <Image src={hero} alt="Hero background" fill priority className="object-cover" quality={100} />
        <Navbar lang="en" />
        <div className="h-full flex flex-col items-center justify-evenly relative z-10">
          <h1 className="text-white font-semibold text-4xl md:text-5xl text-center text-pretty md:max-w-[60%]">Elevate Your Green field with Kanigara Nurseries</h1>
          <summary className="text-center text-pretty md:max-w-[60%] px-2 md:px-0">
            <h2 className="text-white text-lg md:text-2xl font-sans">Welcome to Kanigara Nurseries! - We are here as a solution to create quality and sustainable green landscapes.</h2>
            <div className="mt-4">
              <a href="#about" className="px-4 py-2 bg-lime-600 text-white font-semibold rounded-full hover:bg-lime-700 md:text-xl">
                Get Started
              </a>
            </div>
          </summary>
        </div>
      </header>
      <About lang="en" />
      <OurAdvantage lang="en" />
      <AboutUs lang="en" />
      <WhyUs lang="en" />
      <VirtualTour lang="en" />
      <Materials lang="en" materials={materials} />
      <section id="image-line" className="w-full flex py-20">
        <div className="w-full flex overflow-x-scroll">
          <Image src={line1} alt="Gambar tanaman 1" className="" />
          <Image src={line2} alt="Gambar tanaman 1" className="" />
          <Image src={line3} alt="Gambar tanaman 1" className="" />
          <Image src={line4} alt="Gambar tanaman 1" className="" />
          <Image src={line5} alt="Gambar tanaman 1" className="" />
        </div>
      </section>
      <Customer lang="en" />
      <GrowWithUs lang="en" />
      <a href="https://wa.me/6285219455690" target="_blank">
        <aside className="fixed bottom-20 right-5 md:bottom-20 md:right-10 px-4 py-2 bg-lime-600 rounded-full text-white flex items-center gap-x-2 z-50">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_102_211)">
              <path
                d="M0.677557 15.8081C0.676812 18.4967 1.37932 21.1219 2.71514 23.4359L0.549805 31.3418L8.6406 29.2204C10.8784 30.4386 13.3857 31.077 15.9336 31.0772H15.9403C24.3515 31.0772 31.1984 24.2327 31.202 15.8201C31.2036 11.7436 29.6175 7.91027 26.7357 5.0263C23.8545 2.14258 20.0226 0.553618 15.9397 0.551758C7.52754 0.551758 0.681154 7.39579 0.677681 15.8081"
                fill="url(#paint0_linear_102_211)"
              />
              <path
                d="M0.132225 15.8035C0.131357 18.5889 0.859047 21.308 2.24249 23.7048L-0.000488281 31.8942L8.38041 29.6967C10.6896 30.9558 13.2896 31.6196 15.9351 31.6206H15.942C24.6549 31.6206 31.7477 24.53 31.7514 15.8162C31.7529 11.5932 30.1098 7.62208 27.1251 4.63479C24.14 1.64788 20.171 0.00173643 15.942 0C7.22754 0 0.135698 7.08961 0.132225 15.8035ZM5.12336 23.292L4.81043 22.7953C3.49495 20.7036 2.80063 18.2865 2.80162 15.8045C2.80435 8.56174 8.6988 2.66915 15.9469 2.66915C19.457 2.67064 22.7557 4.03895 25.2368 6.52155C27.7178 9.0044 29.083 12.3049 29.0822 15.8152C29.079 23.058 23.1844 28.9513 15.942 28.9513H15.9368C13.5786 28.9501 11.2657 28.3168 9.24875 27.12L8.76875 26.8353L3.79536 28.1393L5.12336 23.292Z"
                fill="url(#paint1_linear_102_211)"
              />
              <path
                d="M11.991 9.19662C11.6951 8.53888 11.3837 8.52561 11.1022 8.51407C10.8718 8.50415 10.6083 8.5049 10.3451 8.5049C10.0817 8.5049 9.65368 8.604 9.29188 8.99904C8.92971 9.39445 7.90918 10.35 7.90918 12.2934C7.90918 14.2369 9.32475 16.1152 9.52208 16.379C9.71966 16.6423 12.2549 20.7582 16.27 22.3415C19.6069 23.6574 20.286 23.3957 21.0102 23.3297C21.7345 23.264 23.3474 22.3744 23.6765 21.452C24.0058 20.5297 24.0058 19.7391 23.9071 19.5739C23.8083 19.4093 23.5449 19.3105 23.1499 19.113C22.7548 18.9156 20.8126 17.9598 20.4506 17.8279C20.0884 17.6962 19.8251 17.6305 19.5616 18.026C19.2982 18.4209 18.5417 19.3105 18.3112 19.5739C18.0808 19.838 17.8503 19.8708 17.4553 19.6733C17.0601 19.4751 15.7879 19.0584 14.2785 17.7128C13.1042 16.6658 12.3114 15.3727 12.081 14.9772C11.8505 14.5823 12.0563 14.3682 12.2544 14.1714C12.4318 13.9944 12.6495 13.7101 12.8472 13.4795C13.0442 13.2488 13.1099 13.0842 13.2416 12.8208C13.3735 12.5571 13.3075 12.3264 13.2089 12.1288C13.1099 11.9313 12.3423 9.97764 11.991 9.19662Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient id="paint0_linear_102_211" x1="1533.16" y1="3079.56" x2="1533.16" y2="0.551758" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1FAF38" />
                <stop offset="1" stopColor="#60D669" />
              </linearGradient>
              <linearGradient id="paint1_linear_102_211" x1="1587.6" y1="3189.42" x2="1587.6" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F9F9F9" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
              <clipPath id="clip0_102_211">
                <rect width="31.7519" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Contact Us
        </aside>
      </a>
      <Footer lang="en" />
    </div>
  );
}
