import React, { useEffect } from 'react';
import bg1 from '../../assets/Lastcta/lastctagokre2.png';
import bg2 from '../../assets/Lastcta/lastctagokre3.png';
import Image from 'next/image';
import PlayStore from '../../assets/gplaybtn.png';
import AppStore from '../../assets/appstorebtn.png';
import { ButtonPrimary } from '../Button/Button';

import { useAnimation, motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    console.log('use effect hook, inView =', inView);
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
        <Image
          className="w-20 md:w-28 lg:w-36 absolute bottom-0 right-16 "
          src={bg1}
          alt="GO Kreasi"
        />
        <Image
          className="w-20 md:w-28 lg:w-36 absolute bottom-0 right-0 "
          src={bg2}
          alt="GO Kreasi"
        />
        <div className="lg:flex flex-col items-center lg:items-start mt-4 lg:mt-12 w-[70%] lg:ms-20">
          <h1 className="text-2xl font-semibold  lg:text-4xl lg:font-bold text-slate-900 text-center lg:text-start  ">
            Tunggu apa lagi? Yuk buruan daftar dan download aplikasi
            GO Kreasi sekarang!
          </h1>
          <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-8">
            <ButtonPrimary className="bg-primary mt-4">
              <span> Daftar GO Kreasi</span>
            </ButtonPrimary>

            <div className="flex justify-center gap-2 lg:gap-4">
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.ganeshaoperation.kreasiv4"
              >
                <Image className="w-32 lg:w-52" src={PlayStore} />
              </a>

              <a
                target="_blank"
                href="https://apps.apple.com/id/app/go-kreasi-siswa-ortu/id1634767332?l=id"
              >
                <Image className="w-32 lg:w-52" src={AppStore} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LastCta;
