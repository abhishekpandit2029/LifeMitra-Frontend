// "use client";
// import React from "react";
// import notes from "@/stuff/notes.svg";
// import videographer from "@/stuff/videographer.svg";
// import writer from "@/stuff/writer.svg";
// import editor from "@/stuff/editor.svg";
// import creator from "@/stuff/creator.svg";
// import pxfuel from "@/stuff/pxfuel.jpg";
// import Image from "next/image";
// import schedule from "@/stuff/schedule.svg";
// import Link from "next/link";

// export default function About() {
//   const buttonsClassname =
//     "p-3 bg-teal-700 text-white w-auto font-medium rounded-xl items-center flex text-[14px] justify-baseline";
//   return (
//     <div className="flex flex-col items-center">
//       <div className="p-16 flex flex-col text-[15px] space-y-8 w-[60%]">
//         <div className="flex space-x-4 items-center">
//           <Image
//             className="w-24 rounded-full"
//             src={pxfuel}
//             alt="Justus Dutra"
//           />
//           <div>
//             <p className="text-2xl font-bold">Justus Dutra</p>
//             <p className="">Founder</p>
//           </div>
//         </div>
//         <div className="text-[16px] flex flex-col space-y-4">
//           <p className="text-3xl font-extrabold">
//             This is{" "}
//             <span className="text-teal-700 text-extrabold text-3xl">
//               who we are.
//             </span>
//           </p>
//           <p>
//             Nextgen boasts creative minds dedicated to shaping compelling,
//             unique content for your profiles. We specialize in tailoring content
//             that elevates your online presence effectively.
//           </p>
//           <p>
//             At Nextgen, we intricately tailor profiles. Understanding your
//             uniqueness, we curate engaging content that ensures your online
//             presence is authentic, distinct, and memorable.
//           </p>
//           <p>
//             We excel in transforming experiences into captivating narratives.
//             Our innovative storytelling techniques leave a lasting impact,
//             making your profile not just viewed, but remembered with admiration.
//           </p>
//           <p>
//             Nextgen maintains unparalleled professionalism. Our seasoned experts
//             adhere to high-quality standards, ensuring the content we create
//             surpasses expectations. We reflect your excellence in every crafted
//             piece.
//           </p>
//           <p>
//             Nextgen empowers your online persona. Through thoughtfully crafted
//             content, we bolster your confidence, spotlight your talents, and
//             foster meaningful connections, opening doors to endless
//             possibilities.
//           </p>
//         </div>
//         <div>
//           <Link href="https://calendly.com/abhishekpandit1212/nextgenmeet">
//             <button className={`${buttonsClassname} `}>
//               <Image className="w-6 mr-2" src={schedule} alt="schedule" />
//               Schedule a call
//             </button>
//           </Link>
//         </div>
//         <div className="flex space-x-4">
//           <button
//             className={`${buttonsClassname} drop-shadow-2xl animate-bounce relative bottom-[40rem] right-[12rem]`}
//           >
//             <Image src={notes} alt="" className="w-5 mr-2" /> Strategists
//           </button>

//           <button
//             className={`${buttonsClassname} drop-shadow-2xl animate-bounce relative bottom-[45rem] left-[10rem]`}
//           >
//             <Image src={creator} alt="" className="w-5 mr-2" /> Creators
//           </button>
//           <button
//             className={`${buttonsClassname} drop-shadow-2xl animate-bounce relative bottom-[35rem] left-[25rem]`}
//           >
//             <Image src={writer} alt="" className="w-5 mr-2" /> Writers
//           </button>
//           <button
//             className={`${buttonsClassname} drop-shadow-2xl animate-bounce relative bottom-[18rem] left-[30rem]`}
//           >
//             <Image src={editor} alt="" className="w-5 mr-2" /> Editors
//           </button>
//           <button
//             className={`${buttonsClassname} drop-shadow-2xl animate-bounce relative bottom-[5rem] right-[5rem]`}
//           >
//             <Image src={videographer} alt="" className="w-5 mr-2" />{" "}
//             Videographers
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
