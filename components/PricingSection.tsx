/** @format */

'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import moneyBackBadge from '@/app/money-back-badge.png';
import Image from 'next/image';
interface Module {
  title: string;
  description: string;
  concepts: string[];
  tools: string[];
  projects: string[];
}

interface PricingOption {
  title: string;
  price: number;
  pricePerClass: number;
  description: string;
  features: string[];
}

const courseModules: Module[] = [
  {
    title: 'Module 1: Intro to AI',
    description: 'Understanding the basics of Artificial Intelligence',
    concepts: [
      'What is AI?',
      'How AI works',
      'How to use AI',
      'Prompt engineering',
      'AI in everyday life',
    ],
    tools: [],
    projects: [],
  },
  {
    title: 'Module 2: AI Storybooks',
    description: 'AI Storytelling with Text + Image Generation',
    concepts: ['Prompt engineering', 'Storytelling', 'Image generation'],
    tools: ['ChatGPT', 'DALL·E', 'Canva', 'Book Creator'],
    projects: [
      'Create a short storybook',
      'Colour a character book',
      'Create a comic book',
    ],
  },
  {
    title: 'Module 3: Algorithmic Thinking',
    description: 'Think Like a Machine',
    concepts: [
      'Decision trees',
      'Logic flows',
      'Instructions',
      'Prompt sequencing',
      'Bug fixing',
    ],
    tools: ['Flowcharts', 'Scratch', 'Pictoblox'],
    projects: ['Create an AI Pet or Career Advisor chatbot'],
  },
  {
    title: 'Module 4: Intro to API',
    description: 'Understanding how the world works on APIs',
    concepts: ['API basics', 'Data integration', 'Web services'],
    tools: ['Various APIs'],
    projects: [
      'Weather App',
      'Random Cat Generator',
      'Country Explorer',
      'Word of the Day',
      'Pokémon Info App',
      'Solar System Planets Explorer',
    ],
  },
  {
    title: 'Module 5: Create a Personal Website',
    description: 'Using AI to build your digital presence',
    concepts: ['Web design', 'Portfolio creation', 'AI-powered development'],
    tools: ['Canva website', 'v0.dev'],
    projects: [
      'Build your personal portfolio site to showcase AI projects, bio, and stories',
    ],
  },
  {
    title: 'Module 6: Capstone Project',
    description: 'Solve a real problem using AI + API',
    concepts: ['Project planning', 'Problem-solving', 'AI integration'],
    tools: ['ChatGPT business API'],
    projects: [
      'Design an AI assistant/solution',
      'Create a problem-solving Chatbot',
      'Deliverables: Slide deck or demo + website + optional chatbot interaction',
    ],
  },
];

const pricingOptions: PricingOption[] = [
  {
    title: 'Group Class',
    price: 190,
    pricePerClass: 10,
    description: 'Learn with peers in a collaborative environment',
    features: [
      'Class of 4 students',
      'Interactive group learning',
      'Peer collaboration',
      'Shared project experiences',
    ],
  },
  {
    title: '1:1 Private Class',
    price: 490,
    pricePerClass: 25,
    description: 'Personalized attention and customized learning pace',
    features: [
      'One-on-one instruction',
      'Customized learning pace',
      'Individual project focus',
      'Flexible scheduling',
    ],
  },
];

const ModuleCard = ({ module }: { module: Module }) => (
  <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow'>
    <h3 className='text-xl font-bold text-gray-900 mb-2'>{module.title}</h3>
    <p className='text-gray-600 mb-4'>{module.description}</p>

    {module.concepts.length > 0 && (
      <div className='mb-4'>
        <h4 className='font-semibold text-gray-900 mb-2'>Concepts</h4>
        <ul className='list-disc list-inside text-gray-600 space-y-1'>
          {module.concepts.map((concept, i) => (
            <li key={i}>{concept}</li>
          ))}
        </ul>
      </div>
    )}

    {module.tools.length > 0 && (
      <div className='mb-4'>
        <h4 className='font-semibold text-gray-900 mb-2'>Tools</h4>
        <div className='flex flex-wrap gap-2'>
          {module.tools.map((tool, i) => (
            <span
              key={i}
              className='bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm'>
              {tool}
            </span>
          ))}
        </div>
      </div>
    )}

    {module.projects.length > 0 && (
      <div>
        <h4 className='font-semibold text-gray-900 mb-2'>Projects</h4>
        <ul className='list-disc list-inside text-gray-600 space-y-1'>
          {module.projects.map((project, i) => (
            <li key={i}>{project}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default function PricingSection() {
  const [selectedTab, setSelectedTab] = useState<
    'overview' | 'curriculum' | 'projects'
  >('overview');

  return (
    <section className='w-full py-20 bg-gradient-to-b from-white to-pink-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            AI for Kids – Real-World AI Projects
          </h2>
          <div className='flex flex-wrap justify-center gap-4 text-gray-600 mb-8'>
            <div className='flex items-center gap-2'>
              <svg
                className='w-5 h-5 text-pink-500'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <span>8 weeks</span>
            </div>
            <div className='flex items-center gap-2'>
              <svg
                className='w-5 h-5 text-pink-500'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <span>Ages 8-14 (Grades 3-9)</span>
            </div>
            <div className='flex items-center gap-2'>
              <svg
                className='w-5 h-5 text-pink-500'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                />
              </svg>
              <span>60-85 min sessions (2x/week)</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
          {pricingOptions.map((option) => (
            <div
              key={option.title}
              className='bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300'>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                {option.title}
              </h3>
              <p className='text-gray-600 mb-6'>{option.description}</p>

              <div className='mb-6'>
                <div className='flex items-baseline gap-2'>
                  <span className='text-4xl font-bold text-gray-900'>
                    US$ {option.price}
                  </span>
                  <span className='text-gray-500'>
                    (US$ {option.pricePerClass} per class)
                  </span>
                </div>
              </div>

              <ul className='space-y-3 mb-8'>
                {option.features.map((feature, i) => (
                  <li
                    key={i}
                    className='flex items-center gap-2'>
                    <svg
                      className='w-5 h-5 text-pink-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span className='text-gray-600'>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className='w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-6 rounded-lg'>
                Enroll Now
              </Button>
            </div>
          ))}
        </div>

        {/* Trial Section */}
        {/* <div className='bg-white rounded-2xl p-8 py-16 shadow-lg text-center'>
          <div className='max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Not sure if this course is right for you?
            </h3>
            <p className='text-gray-600 mb-6'>
              Try a FREE trial class and experience our teaching methodology
            </p>
            <Link
              href='/locations/india'
              className='block w-fit mx-auto'>
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
          </div>
        </div> */}
      </div>
    </section>
  );
}
