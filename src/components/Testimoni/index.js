import React from 'react';
import { PiQuotesThin } from 'react-icons/pi';

const Card = ({ className }) => {
  return (
    <div
      className={`text-fontprimary text-2xl bg-white w-72 md:w-[30rem] xl:w-[29rem] px-4 py-6 rounded-lg ${className} shadow-lg shadow-slate-800 `}
    >
      <div className="flex gap-2 items-center">
        <div className="bg-gray-600 w-16 h-16  rounded-full "></div>
        <div className="leading-4">
          <p className="text-lg font-semibold text-fontprimary ">
            Budi budiman
          </p>
          <span className="text-base text-fontsecondary">
            Sman 1 Slahung
          </span>
        </div>
      </div>
      <div className="mt-2 flex items-center p-1 flex-col border-slate-300 border rounded-md  ">
        <PiQuotesThin />
        <p className="text-fontsecondary text-sm text-center md:text-base lg:text-lg 2xl:text-xl">
          “GO Kreasi membuat belajar saya menjadi lebih seru dan asyik
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been , ”
        </p>
      </div>
      <p className="text-fontprimary font-semibold text-base lg:text-lg 2xl:text-xl text-center mt-2">
        Diterima di ITB- Tehnik Mesin
      </p>
    </div>
  );
};

export default Card;
