/** @format */

'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.resend.supportEmail, the link won't be displayed.

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/ai-for-kids',
      },
      { label: 'Facebook', href: 'https://www.facebook.com/ai-for-kids' },
      { label: 'Instagram', href: 'https://www.instagram.com/ai-for-kids' },
      { label: 'Twitter', href: 'https://www.twitter.com/ai-for-kids' },
    ],
    resources: [
      { label: 'Curriculum', href: '#curriculum' },
      { label: 'Pricing', href: '#pricing' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'GDPR', href: '#gdpr' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className='bg-white border-t border-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Footer */}
        <div className='py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Brand Section */}
            <div className='space-y-4'>
              <div className='flex items-center'>
                <Logo priority={true} />
              </div>
              <p className='text-gray-600 text-sm'>
                Empowering the next generation with AI education and real-world
                projects.
              </p>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4'>
                Important Links
              </h3>
              <ul className='space-y-3'>
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-gray-600 hover:text-pink-600 text-sm transition-colors'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4'>
                Socials
              </h3>
              <ul className='space-y-3'>
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-gray-600 hover:text-pink-600 text-sm transition-colors'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4'>
                Legal
              </h3>
              <ul className='space-y-3'>
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-gray-600 hover:text-pink-600 text-sm transition-colors'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='py-6 border-t border-gray-100'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <p className='text-gray-600 text-sm'>
              © {currentYear} AIforJr. All rights reserved.
            </p>
            <div className='flex items-center gap-4'>
              <a
                href='mailto:hello@aiforjr.com'
                className='text-gray-600 hover:text-pink-600 text-sm transition-colors flex items-center gap-1'>
                <Mail className='h-4 w-4' />
                hello@aiforjr.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
