import React from "react";
import images from "../../constants/images";

export default function AboutUs() {
  return (
    <div className="bg-slate-500 pt-5 pb-3 justify-center xl:block">
      <div className=" container mx-auto flex space-x-5 mt-4" id="about">
        <div className=" w-1/5">
          <img src={images.PersonalPhoto1} alt="about_img" className="border-8 border-slate-400 max-w-full h-auto rounded-full" />
        </div>
        <div className="w-3/5 flex-wrap ">
          <h2 className="headtext__cormorant">About Us</h2>
          <p>Kami adalah Jasa Foto profesional di Magelang, sampai saat ini melayani ratusan client.</p>
          <p>
            Alhamdulillah sudah banyak client foto wedding jogja yang terpuaskan. Layanan unggulan kami adalah fotografer pernikahan, jasa foto Wisuda, Jasa foto keluarga, jasa foto Traveling, jasa foto produk terdekat, jasa foto produk
            pakaian, jasa foto produk kosmetik, jasa foto produk makanan dan jasa foto produk onlineshop.
          </p>
          <p>Kami memiliki team profesional dibidangnya untuk menghasilkan karya-karya terbaik sesuai kebutuhan Anda.</p>
        </div>
      </div>
    </div>
  );
}
