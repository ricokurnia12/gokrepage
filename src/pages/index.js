import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';

const inter = Inter({ subsets: ['latin'] });

export default function Main() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}
