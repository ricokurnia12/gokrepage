import React from 'react';
import Image from 'next/image';
import GokreHeader from '../../assets/gokreheader.png';
import PlayStore from '../../assets/gplaybtn.png';
import AppStore from '../../assets/appstorebtn.png';

const Banner = () => {
  return (
    <div className="relative bg-custom-gradient flex justify-center h-auto font-poppins overflow-hidden">
      <img
        src="/bgbanner.png"
        className="absolute bg-cover w-[30%] min-w-[385px]  left-0 -bottom-12  bg-no-repeat overflow-hidden"
        alt=""
      />
      <div className="flex flex-wrap md:flex-nowrap z-10  p-4 md:p-8 w-[95%] md:w-[90%] max-w-[1440px] relative ">
        <Image
          src={GokreHeader}
          className="hidden md:block h-72 -mt-6"
        />
        <div className="text-white ">
          <h1 className="font-semibold text-2xl md:text-4xl mb-4">
            Belajar, Berlatih, dan Bertanding di mana saja dan kapan
            saja dengan aplikasi GO Kreasi!
          </h1>
          <p className="text-sm md:text-lg">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry
            standard dummy text ever since the 1500s,
          </p>
          <Image
            src={GokreHeader}
            className="block md:hidden w-64 mx-auto md:h-72 lg:-mt-6"
          />
          <div className="flex gap-4 mt-4  justify-center md:justify-start">
            <a>
              <Image src={PlayStore} className="w-32 md:w-44" />
            </a>
            <a>
              <Image src={AppStore} className="w-32 md:w-44" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
