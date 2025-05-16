/** @format */

import Link from 'next/link';
import { Button } from './ui/button';

export default function WhyAIForKids() {
  return (
    <>
      <section className='w-full bg-gradient-to-b from-white to-pink-50 py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Why AI for Kids?
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Empowering the next generation with the tools and skills they need
              to shape the future
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Left Column - Stats and Chart */}
            <div className='space-y-8'>
              <div className='bg-white rounded-2xl shadow-lg p-8 pb-14'>
                <div className='flex items-center justify-between mb-6'>
                  <h3 className='text-2xl font-bold text-gray-900'>
                    Creativity Growth
                  </h3>
                  <span className='text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full'>
                    NASA Study
                  </span>
                </div>
                <div className='relative h-[300px]'>
                  <svg
                    width='100%'
                    height='100%'
                    viewBox='0 0 400 300'
                    className='drop-shadow-lg'>
                    {/* Grid Lines */}
                    <line
                      x1='50'
                      y1='50'
                      x2='50'
                      y2='250'
                      stroke='#e5e7eb'
                      strokeWidth='1'
                    />
                    <line
                      x1='50'
                      y1='250'
                      x2='350'
                      y2='250'
                      stroke='#e5e7eb'
                      strokeWidth='1'
                    />

                    {/* Bars */}
                    <rect
                      x='80'
                      y='50'
                      width='40'
                      height='180'
                      fill='green'
                      className='transition-all duration-500 ease-in-out'
                    />
                    <rect
                      x='140'
                      y='100'
                      width='40'
                      height='130'
                      fill='green'
                      opacity='0.8'
                      className='transition-all duration-500 ease-in-out'
                    />
                    <rect
                      x='200'
                      y='150'
                      width='40'
                      height='80'
                      fill='green'
                      className='transition-all duration-500 ease-in-out'
                    />
                    <rect
                      x='260'
                      y='200'
                      width='40'
                      height='30'
                      fill='green'
                      className='transition-all duration-500 ease-in-out'
                    />

                    {/* Labels */}
                    <text
                      x='80'
                      y='270'
                      className='text-sm fill-gray-600'>
                      Age 5
                    </text>
                    <text
                      x='140'
                      y='270'
                      className='text-sm fill-gray-600'>
                      Age 10
                    </text>
                    <text
                      x='200'
                      y='270'
                      className='text-sm fill-gray-600'>
                      Age 15
                    </text>
                    <text
                      x='260'
                      y='270'
                      className='text-sm fill-gray-600'>
                      Age 35
                    </text>

                    {/* Y-axis labels */}
                    <text
                      x='20'
                      y='50'
                      className='text-sm fill-gray-600'>
                      100%
                    </text>
                    <text
                      x='20'
                      y='100'
                      className='text-sm fill-gray-600'>
                      75%
                    </text>
                    <text
                      x='20'
                      y='150'
                      className='text-sm fill-gray-600'>
                      50%
                    </text>
                    <text
                      x='20'
                      y='200'
                      className='text-sm fill-gray-600'>
                      25%
                    </text>
                  </svg>
                </div>
              </div>

              {/* Key Benefits */}
              {/* <div className='grid grid-cols-2 gap-4'>
                <div className='bg-white rounded-xl p-6 shadow-md'>
                  <div className='text-3xl mb-2'>🎯</div>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    Critical Thinking
                  </h4>
                  <p className='text-sm text-gray-600'>
                    Develop problem-solving skills through hands-on AI projects
                  </p>
                </div>
                <div className='bg-white rounded-xl p-6 shadow-md'>
                  <div className='text-3xl mb-2'>💡</div>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    Creativity
                  </h4>
                  <p className='text-sm text-gray-600'>
                    Express ideas through AI-powered storytelling and art
                  </p>
                </div>
              </div> */}
            </div>

            {/* Right Column - Content */}
            <div className='space-y-8'>
              <div className='bg-white rounded-2xl shadow-lg p-8'>
                <div className='border-l-4 border-pink-500 pl-4 mb-6'>
                  <blockquote className='text-xl font-semibold text-gray-900 mb-3'>
                    &ldquo;Your kids can learn logic, structure, sequence and
                    creative expression through AI&rdquo;
                  </blockquote>
                  <p className='text-gray-600'>
                    George Land & Beth Jarman&apos;s landmark NASA study
                    identified that kids peak in creativity at age 6, followed
                    by a gradual decline as they grow up.
                  </p>
                </div>

                <div className='space-y-4 text-gray-600'>
                  <p>
                    The real promise of AI is not that kids will become computer
                    engineers. AI is a fun tool for kids to exercise their:
                  </p>
                  <ul className='space-y-2'>
                    <li className='flex items-center gap-2'>
                      <span className='text-pink-500'>•</span>
                      Desire to build and create
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='text-pink-500'>•</span>
                      Curiosity to question and explore
                    </li>
                    <li className='flex items-center gap-2'>
                      <span className='text-pink-500'>•</span>
                      Imagination to innovate
                    </li>
                  </ul>
                  <p>
                    These traits will serve any child well in nearly any career,
                    in every hobby, and in life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Link
            href={'/locations/india'}
            className='flex items-center justify-center bg-gradient-to-r my-16 from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white text-lg py-3 px-8 rounded-xl shadow-lg  font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg'>
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
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Logic */}
            <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col items-start'>
              <div className='text-4xl mb-4'>🧠</div>
              <h3 className='font-bold text-xl mb-2 text-gray-900'>Logic</h3>
              <p className='text-gray-600'>
                Develop critical thinking and problem-solving abilities through
                AI projects
              </p>
            </div>
            {/* Structure */}
            <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col items-start'>
              <div className='text-4xl mb-4'>🗂️</div>
              <h3 className='font-bold text-xl mb-2 text-gray-900'>
                Structure
              </h3>
              <p className='text-gray-600'>
                Learn to organize thoughts and ideas in a systematic way
              </p>
            </div>
            {/* Creative Thinking */}
            <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col items-start'>
              <div className='text-4xl mb-4'>💡</div>
              <h3 className='font-bold text-xl mb-2 text-gray-900'>
                Creative Thinking
              </h3>
              <p className='text-gray-600'>
                Express ideas through AI-powered storytelling and art creation
              </p>
            </div>
            {/* Sequencing */}
            <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col items-start'>
              <div className='text-4xl mb-4'>🔗</div>
              <h3 className='font-bold text-xl mb-2 text-gray-900'>
                Sequencing
              </h3>
              <p className='text-gray-600'>
                Master the art of breaking down complex tasks into manageable
                steps
              </p>
            </div>
            {/* Algorithmic Thinking */}
            <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col items-start'>
              <div className='text-4xl mb-4'>⚙️</div>
              <h3 className='font-bold text-xl mb-2 text-gray-900'>
                Algorithmic Thinking
              </h3>
              <p className='text-gray-600'>
                Understand how to create step-by-step solutions to problems
              </p>
            </div>
            {/* AI Literacy */}
            <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col items-start'>
              <div className='text-4xl mb-4'>🤖</div>
              <h3 className='font-bold text-xl mb-2 text-gray-900'>
                AI Literacy
              </h3>
              <p className='text-gray-600'>
                Gain fundamental understanding of AI concepts and applications
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
