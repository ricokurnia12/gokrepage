import React from 'react';

export const ButtonSecondary = ({ children, className }) => {
  return (
    <a
      target="_blank"
      href="https://ganeshaoperation.com/bimbel/produk/bimbelonline"
    >
      <button
        className={` bg-secondary hover:bg-yellow-800 text-fontprimary font-bold py-4 px-6 rounded ${className}`}
      >
        {children}
      </button>
    </a>
  );
};
export const ButtonPrimary = ({ children, className }) => {
  return (
    <a
      target="_blank"
      href="https://ganeshaoperation.com/bimbel/produk/bimbelonline"
    >
      <button
        className={` bg-primary hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${className}`}
      >
        {children}
      </button>
    </a>
  );
};
