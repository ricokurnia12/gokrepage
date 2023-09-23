import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import { useAnimation, motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ButtonSecondary } from '../Button/Button';
import Directory from '@/BaseDirectory';

const Banner = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();
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
    }
    if (!inView) {
      animation.start({ x: '-100vw', opacity: 0 });
      animation2.start({ x: '100vw', opacity: 0 });
    }
    
  }, [inView, animation, animation2]);
  return (
    <div
      ref={ref}
      className="relative bg-custom-gradient flex justify-center h-auto font-poppins overflow-hidden mt-16 "
    >
      <img
        src={`/${Directory}/bgbanner.png`}
        className="absolute bg-cover w-[30%] min-w-[385px]  left-0 -bottom-12  bg-no-repeat overflow-hidden"
        alt="banner go kreasi"
        loading="lazy"
      />
      <div className="flex flex-wrap md:flex-nowrap z-10 lg:items-center  p-4 md:p-8 w-[95%] md:w-[90%] max-w-[1440px] relative ">
        <motion.img
          alt="go kreasi"
          animate={animation}
          src={`/${Directory}/gokreheader.png`}
          className="hidden md:block h-72 -mt-6"
          loading="lazy"
        />

        <motion.div animate={animation2} div className="text-white ">
          <h1 className="font-semibold text-2xl md:text-4xl mb-4">
            Capai Target Akademikmu dengan GO Kreasi!
          </h1>
          <p className="text-sm md:text-lg">
          Aplikasi GO Kreasi memudahkan kamu untuk menerapkan Formula 3B: Belajar, Berlatih, dan Bertanding di mana saja dan kapan saja hanya dalam satu genggaman. Membuatmu siap untuk capai target akademikmu dalam meraih juara di kelas maupun sekolah, unggul dalam perlombaan dan kompetisi Olimpiade, serta mewujudkan impian SobatGO untuk diterima di sekolah favorit dan Perguruan Tinggi Negeri (PTN) favorit.
          </p>
          <img
            alt="go kreasi"
            src={`/${Directory}/gokreheader.png`}
            className="block md:hidden w-64 mx-auto md:h-72 lg:-mt-6"
            loading="lazy"
          />
          <div className="flex gap-4 mt-4  justify-center md:justify-start">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.ganeshaoperation.kreasiv4"
            >
              <img
                alt="playstore gokreasi"
                src={`/${Directory}/banner/gplaybtn.png`}
                className="w-32 md:w-44"
                loading="lazy"
              />
            </a>
            <a
              target="_blank"
              href="https://apps.apple.com/id/app/go-kreasi-siswa-ortu/id1634767332?l=id"
            >
              <img
                alt="appstore gokreasi"
                src={`/${Directory}/banner/appstorebtn.png`}
                className="w-32 md:w-44"
                loading="lazy"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
