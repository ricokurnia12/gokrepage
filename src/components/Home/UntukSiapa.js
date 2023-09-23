import React, { useEffect, useRef } from 'react';

import { dataUntukSiapa } from '../Data';
import { useAnimation, motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Directory from '@/BaseDirectory';
const UntukSiapa = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,

        transition: {
          type: 'spring',
          duration: 2,

          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({ x: '-100vw', opacity: 0 });
    }
    // console.log('use effect hook, inView =', inView);
  }, [inView, animation]);
  return (
    <div ref={ref}>
      <motion.div className="container mx-auto px-4 lg:px-16 font-urbanist mt-28 max-w-screen-2xl">
        <h1 className="mb-16 text-2xl font-semibold lg:text-3xl lg:font-bold text-slate-900 text-center ">
          Untuk Siapa Aplikasi GO Kreasi?
        </h1>
        <motion.div animate={animation}>
          {dataUntukSiapa.map((item, i) => {
            return (
              <div
                key={i}
                className={`${
                  i === 1 ? 'md:flex-row-reverse' : ''
                } flex mt-8 lg:mb-16`}
              >
                <img
                  className={`${
                    i === 0 ? ' xl:w-[15rem]' : 'xl:w-72'
                  }  hidden md:block w-44  self-start h-full`}
                  src={`/${Directory}/penjelasan/${item.Image}`}
                  alt="go kreasi ganesha operation"
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
                    <img
                      className={`md:hidden w-16 h-full float-right`}
                      src={`/${Directory}/penjelasan/${item.Image}`}
                      alt="go kreasi ganesha operation"
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UntukSiapa;
