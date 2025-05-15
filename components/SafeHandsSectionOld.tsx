/** @format */

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import moneyBackBadge from '@/app/money-back-badge.png';

const SafeHandsSection = () => {
  const trustPoints = [
    {
      icon: '🔒',
      title: 'Safe Learning Environment',
      description:
        'Our AI-powered platform ensures a secure and monitored learning experience',
    },
    {
      icon: '👨‍🏫',
      title: 'Expert AI Educators',
      description:
        'Learn from certified AI specialists with years of teaching experience',
    },
    {
      icon: '📱',
      title: 'Parent Dashboard',
      description:
        'Track your child&apos;s progress and learning journey in real-time',
    },
  ];

  return (
    <section className='w-full bg-gradient-to-b from-pink-50 to-white py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Your Child is in <span className='text-pink-600'>Safe Hands</span>{' '}
            at AIforJr
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Join thousands of parents who trust AIforJr for their
            children&apos;s AI education journey
          </p>
        </div>

        {/* Trust Points */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='text-4xl mb-4'>{point.icon}</div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                {point.title}
              </h3>
              <p className='text-gray-600'>{point.description}</p>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
          <div className='grid md:grid-cols-2 gap-8'>
            {/* Left: Badge */}
            <div className='bg-pink-50 p-8 flex items-center justify-center'>
              <div className='relative w-64 h-64'>
                <Image
                  src={moneyBackBadge}
                  alt='100% Money Back Guarantee'
                  className='object-contain'
                  fill
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className='p-8 md:p-12'>
              <div className='space-y-6'>
                <div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    Our Promise to You
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    At AIforJr, we are committed to delivering exceptional AI
                    education for your child. We stand behind our quality with a{' '}
                    <span className='font-semibold text-pink-600'>
                      100% money-back guarantee
                    </span>
                    .
                  </p>
                </div>

                <div className='space-y-4'>
                  <div className='flex items-start gap-3'>
                    <div className='flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-semibold'>
                      ✓
                    </div>
                    <p className='text-gray-600'>
                      If we don&apos;t meet your expectations, you can cancel
                      anytime and get a full refund for remaining classes.
                    </p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <div className='flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-semibold'>
                      ✓
                    </div>
                    <p className='text-gray-600'>
                      No questions asked. Simply email us at{' '}
                      <a
                        href='mailto:support@aiforjr.com'
                        className='text-pink-600 hover:underline'>
                        support@aiforjr.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className='pt-4'>
                  <Link
                    href='/locations/india'
                    className='block w-full sm:w-auto'>
                    <Button className='w-full sm:w-auto bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white text-lg py-6 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02]'>
                      Start Free Trial Class
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className='mt-16 text-center'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-full text-pink-600 text-sm font-semibold'>
            <span>⭐</span>
            <span>Trusted by 10,000+ Parents Worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafeHandsSection;
