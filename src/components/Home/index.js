import React from 'react';
import Banner from './Banner';
import PenjelasanGokre from './PenjelasanGokre';
import UntukSiapa from './UntukSiapa';
import Testimoni from './Testimoni';
import FiturGokre from './FiturGokre';
import { motion } from 'framer-motion';
const index = () => {
  return (
    <div className="mb-[1rem]">
      <Banner />
      <PenjelasanGokre />
      <UntukSiapa />
      <Testimoni />
      <FiturGokre />
    </div>
  );
};

export default index;
