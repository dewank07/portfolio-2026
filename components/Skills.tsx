'use client';

import { personalData } from '@/lib/constants';

export default function Skills() {
  const { skills } = personalData;

  const skillCategories = skills.categories.map((category, idx) => ({
    title: category.title,
    color: idx === 0 ? 'bg-purple-300' : idx === 1 ? 'bg-yellow-300' : 'bg-cyan-300',
    skills: category.skills.map(skill => ({ name: skill, level: 90 })), // Default level, can be customized
  }));

  // Flatten all skills for technology tags
  const technologies = skills.categories.flatMap(category => category.skills);

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Skills & Expertise</h2>
          <div className="w-24 h-2 bg-yellow-400 mx-auto neo-brutal-border"></div>
          <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <div key={idx} className={`neo-brutal-card ${category.color}`}>
              <h3 className="text-2xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="font-bold">{skill.level}%</span>
                    </div>
                    <div className="neo-brutal-border bg-white h-3 overflow-hidden">
                      <div
                        className="h-full bg-black transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="neo-brutal-card bg-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="neo-brutal-border neo-brutal-shadow px-4 py-2 bg-gradient-to-r from-purple-200 to-pink-200 font-semibold hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
