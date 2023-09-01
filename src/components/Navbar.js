import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg p-4 fixed top-0   w-full flex items-center justify-between z-50">
      <div className="flex items-center">
        <a target="_blank" href="https://ganeshaoperation.com/">
          <img
            src="/logonavbar.png"
            alt="Ganesha Operation"
            // sizes='16px'
            className="w-28  sm:w-28 "
          />
        </a>
        <span className="text-white font-semibold text-lg">Logo</span>
      </div>
      <a
        target="_blank"
        href="https://ganeshaoperation.com/bimbel/produk/bimbelonline"
      >
        <button className="bg-primary hover:bg-red-600 text-white text-sm sm:font-semibold p-1 md:py-2 md:px-4 rounded">
          Daftar GO Kreasi
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
