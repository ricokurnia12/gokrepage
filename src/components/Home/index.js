import React from 'react';
import Banner from './Banner';
import PenjelasanGokre from './PenjelasanGokre';
import UntukSiapa from './UntukSiapa';
import Testimoni from './Testimoni';
import FiturGokre from './FiturGokre';
import { motion } from 'framer-motion';
import LastCta from './LastCta';
export const metadata = {
  title: 'Ganesha Operation | GO Kreasi',
  description:
    'Capai Target Akademikmu dengan GO Kreasi! Aplikasi GO Kreasi memudahkan kamu untuk menerapkan formula 3B: Belajar, Berlatih, dan Bertanding di mana saja dan kapan saja hanya dalam satu genggaman. Membuatmu siap untuk capai target akademikmu.',
};
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
