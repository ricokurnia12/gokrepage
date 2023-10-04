import React from 'react';
import { PiQuotesThin } from 'react-icons/pi';
// import Typewriter from '../Typewritter';

const Card = ({
  className,
  nama,
  asalsekolah,
  testi,
  diterima,
  status,
}) => {
  return (
    <div
      className={`text-fontprimary text-2xl bg-white w-72 md:w-[30rem] xl:w-[29rem] px-4 py-6 rounded-lg ${className} shadow-lg shadow-slate-800 `}
    >
      <div className="flex gap-2 items-center justify-center">
        {/* <div className="bg-gray-600 w-16 h-16  rounded-full "></div> */}
        <div className="leading-4">
          <p className="text-lg font-semibold text-fontprimary text-center ">
            {nama}
          </p>
          <span className="text-base text-fontsecondary">
            {asalsekolah}
          </span>
        </div>
      </div>
      <div className="mt-2 flex items-center p-1 flex-col border-slate-300 border rounded-md  ">
        <PiQuotesThin />
        <p className="text-fontsecondary text-sm text-center md:text-base lg:text-lg 2xl:text-xl">
          {/* “{<Typewriter status={status} text={testi} delay={30} />}” */}
          {testi}
        </p>
      </div>
      <p className="text-fontprimary font-semibold text-base lg:text-lg 2xl:text-xl text-center mt-2">
        Diterima di {diterima}
      </p>
    </div>
  );
};

export default Card;
