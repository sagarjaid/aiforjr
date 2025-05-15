/** @format */

import React from 'react';
import { Button } from './ui/button';

// Add a type for the pricing data
interface PricingPlan {
  title: string;
  classes: number;
  save: string;
  curriculum: string[];
  detailedLink: string;
  price: number;
  originalPrice: number;
  pricePerClass: number;
  achievements: string[];
  badge?: string | null;
  badgeColor?: string;
}

const pricingData: PricingPlan[] = [
  {
    title: 'Introduction to Coding',
    classes: 8,
    save: '14%',
    curriculum: ['Sequence, Fundamentals Coding Blocks, Loops'],
    detailedLink: '#',
    price: 299,
    originalPrice: 349,
    pricePerClass: 37,
    achievements: ['Introduction To Coding'],
    badge: null,
  },
  {
    title: 'App Developer Certificate',
    classes: 48,
    save: '22%',
    curriculum: [
      'Introduction to Coding',
      'Events / UI, Conditionals, Complex Loop, Logic Structures, Turtle Coding',
    ],
    detailedLink: '#',
    price: 1399,
    originalPrice: 1799,
    pricePerClass: 29,
    achievements: [
      'App Developer Certificate',
      'Publish your app To Playstore',
      'Top 1% to go to Silicon Valley',
    ],
    badge: 'MOST POPULAR',
    badgeColor: 'bg-sky-400',
  },
  {
    title: 'Advance Coding with Space Tech',
    classes: 144,
    save: '31%',
    curriculum: [
      'Introduction to Coding',
      'App Developer Certificate',
      'Extended UI/UX, Rich GUI app, Space Tech simulation in Space Lab / Game Lab, Professional Game Design',
    ],
    detailedLink: '#',
    price: 3699,
    originalPrice: 5399,
    pricePerClass: 26,
    achievements: ['Lifetime Access', 'Space Tech', '15 Under 15 Fellowship'],
    badge: 'BEST VALUE',
    badgeColor: 'bg-pink-400',
  },
];

export default function PricingSection() {
  return (
    <section className='w-full flex flex-col items-center justify-center py-16 bg-[#faf9f6]'>
      <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8'>
        {pricingData.map((plan, idx) => (
          <div
            key={plan.title}
            className='rounded-xl shadow-lg bg-white overflow-hidden flex flex-col border border-gray-100'>
            <div className='bg-pink-100 px-6 pt-6 pb-4 relative'>
              <div className='font-bold text-lg mb-1 text-gray-900'>
                {plan.title}
              </div>
              <div className='text-sm text-gray-600 mb-2'>
                {plan.classes} Classes
              </div>
              {plan.save && (
                <span className='absolute top-6 right-6 bg-pink-300 text-pink-900 text-xs font-bold px-3 py-1 rounded'>
                  SAVE {plan.save}
                </span>
              )}
            </div>
            <div className='px-6 py-4 flex-1 flex flex-col'>
              <div className='font-semibold text-base mb-1'>
                Curriculum Includes
              </div>
              <ul className='text-sm text-gray-700 mb-1'>
                {plan.curriculum.map((item, i) => (
                  <li
                    key={i}
                    className={
                      item === 'Introduction to Coding' ||
                      item === 'App Developer Certificate'
                        ? 'inline-block bg-pink-50 px-2 py-0.5 rounded text-pink-700 font-medium mr-2 mb-1'
                        : ''
                    }>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={plan.detailedLink}
                className='text-xs text-pink-600 underline mb-4 block'>
                View Detailed Curriculum
              </a>
              <div className='border-t pt-4 mt-auto'>
                {plan.badge && (
                  <span
                    className={`absolute -top-4 left-6 ${plan.badgeColor} text-white text-xs font-bold px-3 py-1 rounded shadow`}>
                    {plan.badge}
                  </span>
                )}
                <div className='flex items-end gap-2 mb-1'>
                  <span className='text-2xl font-extrabold text-gray-900'>
                    US$ {plan.price.toLocaleString()}
                  </span>
                  <span className='line-through text-gray-400 text-sm'>
                    US$ {plan.originalPrice.toLocaleString()}
                  </span>
                </div>
                <div className='text-xs text-gray-500 mb-3'>
                  Price Per Class US$ {plan.pricePerClass}
                </div>
                <Button className='w-full bg-pink-500 hover:bg-pink-600 text-white font-bold text-base py-2 rounded mb-2'>
                  Buy Now
                </Button>
                <div className='font-semibold text-sm text-gray-900 mb-2'>
                  Achievements
                </div>
                <div className='flex gap-2 mb-2'>
                  {plan.achievements.map((ach, i) => (
                    <div
                      key={i}
                      className='flex flex-col items-center'>
                      <div className='w-8 h-8 bg-pink-50 rounded-full mb-1' />
                      <span className='text-[10px] text-gray-600 text-center leading-tight'>
                        {ach}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Trial Button and Note */}
      <div className='flex items-center justify-center gap-4 mt-10'>
        <div className='w-full text-center text-xs text-gray-500  left-0 right-0 bottom-2'>
          *Courses have lifetime validity. Cancel anytime from the enrollment
          day for no-questions-asked 100% refund.
        </div>
        <Button className='bg-pink-400 hover:bg-pink-500 text-white font-bold text-lg px-8 py-3 rounded shadow-lg'>
          Book a FREE Trial
        </Button>
      </div>
    </section>
  );
}
