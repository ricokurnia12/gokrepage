import React, { useEffect } from 'react';

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

import { fiturGokre as fitur } from '../Data';
// import BelajarCover from '../../assets/fitur/berlatihgokre.png';
import Image from 'next/image';
import { useAnimation, motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Directory from '@/BaseDirectory';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform `}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const FiturGokre = () => {
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

  }, [inView]);
  const [imageFitur, setImageFitur] = React.useState('');
 
  const [open, setOpen] = React.useState(0);
  const [value, setValue] = React.useState('');


  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  useEffect(() => {
    if (open === 0) {
      setImageFitur('');
    }
  }, [open]);

  return (
    <>
      <div
        ref={ref}
        className="container mx-auto px-4 lg:px-16 font-urbanist mt-12 max-w-screen-2xl overflow-hidden"
      >
        <h1 className="mb-16 text-2xl font-semibold lg:text-3xl lg:font-bold text-slate-900 text-center ">
          Fitur-Fitur Aplikasi Go kreasi
        </h1>

        {fitur.map((data, i) => {
          return (
            <motion.div
              className={`flex flex-col ${
                i === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              }  justify-center items-center gap-4 mb-12 `}
              key={i}
            >
              <img
                alt="go kreasi ganesha operation"
                src={`/${Directory}/fitur/${data.ImgCover}`}
                className="w-40 md:w-56 xl:w-64 md:self-start"
                loading="lazy"
              />
              <motion.div
                animate={animation2}
                className="  md:border-none  px-2 py-1 md:self-center  xl:w-[48rem] "
                // style={{
                //   overflow: 'scroll',
                // }}
              >
                <h1 className="text-fontsecondary font-semibold text-xl">
                  {data.Title}
                </h1>

                {data.Detail.map((e, index) => {
                  return (
                    <Accordion
                      key={index}
                      className="w-full  mx-auto border-gray-200 border rounded-md px-2"
                      open={open === index + 1 + e.header}
                      icon={
                        <Icon id={index + 1 + e.header} open={open} />
                      }
                    >
                      <AccordionHeader
                        style={{
                          color: '#FF3A44',
                          textAlign: 'left',
                        }}
                        className="text-sm md:text-base "
                        onClick={() => {
                          handleOpen(index + 1 + e.header);

                          setValue(index + 1 + e.header);
                        }}
                      >
                        {e.header}
                      </AccordionHeader>
                      <AccordionBody className="md:text-lg text-fontsecondary">
                        {e.content}
                      </AccordionBody>
                    </Accordion>
                  );
                })}
              </motion.div>
            </motion.div>
          );
        })}
        <div className="flex flex-col justify-center items-center">
          <h3 className="mb-16 text-xl font-semibold lg:text-2xl lg:font-bold text-slate-900 text-center ">
            Untuk Lebih Lengkapnya Kamu Bisa Lihat Video Berikut
          </h3>
          <iframe
            className="w-80vw  md:w-full max-w-4xl aspect-video relative shadow-lg shadow-gray-500 rounded-lg"
            src="https://www.youtube.com/embed/f_dub0lfbTA"
            title="GO Kreasi Semua Jadi Mudah Di Mana Saja Kapan Saja"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default FiturGokre;
