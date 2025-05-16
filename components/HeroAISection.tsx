/** @format */

import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import hero1 from '@/app/hero-23.png';
import herob from '@/app/hero-b.png';

export default function HeroAISection() {
  return (
    <>
      <section className='w-full bg-gradient-to-b from-white to-pink-50 pb-36 overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left: Text & CTA */}
            <div className='space-y-8'>
              <div className='space-y-4'>
                <div className='inline-flex items-center px-4 py-2 rounded-full bg-pink-200 text-pink-600 text-sm font-semibold'>
                  World&apos;s AI First Curriculum for Kids
                </div>
                <h1 className='text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight md:leading-[60px] lg:leading-[65px]'>
                  Live 1:1 Online AI Classes for Kids in Grade 4-12
                </h1>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  Kickstart your kid&apos;s journey with AI and let their
                  imagination come alive with real-world web projects.
                </p>
              </div>

              <div className='space-y-6'>
                {/* CTA Section */}
                <div className='space-y-4'>
                  <Link
                    href={'/locations/india'}
                    className='inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white text-lg py-3 px-8 rounded-xl shadow-lg  font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg'>
                    <svg
                      className='w-5 h-5 mr-2'
                      xmlns='http://www.w3.org/2000/svg'
                      height='24px'
                      viewBox='0 -960 960 960'
                      width='24px'
                      fill='currentColor'>
                      <path d='M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z' />
                    </svg>
                    Book a FREE Trial Class
                  </Link>

                  <div className='flex items-center gap-3 text-sm text-gray-500'>
                    <div className='flex -space-x-2'>
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className='w-8 h-8 rounded-full bg-pink-100 border-2 border-white flex items-center justify-center text-pink-600 font-semibold'>
                          {i}
                        </div>
                      ))}
                    </div>
                    <span>Join 28+ students already learning with us</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className='relative'>
              <div className='relative'>
                <Image
                  src={hero1}
                  alt='Kids learning AI online'
                  width={500}
                  height={500}
                  className='rounded-2xl bg-pink-50 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300'
                  priority
                />
                <div className='absolute -top-4 -right-4 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
                <div className='absolute -bottom-8 left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
                <div className='absolute -bottom-8 right-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>

                {/* Floating Elements */}
                <div className='absolute -top-6 right-2 bg-white rounded-lg shadow-lg p-2 hover:scale-[1.02] animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='bg-pink-100 rounded-sm p-2'>
                      <span className='text-xl'>⭐</span>
                    </div>
                    <div>
                      <div className='font-semibold text-gray-900'>
                        4.9/5 Rating
                      </div>
                      <div className='text-xs text-gray-500'>
                        from 500+ parents
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  src={herob}
                  alt='Kids learning AI online'
                  width={200}
                  height={200}
                  className='rounded-2xl absolute top-2 -left-10 shadow-sm animate-float transform hover:scale-[1.02] transition-transform duration-300'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='relative z-10 w-[60%] mx-auto -mt-40'>
        <div className='bg-white rounded-2xl shadow-lg p-8'>
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Project-Based Learning
              </h3>
              <p className='text-gray-600 mb-4'>
                Each skill is developed through hands-on projects that make
                learning fun and engaging. Your child will create:
              </p>
              <ul className='space-y-2'>
                <li className='flex items-center gap-2 text-gray-600'>
                  <span className='text-pink-500'>•</span>
                  Interactive AI stories and games
                </li>
                <li className='flex items-center gap-2 text-gray-600'>
                  <span className='text-pink-500'>•</span>
                  Simple AI-powered applications
                </li>
                <li className='flex items-center gap-2 text-gray-600'>
                  <span className='text-pink-500'>•</span>
                  Creative digital art using AI
                </li>
              </ul>
            </div>
            <div className='bg-pink-50 rounded-xl p-6 text-center'>
              <div className='text-4xl mb-4'>🎯</div>
              <h4 className='text-xl font-bold text-gray-900 mb-2'>
                Learning Outcomes
              </h4>
              <p className='text-gray-600'>
                By the end of the course, your child will have developed a
                strong foundation in AI concepts and practical problem-solving
                skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
