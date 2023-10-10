import React from "react";
import Image from "next/image";
import DoctorsIllustration from "@/stuff/Doctors-bro.svg";

export default function Home() {
  return (
    <div className="px-16 flex justify-between items-center">
      <div className="w-3/5">
        <div className="font-[700] leading-[5.5rem]">
          <p className="text-[3.5rem]">
            Welcome to{" "}
            <span className="text-[4rem] .5text-teal-700">LifeMitra</span>{" "}
          </p>
          <p className="text-[3.5rem]">
            <span className="text-[4.5rem] text-teal-700">
              Mitrata
            </span> karo
          </p>
          <p className="text-[3.5rem]">
            apne
            <span className="text-[4.5rem] text-teal-700"> Jivan
            </span> se
          </p>
        </div>
        <p className="mt-2">
          LifeMitra is a premier short-form content agency. We make content that
          customers and algorithms love.
        </p>
      </div>
      <div className="w-2/5">
        <Image src={DoctorsIllustration} alt="Logo" sizes="large" />
      </div>
    </div>
  );
}
