'use client';

import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { personalData } from '@/lib/constants';

export default function Experience() {
  const { experience } = personalData;

  const colors = ['bg-purple-300', 'bg-yellow-300', 'bg-cyan-300'];

  const experiences = experience.map((exp, idx) => ({
    company: exp.company,
    position: exp.role,
    period: exp.period,
    location: exp.location,
    color: colors[idx % colors.length],
    achievements: exp.achievements,
  }));

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-white to-cyan-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Work Experience</h2>
          <div className="w-24 h-2 bg-purple-400 mx-auto neo-brutal-border"></div>
          <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
            My professional journey in frontend development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`neo-brutal-card ${exp.color}`}
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left: Company & Period */}
                <div className="space-y-4">
                  <div className="neo-brutal-border bg-white p-4 inline-block">
                    <Briefcase className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                    <p className="text-xl font-semibold mb-2">{exp.position}</p>
                    <div className="flex items-center gap-2 text-gray-700 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="w-4 h-4" />
                      <span className="font-semibold">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Achievements */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h4 className="font-bold text-lg mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIdx) => (
                        <li key={achIdx} className="flex items-start gap-3">
                          <span className="neo-brutal-border bg-white px-2 py-1 font-bold text-sm mt-0.5">
                            ✓
                          </span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="neo-brutal-card bg-pink-200 text-center">
            <div className="text-4xl font-bold mb-2">2+</div>
            <div className="text-lg font-semibold">Years Experience</div>
          </div>
          <div className="neo-brutal-card bg-green-200 text-center">
            <div className="text-4xl font-bold mb-2">30+</div>
            <div className="text-lg font-semibold">Projects Completed</div>
          </div>
          <div className="neo-brutal-card bg-orange-200 text-center">
            <div className="text-4xl font-bold mb-2">10+</div>
            <div className="text-lg font-semibold">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
}
