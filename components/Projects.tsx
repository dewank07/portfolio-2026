'use client';

import { ExternalLink, Github } from 'lucide-react';
import WaveText from '@/components/WaveText';
import { personalData } from '@/lib/constants';

export default function Projects() {
  const { projects } = personalData;

  const colors = ['bg-purple-200', 'bg-yellow-200', 'bg-cyan-200', 'bg-pink-200', 'bg-green-200', 'bg-orange-200'];
  const emojis = ['🛡️', '📅', '✨', '🎨', '📊', '📝'];

  const projectsWithStyles = projects.map((project, idx) => ({
    ...project,
    tags: project.tech,
    color: colors[idx % colors.length],
    github: project.links.github,
    demo: project.links.live,
    image: emojis[idx % emojis.length],
  }));

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Featured Projects</h2>
          <div className="w-24 h-2 bg-cyan-400 mx-auto neo-brutal-border"></div>
          <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsWithStyles.map((project, idx) => (
            <div
              key={idx}
              className={`neo-brutal-card ${project.color} flex flex-col h-full`}
            >
              {/* Project Icon/Image */}
              <div className="neo-brutal-border bg-white mb-4 aspect-video flex items-center justify-center text-6xl">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4 flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="neo-brutal-border bg-white px-3 py-1 text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-brutal-border neo-brutal-shadow bg-white px-4 py-2 font-bold hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center gap-2 flex-1 justify-center wave-button"
                  >
                    <Github className="w-4 h-4" />
                    <WaveText>Code</WaveText>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-brutal-border neo-brutal-shadow bg-black text-white px-4 py-2 font-bold hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center gap-2 flex-1 justify-center wave-button"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <WaveText>Demo</WaveText>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
