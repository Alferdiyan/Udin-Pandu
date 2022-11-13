import React from "react";
import images from "../../constants/images";
{
  /*}
import UdinPhoto1 from "../../assets/UdinPhoto1.png";
import UdinPhoto2 from "../../assets/UdinPhoto2.png";
import UdinPhoto3 from "../../assets/UdinPhoto3.png";
*/
}
import "./Header.css";

export default function Header() {
  return (
    <section>
      <div className="bg-black text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-20 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose uppercase">Udin Pandu Setiaji</h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Jasa Fotografer dan Videografer</h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">Layanan Professional, Creative & berpengalaman dibidang fotografi untuk berbagai kebutuhan , baik personal, family, Sekolah maupun perusahaan.</p>
            <a href="#" className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
              Booking Sekarang ->
            </a>
          </div>
          <div className="p-8 mt-8 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div className="h-48 flex flex-wrap content-center mx-2">
              <div>
                <img className="main-image mx-3 inline-block mt-28 hidden xl:block" src={images.PersonalPhoto} />
              </div>
              <div>
                <img className="main-image mx-3 mt-28" src={images.PersonalPhoto1} />
              </div>
              <div>
                <img className="main-image mx-3 inline-block mt-28 hidden lg:block" src={images.PersonalPhoto2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
