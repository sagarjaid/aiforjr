/** @format */

'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

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

        {/* Course Content Tabs */}
        <div className='mb-8'>
          <div className='flex justify-center gap-4 mb-8'>
            <button
              onClick={() => setSelectedTab('overview')}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedTab === 'overview'
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>
              Overview
            </button>
            <button
              onClick={() => setSelectedTab('curriculum')}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedTab === 'curriculum'
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>
              Curriculum
            </button>
            <button
              onClick={() => setSelectedTab('projects')}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedTab === 'projects'
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>
              Project Ideas
            </button>
          </div>

          {selectedTab === 'overview' && (
            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Course Overview
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-4'>
                    What You&apos;ll Learn
                  </h4>
                  <ul className='space-y-3'>
                    <li className='flex items-start gap-2'>
                      <svg
                        className='w-5 h-5 text-pink-500 mt-1'
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
                      <span className='text-gray-600'>
                        Critical thinking and problem-solving with AI
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <svg
                        className='w-5 h-5 text-pink-500 mt-1'
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
                      <span className='text-gray-600'>
                        Algorithmic thinking and step-by-step planning
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <svg
                        className='w-5 h-5 text-pink-500 mt-1'
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
                      <span className='text-gray-600'>
                        Creative thinking through stories and problem-solving
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <svg
                        className='w-5 h-5 text-pink-500 mt-1'
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
                      <span className='text-gray-600'>
                        Digital literacy and responsible tech use
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-4'>
                    Tools You&apos;ll Use
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {[
                      'ChatGPT',
                      'DALL·E',
                      'Canva',
                      'Book Creator',
                      'Scratch',
                      'Pictoblox',
                      'v0.dev',
                    ].map((tool) => (
                      <span
                        key={tool}
                        className='bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm'>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'curriculum' && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {courseModules.map((module) => (
                <ModuleCard
                  key={module.title}
                  module={module}
                />
              ))}
            </div>
          )}

          {selectedTab === 'projects' && (
            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                50+ AI Project Ideas
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {[
                  {
                    category: 'School & Learning',
                    projects: [
                      'Homework Helper Chatbot',
                      'AI Vocabulary Coach',
                      'Reading Buddy',
                      'History Explainer',
                      'Science Facts Generator',
                      'AI Class Scheduler',
                      'Art Critic Bot',
                      'AI Study Reminder',
                    ],
                  },
                  {
                    category: 'Home & Daily Life',
                    projects: [
                      'Morning Routine Planner',
                      'Chore Assistant',
                      'Family Dinner AI',
                      'AI Plant Doctor',
                      'Movie Night Picker',
                      'Pet Name Generator',
                      'Weekend Fun Bot',
                    ],
                  },
                  {
                    category: 'Environment & Sustainability',
                    projects: [
                      'Recycling Advisor',
                      'AI Water Saver',
                      'Eco Quiz Bot',
                      'Climate News Reader',
                      'Plant-Based Recipe Maker',
                      'Wildlife Friend Finder',
                    ],
                  },
                  {
                    category: 'Friendship & Emotions',
                    projects: [
                      'Emotion Helper Bot',
                      'Kindness Coach',
                      'Peer Conflict Solver',
                      'Compliment Creator',
                      'AI Pen Pal',
                      'Gratitude Journal Bot',
                    ],
                  },
                  {
                    category: 'Creativity & Fun',
                    projects: [
                      'Diet Planner',
                      'AI Career Advisor',
                      'Story Generator',
                      'Comic Strip Maker',
                      'Birthday Card Designer',
                      'Costume Idea Bot',
                      'Name That Invention',
                      'Superhero Creator',
                      'Puzzle Maker',
                    ],
                  },
                  {
                    category: 'Health & Safety',
                    projects: [
                      'AI Snack Coach',
                      'First-Aid Guide',
                      'Sleep Tracker Bot',
                      'AI Screen Time Coach',
                      'Calm Down Buddy',
                      'Germ Buster Game',
                    ],
                  },
                  {
                    category: 'Community & Social Good',
                    projects: [
                      'Lost & Found Bot',
                      'AI for Accessibility',
                      'Playground Safety Advisor',
                      'AI Translator',
                      'Good Deed Tracker',
                      'Donation Buddy',
                      'Local Hero Interview Bot',
                      'AI Volunteer Match',
                    ],
                  },
                  {
                    category: 'Showcase & General',
                    projects: ['Personal AI Coach', 'AI Explorer Journal'],
                  },
                ].map((category) => (
                  <div
                    key={category.category}
                    className='bg-gray-50 rounded-xl p-6'>
                    <h4 className='font-semibold text-gray-900 mb-4'>
                      {category.category}
                    </h4>
                    <ul className='space-y-2'>
                      {category.projects.map((project) => (
                        <li
                          key={project}
                          className='flex items-center gap-2 text-gray-600'>
                          <svg
                            className='w-4 h-4 text-pink-500'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M9 5l7 7-7 7'
                            />
                          </svg>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Trial Section */}
        <div className='bg-white rounded-2xl p-8 shadow-lg text-center'>
          <div className='max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Not sure if this course is right for you?
            </h3>
            <p className='text-gray-600 mb-6'>
              Try a FREE trial class and experience our teaching methodology
            </p>
            <Link
              href='/locations/india'
              className='block w-full sm:w-auto'>
              <Button className='w-full sm:w-auto bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white text-lg py-6 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02]'>
                Book a FREE Trial Class
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
