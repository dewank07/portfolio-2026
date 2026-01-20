'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import WaveText from '@/components/WaveText';
import { personalData } from '@/lib/constants';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const { personal, contact } = personalData;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-purple-100 via-yellow-50 to-cyan-100">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="neo-brutal-border neo-brutal-shadow bg-yellow-300 px-4 py-2 text-sm font-bold uppercase">
                  {personal.title}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">{personal.firstName}</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-cyan-300 -rotate-1"></span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                {personal.description.short}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="neo-brutal-button bg-purple-400 hover:bg-purple-500 text-white flex items-center gap-2 wave-button"
              >
                <WaveText>View Projects</WaveText>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="neo-brutal-button bg-white hover:bg-gray-50 wave-button"
              >
                <WaveText>Get in Touch</WaveText>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href={contact.social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-brutal-border neo-brutal-shadow bg-white p-3 hover:bg-gray-50 transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={contact.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-brutal-border neo-brutal-shadow bg-white p-3 hover:bg-gray-50 transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="neo-brutal-border neo-brutal-shadow bg-white p-3 hover:bg-gray-50 transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Decorative Element */}
          <div className="relative hidden lg:block group">
            <div className="relative w-full aspect-square transition-transform duration-500 ease-out group-hover:scale-105">
              {/* Main Card */}
              <div className="absolute inset-0 neo-brutal-border neo-brutal-shadow-xl bg-gradient-to-br from-purple-400 to-purple-600 rotate-3 rounded-lg transition-all duration-500 ease-out group-hover:rotate-6 group-hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] group-hover:from-purple-500 group-hover:to-purple-700"></div>
              <div className="absolute inset-0 neo-brutal-border neo-brutal-shadow-xl bg-gradient-to-br from-yellow-300 to-yellow-400 -rotate-3 rounded-lg transition-all duration-500 ease-out group-hover:-rotate-6 group-hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] group-hover:from-yellow-400 group-hover:to-yellow-500"></div>
              <div className="absolute inset-0 neo-brutal-border neo-brutal-shadow-xl bg-gradient-to-br from-cyan-300 to-cyan-500 rotate-6 rounded-lg flex items-center justify-center transition-all duration-500 ease-out group-hover:rotate-9 group-hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] group-hover:from-cyan-400 group-hover:to-cyan-600">
                <div className="text-center text-white p-8 transition-transform duration-500 ease-out group-hover:scale-110">
                  <div className="text-6xl font-bold mb-4 transition-transform duration-500 ease-out group-hover:rotate-12">&lt;/&gt;</div>
                  <p className="text-2xl font-bold">Code with Passion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
