import React from "react";
import Image from "next/image";
import sm from "@/stuff/sm1 (3).svg";

export default function Home() {
  return (
    <div className="px-16 flex justify-between items-center">
      <div>
        <div className="font-[900]">
          <p className="text-[3rem] text-black">
            Welcome to{" "}
            <span className="text-[4rem] text-teal-700">LifeMitra</span>{" "}
          </p>
          <p className="text-[3rem]">
            <span className="text-[4rem] text-teal-700">
              Mitrata
            </span> karo
          </p>
          <p className="text-[3rem]">
            apne
            <span className="text-[4rem] text-teal-700"> Jivan
            </span> se
          </p>
        </div>
        <p className="mt-2">
          LifeMitra is a premier short-form content agency. We make content that
          customers and algorithms love.
        </p>
      </div>
      <div>
        <Image src={sm} alt="Logo" />
      </div>
    </div>
  );
}
