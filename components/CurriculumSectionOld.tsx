/** @format */

'use client';
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { useState } from 'react';

const curriculum = [
  {
    title: '1. Introduction to AI',
    content:
      '• What is AI?\n• How AI works\n• How to use AI\n• Prompt engineering\n• AI in everyday life',
    icon: '🤖',
  },
  {
    title: '2. AI Storybooks',
    content:
      'Tools: ChatGPT, DALL·E, Canva, Book Creator\n\nProjects:\n• Create a short storybook\n• Colour a character book\n• Create a comic book\n\nConcepts: Prompt engineering, storytelling, image generation',
    icon: '📚',
  },
  {
    title: '3. Algorithmic Thinking',
    content:
      'Tools: Flowcharts, Scratch, Pictoblox\n\nProject: Create an AI Pet or Career Advisor chatbot\n\nConcepts:\n• Decision trees\n• Logic flows\n• Instructions\n• Prompt sequencing\n• Bug fixing',
    icon: '🧮',
  },
  {
    title: '4. Introduction to API',
    content:
      'Projects:\n• Weather App\n• Random Cat Generator\n• Country Explorer\n• Word of the Day\n• Pokémon Info App\n• Solar System Planets Explorer\n\nLearn how the world works on APIs',
    icon: '🔌',
  },
  {
    title: '5. Create a Personal Website Using AI',
    content:
      'Tools: Canva website, v0.dev\n\nProject: Build your personal portfolio site to showcase:\n• AI projects\n• Bio\n• Stories',
    icon: '🌐',
  },
  {
    title: '6. Capstone Project + Showcase',
    content:
      "Project: Solve a real problem using AI + API\n\nOptions:\n• Design an AI assistant/solution using ChatGPT business API\n• Create a Chatbot that solves a user's problem\n\nDeliverables:\n• Slide deck or demo\n• Website\n• Optional chatbot interaction",
    icon: '🏆',
  },
  {
    title: 'Course Details',
    content:
      'Age Group: 8–14 years (Grades 3–9)\nDuration: 8 weeks\nFormat: Weekly 60–85 min sessions with guided project time (2 times a week)',
    icon: 'ℹ️',
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
            A comprehensive 8-week program designed to introduce young minds to
            the exciting world of Artificial Intelligence through hands-on
            projects and real-world applications.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Curriculum Accordion */}
          <div className='lg:col-span-2 space-y-6'>
            <div className='bg-white rounded-2xl shadow-lg p-8'>
              <div className='flex items-center justify-between mb-6'>
                <div>
                  <h3 className='text-2xl font-bold text-gray-900'>
                    Course Curriculum
                  </h3>
                  <p className='text-gray-600 mt-1'>
                    Explore our comprehensive modules
                  </p>
                </div>
                <Button className='bg-pink-600 hover:bg-pink-700 text-white'>
                  Download Syllabus
                </Button>
              </div>

              <Accordion
                type='single'
                collapsible
                className='space-y-4'>
                {curriculum.map((item) => (
                  <AccordionItem
                    key={item.title}
                    value={item.title}
                    className='border rounded-lg overflow-hidden hover:shadow-md transition-shadow'>
                    <AccordionTrigger className='px-6 py-4 hover:no-underline'>
                      <div className='flex items-center gap-4'>
                        <span className='text-2xl'>{item.icon}</span>
                        <span className='text-left font-semibold text-lg'>
                          {item.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='px-6 pb-4'>
                      <div className='text-gray-600 whitespace-pre-line'>
                        {item.content}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Form */}
          <div className='lg:sticky lg:top-8 lg:self-start'>
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
      </div>
    </section>
  );
}
