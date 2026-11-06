// import {useState} from 'react'

import img1 from "../src/assets/facebook.png";
import img2 from "../src/assets/instagram.png";
import img3 from "../src/assets/X.png";
import img4 from "../src/assets/Youtube.png";
import img5 from "../src/assets/logo_gt.png";

export default function Home() {
  return (
    <div>
      <nav id="navbar1" className="bg-blue-800 w-full  h-10 text-white ">
        <div className=" flex justify-end grid-cols-2  ">
          <a href="#" className="flex justify-end font-medium  px-4 py-2">
            <div className="flex gap-4 ">
              <p className="">karir</p>
            </div>
          </a>

          <div className=" flex justify-end bg-white w-0.5 h-4 mt-3 pointer-events-none  rounded-2xl "></div>

          <a href="#" className="flex justify-end font-medium  px-4 py-2">
            <div className="flex gap-4 ">
              <p>ID</p>
              <p>ENG</p>
            </div>
          </a>
          <div className=" flex justify-end bg-white w-0.5 h-4 mt-3 pointer-events-none  rounded-2xl "></div>

          {/* Revisi tag a */}
          <a href="#" className="flex justify-end font-medium  px-4 py-2">
            <div className="flex gap-4 ">
              <img
                src={img1}
                alt="Facebook"
                className="w-5 h-5 hover:via-taupe-700"
              ></img>
              <img src={img2} alt="Instagram" className="w-5 h-5"></img>
              <img src={img3} alt="X" className="w-5 h-5"></img>
              <img src={img4} alt="Youtube" className="w-5 h-5"></img>
            </div>
          </a>
          {/*  */}
        </div>
      </nav>

      <nav
        id="navbar2"
        className="bg-gray-200  shadow-[0_3px_9px_-6px_#000000]  sticky top-0 z-50 w-full  h-20 text-black "
      >
        <div className=" grid grid-cols-2 ">
          <div className="flex justify-start ml-10">
            <img
              src={img5}
              alt="Gajah tunggal"
              className=" justify-start w-18 h-20 mr-1"
            ></img>

            <p className="font-bold px-4 mt-7 "> Powering Your Every Journey</p>
          </div>

          <div className="flex justify-end px-4 mt-5   text-black font-bold   gap-6 ">
            <a
              className="  block transition-all
              duration-400 group-hover:scale-105   group-hover:bg-blue-800
      group-hover:text-white  xl:h-10
              xl:w-30 py-2   xl:rounded-4xl "
              href="#"
            >
              Beranda
            </a>

            <div className="relative group w-fit">
              <a
                className="
      block
      group-hover:text-white
    
    transition-all duration-100 
    group-hover:bg-blue-800
    ease-in-out
     group-hover:opacity-500
     hover:text-zinc-300
      xl:h-15
      xl:w-35
      py-2
      xl:rounded-t-2xl
    "
                href="#"
              >
                Tentang Kami
              </a>

              {/* Navbar kedua / dropdown */}
              <div
                className="
      absolute
      top-14
      xl:right-[-246%]
      xl:w-342
      xl:h-15
      bg-blue-800
      shadow-lg
      p-4
      
      z-60
    invisible opacity-0
  group-hover:visible group-hover:translate-y-1 group-hover:opacity-100
  transition-all duration-100 ease-in-out

 
      text-white

  
    "
              >
                <div className=" grid grid-cols-5 xl:w-250   xl:ml-80">
                  <a
                    href="#profil"
                    className="block p-0  transition-all duration-400 
    xl:w-40 hover:bg-black
    ease-in-out
    "
                  >
                    Dewan Direksi
                  </a>

                  <a
                    href="#visi"
                    className="block hover:bg-black p-0 transition-all duration-400 xl:w-40
    
    ease-in-out
     "
                  >
                    Dewan Komisaris
                  </a>

                  <a
                    href="#sejarah"
                    className="block p-0 transition-all duration-400 
    xl:w-40 hover:bg-black
    ease-in-out
     group-hover:opacity-500 hover:text-zinc-400"
                  >
                    Usaha Kami
                  </a>

                  <a
                    href="#sejarah"
                    className="block p-0 transition-all duration-400 
    hover:bg-black xl:w-40
    ease-in-out
     group-hover:opacity-500 hover:text-zinc-400"
                  >
                    Struktur Organisasi
                  </a>
                </div>
              </div>
            </div>

            <a
              className="block transition-all
              duration-200 hover:scale-105    hover:text-white   
              xl:hover:bg-blue-800   xl:h-10
              xl:w-35 py-2   xl:rounded-4xl "
              href="#"
            >
              Pemilihan Ban
            </a>

            <a
              className=" block transition-all
              duration-200 hover:scale-105    hover:text-white   
              xl:hover:bg-blue-800   xl:h-10
              xl:w-35 py-2   xl:rounded-4xl "
              href="#"
            >
              Informasi
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
