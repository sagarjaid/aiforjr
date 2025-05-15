/** @format */

export default function WhatYourChildWillLearn() {
  const skills = [
    {
      icon: '🧠',
      label: 'Logic',
      description:
        'Develop critical thinking and problem-solving abilities through AI projects',
    },
    {
      icon: '📑',
      label: 'Structure',
      description: 'Learn to organize thoughts and ideas in a systematic way',
    },
    {
      icon: '💡',
      label: 'Creative Thinking',
      description:
        'Express ideas through AI-powered storytelling and art creation',
    },
    {
      icon: '🔗',
      label: 'Sequencing',
      description:
        'Master the art of breaking down complex tasks into manageable steps',
    },
    {
      icon: '⚙️',
      label: 'Algorithmic Thinking',
      description:
        'Understand how to create step-by-step solutions to problems',
    },
    {
      icon: '🤖',
      label: 'AI Literacy',
      description:
        'Gain fundamental understanding of AI concepts and applications',
    },
  ];

  return (
    <section className='w-full bg-gradient-to-b from-pink-50 to-white py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            What Your Child Will Learn
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Essential skills that will prepare your child for the future of
            technology
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skills.map((skill) => (
            <div
              key={skill.label}
              className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
              <div className='flex items-start gap-4'>
                <div className='bg-pink-50 rounded-xl p-3 text-3xl group-hover:scale-110 transition-transform duration-300'>
                  {skill.icon}
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    {skill.label}
                  </h3>
                  <p className='text-gray-600'>{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='bg-white rounded-2xl p-8 shadow-lg mt-16'>
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

        <div className='bg-white rounded-2xl p-8 shadow-lg mt-16'>
          <h3 className='text-2xl font-bold text-gray-900 mb-6'>
            Project-Based Learning 2
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

        {/* Additional Info */}
        <div className='mt-16 bg-white rounded-2xl shadow-lg p-8'>
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
    </section>
  );
}
