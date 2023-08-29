import React from 'react';
import Card from '../Testimoni';

const Testimoni = () => {
  return (
    <div className={`bg-custom-gradient2 py-1 mb:py-4 pb-16 mt-16`}>
      <div className=" container mx-auto px-4 lg:px-16 font-urbanist mt-4 md:mt-8 max-w-screen-2xl">
        <h1 className="mb-8 md:mb-16 text-2xl font-semibold lg:text-3xl lg:font-bold text-white text-center ">
          Apa Kata Mereka yang Sudah Menggunakan Aplikasi GO Kreasi?
        </h1>

        <div className="flex flex-col-reverse items-center md:flex-row   gap-2 md:gap-4 md:justify-center  ">
          <Card className={`md:self-start `} />
          <iframe
            className="w-full  md:w-[40rem] xl:w-[48rem] aspect-video relative"
            // width="707"
            // height="398"
            src="https://www.youtube.com/embed/6NVfZ68Yicg"
            title="Yuk, kerjain EMPATI WAJIB (EmWa) sebelum TOBK"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
