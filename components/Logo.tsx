/** @format */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/app/logo.png';
interface LogoProps {
  priority?: boolean;
  className?: string;
}

const Logo = ({ priority = false, className = '' }: LogoProps) => {
  return (
    <Link
      href='/'
      className={`flex items-center space-x-2 ${className}`}>
      <Image
        src={logo}
        alt='logo'
        className={`transition-all duration-300 w-[90px]`}
        priority={priority}
        width={100}
        height={50}
      />
    </Link>
  );
};

export default Logo;
