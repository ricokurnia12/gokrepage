import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import { ThemeProvider } from '@material-tailwind/react';
import Footer from '@/components/Footer/Footer';

export default function Main() {
  return (
    <div>
      <Navbar />
      <ThemeProvider>
        <Home />
      </ThemeProvider>
      <Footer />
    </div>
  );
}
