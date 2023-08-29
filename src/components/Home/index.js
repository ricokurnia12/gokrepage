import React from 'react';
import Banner from './Banner';
import PenjelasanGokre from './PenjelasanGokre';
import UntukSiapa from './UntukSiapa';
import Testimoni from './Testimoni';

const index = () => {
  return (
    <div className="mb-96">
      <Banner />
      <PenjelasanGokre />
      <UntukSiapa />
      <Testimoni />
    </div>
  );
};

export default index;
