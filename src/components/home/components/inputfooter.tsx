"use client";

import { useState } from "react";

interface Props {
  lang: "id" | "en";
}
export default function InputFooter({ lang }: Props) {
  const [message, setMessage] = useState("");

  const onSend = () => {
    window.open(`https://wa.me/6285219455690?text=${message}`, "_blank");
  };

  return (
    <>
      <input type="text" placeholder={lang == "id" ? "Masukkan nama anda" : "Insert your name"} className="flex-1 bg-transparent outline-none text-gray-500 placeholder-gray-400" onChange={(e) => setMessage(e.target.value)} />
      <button className="bg-green-700 p-3 rounded-full" onClick={onSend}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );
}
