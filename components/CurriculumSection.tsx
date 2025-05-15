/** @format */

'use client';
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const curriculum = [
  {
    title: '1. Introduction to AI',
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
    title: '2. AI Storybooks',
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
    title: '3. Algorithmic Thinking',
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
    title: '4. Introduction to APIs',
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
    title: '5. Create a Personal Website using AI',
    description: 'Using AI to build your digital presence',
    concepts: ['Web design', 'Portfolio creation', 'AI-powered development'],
    tools: ['Canva website', 'v0.dev'],
    projects: [
      'Build your personal portfolio site to showcase AI projects, bio, and stories',
    ],
  },
  {
    title: '6. Capstone Project + Showcase',
    description: 'Solve a real problem using AI + API',
    concepts: ['Project planning', 'Problem-solving', 'AI integration'],
    tools: ['ChatGPT business API'],
    projects: [
      'Design an AI assistant/solution',
      'Create a problem-solving Chatbot',
      'Slide deck or demo',
      'Optional chatbot interaction',
    ],
  },
];

export default function CurriculumSection() {
  const [form, setForm] = useState({ name: '', number: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <section className='w-full bg-gradient-to-b from-white to-gray-50 py-16'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            AI for Kids Course
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            A comprehensive 8-week program designed to Introductionduce young
            minds to the exciting world of Artificial Intelligence through
            hands-on projects and real-world applications.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Curriculum Cards */}
          <div className='lg:col-span-2  shadow-lg rounded-2xl bg-white  p-6 grid grid-cols-1 gap-8'>
            <div className='flex justify-between'>
              <div>
                <h3 className='text-2xl font-bold text-gray-900'>
                  Course Curriculum
                </h3>
                <p className='text-gray-600 mt-1'>
                  Explore our comprehensive modules
                </p>
              </div>
              <div className='flex justify-end'>
                <Button className='bg-pink-600 w-fit hover:bg-pink-700 text-white mt-4 md:mt-0'>
                  Download Syllabus
                </Button>
              </div>
            </div>

            <Accordion
              type='single'
              collapsible
              className='w-full'
              defaultValue={curriculum[0].title}>
              {curriculum.map((mod) => (
                <AccordionItem
                  key={mod.title}
                  value={mod.title}
                  className='border border-gray-200 rounded-lg mb-4'>
                  <AccordionTrigger className='text-lg font-semibold hover:no-underline px-4'>
                    {mod.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className='bg-white rounded-b-2xl p-4 border-t flex flex-col h-full'>
                      <p className='text-gray-600 mb-3'>{mod.description}</p>
                      {mod.concepts.length > 0 && (
                        <div className='mb-3'>
                          <div className='font-semibold text-gray-800 mb-1'>
                            Concepts
                          </div>
                          <ul className='list-disc list-inside text-gray-700 text-sm space-y-1'>
                            {mod.concepts.map((c) => (
                              <li key={c}>{c}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {mod.tools.length > 0 && (
                        <div className='mb-3'>
                          <div className='font-semibold text-gray-800 mb-1'>
                            Tools
                          </div>
                          <div className='flex flex-wrap gap-2'>
                            {mod.tools.map((t) => (
                              <span
                                key={t}
                                className='bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium'>
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {mod.projects.length > 0 && (
                        <div>
                          <div className='font-semibold text-gray-800 mb-1'>
                            Projects
                          </div>
                          <ul className='list-disc list-inside text-gray-700 text-sm space-y-1'>
                            {mod.projects.map((p) => (
                              <li key={p}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Form */}
          <div className='lg:sticky lg:top-20 lg:self-start'>
            <div className='bg-white rounded-2xl shadow-lg p-8'>
              <div className='text-center mb-6'>
                <h3 className='text-2xl font-bold text-gray-900'>Enroll Now</h3>
                <p className='text-gray-600 mt-1'>
                  Start your AI journey today!
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className='space-y-5'>
                <div>
                  <label className='block mb-2 font-medium text-gray-700'>
                    Parent&apos;s Name
                  </label>
                  <Input
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter parent's name"
                    className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500'
                  />
                </div>
                <div>
                  <label className='block mb-2 font-medium text-gray-700'>
                    Phone Number
                  </label>
                  <Input
                    name='number'
                    value={form.number}
                    onChange={handleChange}
                    required
                    placeholder='Enter phone number'
                    type='tel'
                    className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500'
                  />
                </div>
                <div>
                  <label className='block mb-2 font-medium text-gray-700'>
                    Email Address
                  </label>
                  <Input
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder='Enter email address'
                    type='email'
                    className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500'
                  />
                </div>
                <Button
                  type='submit'
                  className='w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-6 rounded-lg transition-colors'>
                  {submitted ? '✓ Submitted!' : 'Enroll Now'}
                </Button>
              </form>

              <div className='mt-6 text-center text-sm text-gray-600'>
                <p>Limited spots available!</p>
                <p className='mt-1'>Get 20% off on early enrollment</p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-2xl p-8 mt-20 shadow-lg'>
          <h3 className='text-2xl font-bold text-gray-900 mb-6'>
            Course Overview
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
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
      </div>
    </section>
  );
}
