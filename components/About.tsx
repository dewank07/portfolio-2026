'use client';

import { Code2, Palette, Rocket, Users } from 'lucide-react';
import { personalData } from '@/lib/constants';

export default function About() {
  const { about } = personalData;

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code that stands the test of time.',
      color: 'bg-purple-300',
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Bridging the gap between design and development with pixel-perfect implementations.',
      color: 'bg-yellow-300',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing every byte and millisecond to deliver lightning-fast user experiences.',
      color: 'bg-cyan-300',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working seamlessly with designers, backend engineers, and stakeholders.',
      color: 'bg-pink-300',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About Me
          </h2>
          <div className="w-24 h-2 bg-purple-400 mx-auto neo-brutal-border"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="neo-brutal-card bg-gradient-to-br from-purple-100 to-purple-200">
              <h3 className="text-2xl font-bold mb-4">Hello! I'm a Frontend Engineer</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I'm passionate about creating exceptional digital experiences that combine beautiful design with robust functionality. With expertise in modern web technologies, I transform ideas into reality.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey in web development started with a curiosity about how websites work, and has evolved into a career focused on building accessible, performant, and user-friendly applications.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="neo-brutal-card bg-gradient-to-br from-yellow-100 to-yellow-200">
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <span>Build responsive and interactive user interfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎨</span>
                  <span>Transform designs into pixel-perfect implementations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span>
                  <span>Optimize applications for maximum performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">♿</span>
                  <span>Ensure accessibility for all users</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className={`neo-brutal-card ${highlight.color} transition-transform hover:scale-105`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="neo-brutal-border bg-white p-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold">{highlight.title}</h4>
                  <p className="text-sm text-gray-700">{highlight.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
