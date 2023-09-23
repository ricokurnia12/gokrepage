import React, { useEffect } from 'react';

// import Brosur from '../../assets/Rectangle 37.png';

import { ButtonSecondary } from '../Button/Button';
import { useAnimation, motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Directory from '@/BaseDirectory';

const PenjelasanGokre = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,

        transition: {
          type: 'tween',
          duration: 1.2,
          bounce: 0.1,
        },
      });

      animation2.start({
        x: 0,
        opacity: 1,

        transition: {
          type: 'tween',
          duration: 1.2,
          bounce: 0.1,
        },
      });
      animation3.start({
        x: 0,
        opacity: 1,
        scale: 1,

        transition: {
          type: 'tween',
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({ x: '-100vw', opacity: 0 });
      animation2.start({ x: '100vw', opacity: 0 });
      animation3.start({ opacity: 0, scale: 0 });
    }
    
  }, [inView, animation, animation2, animation3]);
  return (
    <div>
      <div
        ref={ref}
        className="container mx-auto px-4 lg:px-16 font-urbanist mt-8 max-w-screen-2xl"
      >
        <h1 className="text-2xl font-semibold lg:text-3xl lg:font-bold text-slate-900 text-center">
          Apa itu GO Kreasi?
        </h1>
        <motion.div
          animate={animation3}
          className="mt-8 flex flex-col gap-4 lg:gap-28 2xl:gap-36  md:flex-row-reverse justify-center items-center "
        >
          {/* <Image
            src={Brosur}
            alt="GO Kreasi ganesha operation"
            className="w-40 md:w-64 2xl:w-72 "
          /> */}
          <div className="">
            <p className=" text-fontsecondary text-sm md:text-base lg:text-lg 2xl:text-xl text-center  ">
              GO Kreasi merupakan aplikasi pembelajaran unggulan milik
              Ganesha Operation yang mendukung proses belajar tatap
              muka dan penerapan Formula 3B: Belajar, Berlatih, dan
              Bertanding. Ganesha Operation sebagai bimbingan belajar
              tatap muka berbasis teknologi <i>online</i>, GO berperan
              aktif dalam membantu SobatGO mencapai target akademik
              melalui penerapan Formula 3B yang telah
              diimplementasikan dalam aplikasi GO Kreasi. Dengan fitur
              dan fasilitas yang komprehensif, GO Kreasi mampu
              membantu SobatGO mencapai prestasi optimal dalam
              mengerjakan PR dan tugas, meraih juara di kelas maupun
              sekolah, unggul dalam perlombaan dan kompetisi
              Olimpiade, serta membantu mewujudkan impian untuk
              diterima di sekolah favorit dan Perguruan Tinggi Negeri
              (PTN) impian.
            </p>
            <div className="flex justify-center ">
              <ButtonSecondary className="mt-4 md:mt-8">
                Daftar Produk GO Kreasi
              </ButtonSecondary>
            </div>
          </div>
        </motion.div>
        <div className="mt-12 md:mt-16 flex gap-8 md:gap-4 lg:gap-8 flex-col md:flex-row justify-center items-center">
          <img
            src={`/${Directory}/penjelasan/gokrehome1.png`}
            alt="GO Kreasi Ganesha Opeartion"
            className=" md:ms-0 w-80 md:w-[23rem] lg:w-[30rem] hover:lg:w-[40rem] transition-all ease-in-out duration-700 "
            loading="lazy"
          />
          <img
            loading="lazy"
            src={`/${Directory}/penjelasan/gokrehome2.png`}
            alt="GO Kreasi Ganesha Opeartion"
            className="w-72 ms-1 md:me-0 md:w-80 lg:w-[27rem] hover:lg:w-[37rem] transition-all ease-in-out duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default PenjelasanGokre;
