import React, { useEffect } from 'react';
import Image from 'next/image';
import Brosur from '../../assets/Rectangle 37.png';
import GokreHome1 from '../../assets/gokrehome1.png';
import GokreHome2 from '../../assets/gokrehome2.png';
import { Button } from '../Button/Button';
import { useAnimation, motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    console.log('use effect hook, inView =', inView);
  }, [inView]);
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
          <Image
            src={Brosur}
            alt="GO Kreasi ganesha operation"
            className="w-40 md:w-64 2xl:w-72 "
          />
          <div className=" md:self-start">
            <p className="md:self-start text-fontsecondary text-sm md:text-base lg:text-lg 2xl:text-xl text-center md:text-start">
              GO Kreasi merupakan sebuah aplikasi pendukung
              pembelajaran tatap muka yang dirancang oleh Bimbel
              Ganesha Operation dalam penerapan formula 3B: Belajar,
              Berlatih, dan Bertanding. Sebagai <i>learning center</i>
              terbaik dan terbesar di Indonesia, Ganesha Operation
              berperan aktif dalam membantu SobatGO mencapai target
              akademik melalui penerapan formula 3B yang telah
              diimplementasikan dalam aplikasi GO Kreasi. Dengan fitur
              dan fasilitas yang komprehensif, aplikasi ini bertujuan
              untuk membimbing SobatGO mencapai prestasi optimal dalam
              mengerjakan PR dan tugas, meraih juara di kelas maupun
              sekolah, unggul dalam perlombaan dan kompetisi
              olimpiade, serta membantu mewujudkan impian untuk
              diterima di sekolah favorit dan perguruan tinggi negeri
              impian.
            </p>
            <div className="flex justify-center md:justify-start ">
              <Button className="mt-4 ">Daftar Sekarang</Button>
            </div>
          </div>
        </motion.div>
        <div className="mt-12 md:mt-16 flex gap-8 md:gap-4 lg:gap-8 flex-col md:flex-row justify-center items-center">
          <Image
            src={GokreHome1}
            alt="GO Kreasi Ganesha Opeartion"
            className=" md:ms-0 w-80 md:w-[23rem] lg:w-[30rem] hover:lg:w-[40rem] transition-all ease-in-out duration-700 "
          />
          <Image
            src={GokreHome2}
            alt="GO Kreasi Ganesha Opeartion"
            className="w-72 ms-1 md:me-0 md:w-80 lg:w-[27rem] hover:lg:w-[37rem] transition-all ease-in-out duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default PenjelasanGokre;
