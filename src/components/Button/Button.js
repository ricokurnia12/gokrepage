import React from 'react';

export const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-secondary hover:bg-yellow-500 text-fontprimary font-bold py-4 px-6 rounded ${className}`}
    >
      {children}
    </button>
  );
};
