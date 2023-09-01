import React, { useState, useEffect, useRef } from 'react';
import Card from '../Testimoni';
import { useAnimation, motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../Button/Button';
import { testimoniGokre } from '../Data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimoni = () => {
  const { ref, inView } = useInView();
  const { ref2, inView2 } = useInView();
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
          duration: 1.5,
        },
      });
    }
    if (!inView) {
      animation.start({ x: '-100vw', opacity: 0 });
      animation2.start({ x: '100vw', opacity: 0 });
      animation3.start({ opacity: 0 });
    }
    console.log('use effect hook, inView =', inView2);
  }, [inView, inView2]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    className: 'center',
    // centerMode: true,
    centerPadding: '60px',
  };
  return (
    <div className={`bg-custom-gradient2 py-1 mb:py-4 pb-16 mt-16`}>
      <div className=" container mx-auto px-4 lg:px-16 font-urbanist mt-4 md:mt-8 max-w-screen-2xl">
        <h1 className="mb-8 md:mb-16 text-2xl font-semibold lg:text-3xl lg:font-bold text-white text-center ">
          Kata Mereka yang Sudah Menggunakan GO Kreasi!
        </h1>

        <div ref={ref} className="flex justify-center px-2 ">
          <Slider
            {...settings}
            className="card__container--inner w-full md:w-[90vw] mx-auto "
          >
            {testimoniGokre.map((e, i) => {
              return (
                <motion.div animate={animation3} key={i}>
                  <div className="flex flex-col-reverse md:flex-row justify-center items-center flex-wrap-reverse gap-4 ">
                    <Card
                      status={inView ? true : false}
                      nama={e.Nama}
                      diterima={e.Diterima}
                      testi={e.Testimoni}
                      asalsekolah={e.Additional}
                      className={`md:self-end w-[70vw] md:w-[80%]`}
                    />
                    <iframe
                      className="w-80vw  md:w-[40rem] aspect-video relative shadow-gray-500 rounded-lg"
                      // width="707"
                      // height="398"
                      src={e.Link}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </motion.div>
              );
            })}
          </Slider>

          {/* <iframe
            className="w-full  md:w-[44rem] aspect-video relative"
            // width="707"
            // height="398"
            src="https://www.youtube.com/embed/6NVfZ68Yicg"
            title="Yuk, kerjain EMPATI WAJIB (EmWa) sebelum TOBK"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
