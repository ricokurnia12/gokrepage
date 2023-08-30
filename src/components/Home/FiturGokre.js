import React, { useEffect } from 'react';

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

import { fiturGokre as fitur } from '../Data';
import BelajarCover from '../../assets/fitur/tescover.png';
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
      <div className="container mx-auto px-4 lg:px-16 font-urbanist mt-36 max-w-screen-2xl">
        {/* <Image src={imageFitur} className="w-44 md:self-start" /> */}

        {fitur.map((data, i) => {
          return (
            <div
              className={`flex flex-col ${
                i === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              }  justify-center items-center gap-4 mb-12 `}
              key={i}
            >
              <Image
                src={imageFitur}
                className="w-32 md:w-44 md:self-start"
              />{' '}
              <div
                className=" border md:border-none border-gray-300  px-2 py-1 overflow-scroll md:overflow-visible   h-80 md:h-auto "
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
                        className="text-sm  "
                        onClick={() => {
                          handleOpen(index + 1 + e.header);
                          setImageFitur(e.image);
                          setValue(index + 1 + e.header);
                        }}
                      >
                        {e.header}
                      </AccordionHeader>
                      <AccordionBody>{e.content}</AccordionBody>
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
