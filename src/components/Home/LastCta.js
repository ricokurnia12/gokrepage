import React, { useEffect } from 'react';

import { ButtonPrimary } from '../Button/Button';

import { useAnimation, motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Directory from '@/BaseDirectory';

const LastCta = () => {
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
  return (
    <div
      ref={ref}
      className="bg-custom-gradient3 relative mt-16 text-fontprimary font-urbanist"
    >
      <motion.div
        animate={animation2}
        className="container h-[26rem] md:h-80  relative  overflow-hidden mx-auto"
      >
        <img
          className="w-20 md:w-28 lg:w-36 absolute bottom-0 right-16 "
          src={`/${Directory}/lastcta/lastctagokre2.png`}
          alt="GO Kreasi"
          loading="lazy"
        />
        <img
          className="w-20 md:w-28 lg:w-36 absolute bottom-0 right-0 "
          src={`/${Directory}/lastcta/lastctagokre3.png`}
          alt="GO Kreasi"
          loading="lazy"
        />
        <div className="lg:flex flex-col items-center lg:items-start mt-4 lg:mt-12 w-[70%] lg:ms-20">
          <h1 className="text-2xl font-semibold  lg:text-4xl lg:font-bold text-slate-900 text-center lg:text-start  ">
            Tunggu apa lagi? Yuk buruan daftar dan download aplikasi
            GO Kreasi sekarang!
          </h1>
          <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-8">
            <ButtonPrimary className="bg-primary mt-4">
              <span> Daftar Produk GO Kreasi</span>
            </ButtonPrimary>

            <div className="flex justify-center gap-2 lg:gap-4">
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.ganeshaoperation.kreasiv4"
              >
                <img
                  className="w-32 lg:w-52"
                  src={`/${Directory}/banner/gplaybtn.png`}
                  alt="appstore go kreasi"
                  loading="lazy"
                />
              </a>

              <a
                target="_blank"
                href="https://apps.apple.com/id/app/go-kreasi-siswa-ortu/id1634767332?l=id"
              >
                <img
                  className="w-32 lg:w-52"
                  src={`/${Directory}/banner/appstorebtn.png`}
                  alt="appstore go kreasi"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LastCta;
