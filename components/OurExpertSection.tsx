/** @format */

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import teacherStep from '@/app/teacher-step.png';
import Image from 'next/image';
import moneyBackBadge from '@/app/money-back-badge.png';
const OurExpertSection = () => {
  const selectionSteps = [
    {
      number: '01',
      title: 'Initial Screening',
      description:
        'Rigorous evaluation of technical expertise and teaching experience',
    },
    {
      number: '02',
      title: 'Technical Assessment',
      description: 'Comprehensive testing of coding and AI knowledge',
    },
    {
      number: '03',
      title: 'Teaching Demo',
      description: 'Evaluation of teaching methodology and student engagement',
    },
    {
      number: '04',
      title: 'Background Check',
      description: 'Thorough verification of credentials and experience',
    },
    {
      number: '05',
      title: 'Final Interview',
      description: 'Personal assessment of teaching philosophy and approach',
    },
  ];

  return (
    <section className='w-full bg-gradient-to-b from-white to-pink-50 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left: Image and Stats */}
          <div className='relative'>
            <div className='absolute -top-4 -left-4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
            <div className='absolute -bottom-8 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>

            <div className='relative'>
              <Image
                src={teacherStep}
                alt='Expert teacher teaching'
                className='rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300'
              />

              {/* Floating Stats Card */}
              <div className='absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-float'>
                {/* LinkedIn Icon */}
                <div className='flex justify-center'>
                  <a
                    href='https://www.linkedin.com/in/sagarjaid/'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn Profile'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='28'
                      height='28'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='text-blue-600 hover:text-blue-800 transition-colors'>
                      <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm font-semibold'>
                Gen AI Expert
              </div>
              <h2 className='text-4xl font-bold text-gray-900'>
                Our Expert AI Educator
              </h2>
              <p className='text-xl text-gray-600'>
                Sagar Jaid has built and sold an AI startup and has been working
                in tech from last 8 years.
              </p>
            </div>

            {/* CTA */}
            <div className='pt-4'>
              <Link
                href='/locations/india'
                className='block w-fit'>
                <Button className='w-full px-8  bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white text-lg py-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02]'>
                  <svg
                    className='w-6 h-6 mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    height='24px'
                    viewBox='0 -960 960 960'
                    width='24px'
                    fill='currentColor'>
                    <path d='M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z' />
                  </svg>
                  Book a FREE Trial Class
                </Button>
              </Link>
              <p className='mt-4 text-sm text-gray-500'>
                Join 28+ students learning from our expert educators
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertSection;
