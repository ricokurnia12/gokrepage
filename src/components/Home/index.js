import React from 'react';
import Banner from './Banner';
import PenjelasanGokre from './PenjelasanGokre';
import UntukSiapa from './UntukSiapa';
import Testimoni from './Testimoni';
import FiturGokre from './FiturGokre';
import { motion } from 'framer-motion';
import LastCta from './LastCta';
const index = () => {
  return (
    <div className="mb-[1rem] overflow-hidden">
      <Banner />
      <PenjelasanGokre />
      <UntukSiapa />
      <Testimoni />
      <FiturGokre />
      <LastCta />
    </div>
  );
};

export default index;
