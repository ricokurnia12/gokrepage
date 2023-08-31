import React, { useEffect } from 'react';

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

import { fiturGokre as fitur } from '../Data';
import BelajarCover from '../../assets/fitur/berlatihgokre.png';
import Tester from '../../assets/fitur/Neutral Minimalist Fashion Frame Mockup Instagram Story (700 x 1400 piksel) (700 x 1300 piksel) (3).gif';
import Image from 'next/image';

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
  const [imageFitur, setImageFitur] = React.useState(BelajarCover);
  console.log(fitur);
  const [open, setOpen] = React.useState(0);
  const [value, setValue] = React.useState('');
  console.log(value, 'valuee');

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  useEffect(() => {
    if (open === 0) {
      setImageFitur(BelajarCover);
    }
  }, [open]);

  return (
    <>
      <div className="container mx-auto px-4 lg:px-16 font-urbanist mt-12 max-w-screen-2xl">
        <h1 className="mb-16 text-2xl font-semibold lg:text-3xl lg:font-bold text-slate-900 text-center ">
          Fitur-Fitur Aplikasi Go kreasi
        </h1>

        {fitur.map((data, i) => {
          return (
            <div
              className={`flex flex-col ${
                i === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              }  justify-center items-center gap-4 mb-12 `}
              key={i}
            >
              <Image
                src={data.ImgCover}
                className="w-40 md:w-56 xl:w-64 md:self-start"
              />{' '}
              <div
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
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FiturGokre;
