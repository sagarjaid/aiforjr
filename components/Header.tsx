/** @format */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button-2';
import { getAbsoluteUrl } from '@/lib/utils';
import Logo from '@/components/Logo';

const Header = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      // Only update scroll state if mobile menu is closed
      if (!isOpen) {
        setScrolled(window.scrollY > 20);
      }
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY - 100;
        const sectionHeight = rect.height;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]); // Add isOpen to dependencies

  useEffect(() => {
    // Only close menu on search params change if it's open
    if (isOpen) {
      setIsOpen(false);
    }
  }, [searchParams]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  const navLinks = [
    { href: '#curriculum', label: 'Curriculum', id: 'curriculum' },
    { href: '#pricing', label: 'Pricing', id: 'pricing' },
  ];

  return (
    <header
      className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm'
          : 'bg-background'
      }`}>
      <nav className='w-full max-w-7xl mx-auto flex items-center justify-between p-4 pt-6 lg:px-8'>
        <div className='flex lg:block'>
          <Logo priority={true} />
        </div>

        <div className='hidden lg:flex lg:items-center lg:gap-x-4'>
          {/* Desktop Navigation */}
          <div className='hidden lg:flex lg:items-center lg:gap-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getAbsoluteUrl(link.href)}
                className={`text-sm font-bold hover:font-extrabold transition-colors relative group ${
                  activeSection === link.id
                    ? 'text-pink-600'
                    : 'text-foreground/80 hover:text-foreground'
                }`}>
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-pink-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                    activeSection === link.id ? 'scale-x-100' : ''
                  }`}
                />
              </Link>
            ))}
          </div>

          <Link
            href={getAbsoluteUrl('/locations/india')}
            className='inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-6 py-2.5 text-sm font-semibold shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg'>
            <svg
              className='w-5 h-5 mr-2'
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 -960 960 960'
              width='24px'
              fill='currentColor'>
              <path d='M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z' />
            </svg>
            Book Free Trial
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className='flex lg:hidden'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setIsOpen(true)}
            className='rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20'>
            <span className='sr-only'>Open main menu</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
        <div className='fixed inset-0 bg-background/80 backdrop-blur-sm' />
        <div
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background border-l border-border p-6 sm:max-w-sm sm:ring-1 sm:ring-border transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <div className='flex items-center justify-between'>
            <Logo priority={true} />
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsOpen(false)}
              className='rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20'>
              <span className='sr-only'>Close menu</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </Button>
          </div>

          <div className='flow-root mt-6'>
            <div className='space-y-6 py-6'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getAbsoluteUrl(link.href)}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-pink-600'
                      : 'text-foreground/80 hover:text-foreground'
                  }`}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className='py-6'>
              <Link
                href={getAbsoluteUrl('/locations/india')}
                onClick={() => setIsOpen(false)}
                className='flex w-full items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-6 py-3 text-base font-semibold shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg'>
                <svg
                  className='w-5 h-5 mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 -960 960 960'
                  width='24px'
                  fill='currentColor'>
                  <path d='M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z' />
                </svg>
                Book Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
