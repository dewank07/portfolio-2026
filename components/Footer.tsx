'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalData } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal, contact } = personalData;

  const socialLinks = [
    { icon: Github, href: contact.social.github.url, label: 'GitHub' },
    { icon: Linkedin, href: contact.social.linkedin.url, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${contact.email}`, label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="neo-brutal-border bg-purple-400 text-black px-3 py-1">
                &lt;/&gt;
              </span>
              {personal.fullName}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {personal.description.short}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="neo-brutal-border bg-white text-black p-3 hover:bg-purple-400 transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} {personal.fullName}. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
