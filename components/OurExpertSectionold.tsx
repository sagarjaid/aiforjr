/** @format */

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import teacherStep from '@/app/teacher-step.png';
import Image from 'next/image';
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
              <div className='absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 animate-float'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-pink-600'>500+</div>
                    <div className='text-sm text-gray-600'>Expert Teachers</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-pink-600'>10k+</div>
                    <div className='text-sm text-gray-600'>Happy Students</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm font-semibold'>
                <span className='mr-2'>👨‍🏫</span>
                Expert Educators
              </div>
              <h2 className='text-4xl font-bold text-gray-900'>
                Our Expert AI Educators
              </h2>
              <p className='text-xl text-gray-600'>
                Handpicked through our industry-leading 5-Step Teacher Selection
                Process
              </p>
            </div>

            {/* Selection Process Steps */}
            <div className='space-y-4'>
              {selectionSteps.map((step) => (
                <div
                  key={step.number}
                  className='flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'>
                  <div className='flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 font-bold'>
                    {step.number}
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      {step.title}
                    </h3>
                    <p className='text-gray-600 text-sm'>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className='pt-4'>
              <Link
                href='/locations/india'
                className='block w-full sm:w-auto'>
                <Button className='w-full sm:w-auto bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white text-lg py-6 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02]'>
                  Book a FREE Trial Class
                </Button>
              </Link>
              <p className='mt-4 text-sm text-gray-500'>
                Join 1000+ students learning from our expert educators
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertSection;
