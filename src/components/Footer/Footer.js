// import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhone,
  FaMailBulk,
  FaWhatsapp,
  FaLine,
} from 'react-icons/fa';

import React from 'react';
import Directory from '@/BaseDirectory';

const Footer = () => {
  return (
    <div  className="bg-gray-900 p-4 text-white -mt-6">
      <img
        src={`/${Directory}/footer/logo.png`}
        alt="GO"
        className="w-28 lg:w-36 mx-auto mt-8"
      />
      <p className="text-center mt-2 lg:text-xl font-bold lg:mt-7">
        Bimbel Terbaik dan Terbesar Se-Indonesia
      </p>
      <div className=" flex flex-col md:flex-row md:justify-around max-w-5xl  items-center p-4 mx-auto">
        <div className="lg:-ms-10 ">
          <div className="mx-auto mb-2">
            <img
              src={`/${Directory}/footer/google.png`}
              className="mx-auto"
              alt="GooglePlay Go Kreasi"
            />
            <img
              src={`/${Directory}/footer/appstoree.png`}
              className="mx-auto"
              alt="AppStore Go Kreasi"
            />
            <h1 className=" text-center mb-2 lg:text-lg">
              Download Juga GO Kreasi Kini Sudah{' '}
              <br className="hide md:block" />
              Tersedia di PlayStore dan AppStore
            </h1>
          </div>
          <div>
            <h1 className="text-center font-bold mb-2 lg:text-xl">
              Keamanan Belanja
            </h1>
            <img
              src={`/${Directory}/footer/belanja.png`}
              alt="keamanan belanja ganehsa operation"
              className="md:w-36 lg:w-48 md:mx-auto"
            />
          </div>
        </div>
        <div className="self-start mt-4 md:me-8">
          <h1 className="font-bold mb-2 lg:text-2xl">Hubungi Kami</h1>
          <span className="flex lg:text-xl lg:mb-4">
            <FaPhone className="self-center me-2" /> (022) 4218177
          </span>
          <span className="flex lg:text-xl lg:mb-4">
            <FaMailBulk className="self-center me-2" />{' '}
            officialgopusat@gmail.com
          </span>
          <span className="flex lg:text-xl lg:mb-4">
            <FaWhatsapp className="self-center me-2" /> +62
            811-2468-988
          </span>
          <span className="flex lg:text-xl lg:mb-4">
            <FaLine className="self-center me-2" /> (022) 4218177
          </span>
        </div>
        <div className="mt-4 self-start">
          <h1 className=" font-bold mb-2 lg:text-2xl">
            Info Lebih Lanjut
          </h1>
          <div className="lg:text-xl">
            <a
              className="block lg:mb-4 hover:text-secondary "
              href="https://ganeshaoperation.com/faq.html"
              target="_blank"
            >
              FAQ
            </a>
            <a
              className="block lg:mb-4  hover:text-secondary "
              href="https://ganeshaoperation.com/kontak.html"
              target="_blank"
            >
              Kontak
            </a>
            <a
              className="block lg:mb-4  hover:text-secondary "
              href="https://ganeshaoperation.com/term1.html"
              target="_blank"
            >
              Syarat dan Ketentuan
            </a>
            <a
              className="block lg:mb-4  hover:text-secondary "
              target="_blank"
              href="https://ganeshaoperation.com/privacy1.html"
            >
              Kebijakan Privasi
            </a>
            <a
              className="block lg:mb-4  hover:text-secondary "
              href="https://ganeshaoperation.com/refund1.html"
              target="_blank"
            >
              Refund Policy
            </a>
          </div>
        </div>
      </div>
      <div className="mt-5 mx-auto text-center max-w-5xl">
        <small>
          © Copyright 2023, Ganesha Operation. All Rights Reserved
        </small>
        <div className="flex justify-evenly mt-2">
          <a
            href="https://id-id.facebook.com/ganesha.operation.official/"
            target="_blank"
          >
            <FaFacebook className="text-3xl  hover:text-secondary " />
          </a>
          <a
            href="https://www.instagram.com/officialganeshaoperation/"
            target="_blank"
          >
            <FaInstagram className="text-3xl  hover:text-secondary l" />
          </a>
          <a
            href="https://twitter.com/officialgopusat"
            target="_blank"
          >
            <FaTwitter className="text-3xl  hover:text-secondary " />
          </a>
          <a
            href="https://www.youtube.com/c/GaneshaOperationOfficial/videos"
            target="_blank"
          >
            <FaYoutube className="text-3xl  hover:text-secondary " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
