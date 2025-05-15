/** @format */

import React from 'react';

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className='transform hover:scale-105 transition-transform duration-300 bg-white rounded-xl p-6 shadow-lg'>
    <div className='text-3xl md:text-4xl font-bold text-pink-600 mb-2'>
      {number}
    </div>
    <div className='text-gray-600 text-sm md:text-base'>{label}</div>
  </div>
);

const JoinRevolutionSection = () => {
  return (
    <section className='w-full py-20 bg-gradient-to-b from-white to-pink-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Make Your Kids AI Ready Today!
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Be part of a community that&apos;s shaping the future of education
            through AI
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* Left Side - Trial Class Booking */}
          <div className='bg-white rounded-2xl p-12 shadow-xl transform hover:scale-[1.02] transition-transform duration-300'>
            <h3 className='text-2xl md:text-3xl text-center font-bold text-gray-900 mb-3'>
              Start Your AI Journey Today
            </h3>
            <p className='text-gray-600 text-center mt-2 text-lg'>
              Experience our AI teaching methodology
            </p>
            <button className='w-full bg-pink-600 text-white px-8 py-4 mt-8 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'>
              Book a FREE Trial Class
            </button>

            <p className='text-gray-500 text-sm mt-2 text-center'>
              No credit card required • 30-minute session
            </p>
          </div>

          {/* Right Side - Statistics */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <StatCard
              number='10+'
              label='Registered Teachers'
            />
            <StatCard
              number='28+'
              label='Registered Students'
            />
            <StatCard
              number='60+'
              label='Classes Taken'
            />
            <StatCard
              number='98%'
              label='Student Satisfaction'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinRevolutionSection;
