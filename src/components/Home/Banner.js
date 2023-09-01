import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import PlayStore from '../../assets/gplaybtn.png';
import AppStore from '../../assets/appstorebtn.png';
import { useAnimation, motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ButtonSecondary } from '../Button/Button';

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
    console.log('use effect hook, inView =', inView);
  }, [inView]);
  return (
    <div
      ref={ref}
      className="relative bg-custom-gradient flex justify-center h-auto font-poppins overflow-hidden mt-16 overflow-hidden"
    >
      <img
        src="/bgbanner.png"
        className="absolute bg-cover w-[30%] min-w-[385px]  left-0 -bottom-12  bg-no-repeat overflow-hidden"
        alt=""
      />
      <div className="flex flex-wrap md:flex-nowrap z-10 lg:items-center  p-4 md:p-8 w-[95%] md:w-[90%] max-w-[1440px] relative ">
        <motion.img
          animate={animation}
          src="/gokreheader.png"
          className="hidden md:block h-72 -mt-6"
        />

        <motion.div animate={animation2} div className="text-white ">
          <h1 className="font-semibold text-2xl md:text-4xl mb-4">
            Capai Target Akademikmu dengan GO Kreasi!
          </h1>
          <p className="text-sm md:text-lg">
            Aplikasi GO Kreasi memudahkan kamu untuk menerapkan
            formula 3B: Belajar, Berlatih, dan Bertanding di mana saja
            dan kapan saja hanya dalam satu genggaman. Membuatmu siap
            untuk capai target akademikmu.
          </p>
          <img
            src="/gokreheader.png"
            className="block md:hidden w-64 mx-auto md:h-72 lg:-mt-6"
          />
          <div className="flex gap-4 mt-4  justify-center md:justify-start">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.ganeshaoperation.kreasiv4"
            >
              <Image src={PlayStore} className="w-32 md:w-44" />
            </a>
            <a
              target="_blank"
              href="https://apps.apple.com/id/app/go-kreasi-siswa-ortu/id1634767332?l=id"
            >
              <Image src={AppStore} className="w-32 md:w-44" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
