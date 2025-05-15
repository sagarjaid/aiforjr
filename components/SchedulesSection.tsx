/** @format */

'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';

const timeSlots = [
  { label: 'Morning', color: 'bg-pink-100 text-pink-700', icon: '🌅' },
  { label: 'Afternoon', color: 'bg-yellow-100 text-yellow-700', icon: '☀️' },
  { label: 'Evening', color: 'bg-purple-100 text-purple-700', icon: '🌙' },
];

const schedules = [
  {
    badge: {
      label: 'Morning',
      color: 'bg-pink-100 text-pink-700',
      icon: '🌅',
    },
    date: 'May 10 - May 11',
    time: '08:00 AM - 05:00 PM',
    batch: 'Weekend Batch',
    trainer: {
      name: 'Kok Ewe Siew',
      role: 'AI & Machine Learning Expert',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    price: 190,
    oldPrice: 490,
    discount: '61% OFF',
    seats: 'Only few seats left!',
    fillingFast: true,
    cta: 'Enroll Now',
    monthly: 'US$ 190 total',
    highlight: 'text-red-500',
  },
  {
    badge: {
      label: 'Evening',
      color: 'bg-purple-100 text-purple-700',
      icon: '🌙',
    },
    date: 'May 12 - May 14',
    time: '06:00 PM - 11:30 PM',
    batch: 'Weekday Batch',
    trainer: {
      name: 'Jem Jelly',
      role: 'AI & Machine Learning Expert',
      img: 'https://randomuser.me/api/portraits/men/33.jpg',
    },
    price: 190,
    oldPrice: 490,
    discount: '61% OFF',
    seats: 'Hurry, Sale ends soon!',
    fillingFast: true,
    cta: 'Enroll Now',
    monthly: 'US$ 190 total',
    highlight: 'text-red-500',
  },
  {
    badge: {
      label: 'Afternoon',
      color: 'bg-yellow-100 text-yellow-700',
      icon: '☀️',
    },
    date: 'May 15 - May 16',
    time: '12:30 PM - 08:30 PM',
    batch: 'Weekday Batch',
    trainer: {
      name: 'Paul Lister',
      role: 'AI & Machine Learning Expert',
      img: 'https://randomuser.me/api/portraits/men/34.jpg',
    },
    price: 190,
    oldPrice: 490,
    discount: '61% OFF',
    seats: 'Filling Fast',
    fillingFast: true,
    cta: 'Enroll Now',
    monthly: 'US$ 190 total',
    highlight: 'text-yellow-700',
  },
];

function FilterChips() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    { label: 'All', icon: '📅' },
    { label: 'Weekend', icon: '🌅' },
    { label: 'Weekday', icon: '💼' },
    { label: 'Morning', icon: '🌅' },
    { label: 'Afternoon', icon: '☀️' },
    { label: 'Evening', icon: '🌙' },
  ];

  return (
    <div className='flex flex-wrap gap-2 mb-8'>
      {filters.map((filter) => (
        <button
          key={filter.label}
          onClick={() => setActiveFilter(filter.label)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
            activeFilter === filter.label
              ? 'bg-pink-600 text-white shadow-md'
              : 'bg-white text-gray-600 hover:bg-gray-50 border'
          }`}>
          <span>{filter.icon}</span>
          {filter.label}
        </button>
      ))}
    </div>
  );
}

function ScheduleCard({ schedule }: { schedule: (typeof schedules)[0] }) {
  return (
    <div className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden'>
      <div className='p-6'>
        <div className='flex flex-col md:flex-row gap-6'>
          {/* Left Section - Schedule Info */}
          <div className='flex-1'>
            <div className='flex items-center gap-3 mb-4'>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${schedule.badge.color}`}>
                {schedule.badge.icon} {schedule.badge.label}
              </span>
              <span className='text-sm text-gray-500'>{schedule.batch}</span>
            </div>

            <div className='space-y-2 mb-6'>
              <h3 className='text-xl font-bold text-gray-900'>
                {schedule.date}
              </h3>
              <p className='text-gray-600'>{schedule.time}</p>
            </div>

            <div className='flex items-center gap-3'>
              <img
                src={schedule.trainer.img}
                alt={schedule.trainer.name}
                className='w-12 h-12 rounded-full border-2 border-pink-100'
              />
              <div>
                <h4 className='font-semibold text-gray-900'>
                  {schedule.trainer.name}
                </h4>
                <p className='text-sm text-gray-500'>{schedule.trainer.role}</p>
              </div>
            </div>
          </div>

          {/* Right Section - Price and CTA */}
          <div className='md:w-64 flex flex-col justify-between'>
            <div className='space-y-2 mb-4'>
              {schedule.fillingFast && (
                <span className='inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full'>
                  ⚡ Filling Fast
                </span>
              )}
              <div className='flex items-baseline gap-2'>
                <span className='text-3xl font-bold text-gray-900'>
                  US$ {schedule.price}
                </span>
                <span className='text-lg text-gray-400 line-through'>
                  US$ {schedule.oldPrice}
                </span>
              </div>
              <p className='text-sm text-gray-500'>{schedule.monthly}</p>
            </div>

            <Button className='w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg'>
              {schedule.cta}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScheduleBanner() {
  return (
    <div className='bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl p-8 my-8'>
      <div className='flex flex-col md:flex-row items-center gap-6'>
        <div className='flex-1'>
          <h3 className='text-2xl font-bold text-gray-900 mb-2'>
            Can&apos;t find a suitable schedule?
          </h3>
          <p className='text-gray-600 mb-4'>
            Let us know your preferred time, and we&apos;ll create a batch just
            for you!
          </p>
          <Button className='bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg'>
            Request Custom Schedule →
          </Button>
        </div>
        <div className='w-24 h-24 bg-pink-200 rounded-full flex items-center justify-center'>
          <span className='text-4xl'>🎯</span>
        </div>
      </div>
    </div>
  );
}

export default function SchedulesSection() {
  return (
    <section className='w-full py-16 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Choose Your Schedule
          </h2>
          <p className='text-xl text-gray-600'>
            Find the perfect time slot that works for you
          </p>
        </div>

        <FilterChips />

        <div className='space-y-6 mb-8'>
          {schedules.map((schedule, index) => (
            <ScheduleCard
              key={index}
              schedule={schedule}
            />
          ))}
        </div>

        <ScheduleBanner />

        <div className='text-center mt-12'>
          <Button className='bg-white text-gray-900 border-2 border-gray-200 hover:bg-gray-50 font-semibold px-8 py-3 rounded-lg'>
            View More Schedules ↓
          </Button>
        </div>
      </div>
    </section>
  );
}
