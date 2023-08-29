import React from 'react';
import Image from 'next/image';
import Untuksiswa from '../../assets/untuksiswa.png';
import { dataUntukSiapa } from '../Data';

const UntukSiapa = () => {
  console.log(dataUntukSiapa);
  return (
    <div className="container mx-auto px-4 lg:px-16 font-urbanist mt-28 max-w-screen-2xl">
      <h1 className="mb-16 text-2xl font-semibold lg:text-3xl lg:font-bold text-slate-900 text-center ">
        Untuk Siapa Aplikasi GO Kreasi?
      </h1>
      <div>
        {dataUntukSiapa.map((item, i) => {
          return (
            <div
              key={i}
              className={`${
                i === 1 ? 'md:flex-row-reverse' : ''
              } flex mt-8 lg:mb-16`}
            >
              <Image
                className={`${
                  i === 0 ? ' xl:w-[15rem]' : 'xl:w-72'
                }  hidden md:block w-44  self-start h-full`}
                src={item.Image}
                alt="siswa"
              />
              <div
                className={`${
                  i === 1 ? 'text-end' : ''
                } text md:w-[80%] xl:w-[60%]`}
              >
                <span
                  className={`${
                    i === 1 ? 'justify-end' : ''
                  } text-fontprimary font-semibold flex items-end gap-4 mb-4 md:mb-2 lg:text-lg 2xl:text-2xl `}
                >
                  {item.Untuk}
                  <Image
                    className={`md:hidden w-16 h-full float-right`}
                    src={item.Image}
                    alt="siswa"
                  />
                </span>
                <p
                  className={`text-fontsecondary text-sm md:text-base lg:text-lg 2xl:text-xl`}
                >
                  {item.Content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UntukSiapa;
