'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import WaveText from '@/components/WaveText';
import { personalData } from '@/lib/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { contact, personal } = personalData;

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: 'bg-purple-300',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, '')}`,
      color: 'bg-yellow-300',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: '#',
      color: 'bg-cyan-300',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-100 via-yellow-50 to-cyan-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h2>
          <div className="w-24 h-2 bg-purple-400 mx-auto neo-brutal-border"></div>
          <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
            {contact.message}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="neo-brutal-card bg-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={idx}
                      href={info.href}
                      className={`neo-brutal-border neo-brutal-shadow ${info.color} p-4 flex items-center gap-4 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all`}
                    >
                      <div className="neo-brutal-border bg-white p-3">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-gray-600">{info.label}</div>
                        <div className="font-bold text-lg">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="neo-brutal-card bg-gradient-to-br from-pink-200 to-purple-200">
              <h3 className="text-2xl font-bold mb-4">Let's Create Together</h3>
              <p className="text-gray-700 leading-relaxed">
                {contact.message}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="neo-brutal-card bg-white">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full neo-brutal-border px-4 py-3 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full neo-brutal-border px-4 py-3 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-bold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full neo-brutal-border px-4 py-3 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full neo-brutal-border px-4 py-3 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="neo-brutal-button bg-purple-400 hover:bg-purple-500 text-white w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed wave-button"
              >
                {status === 'sending' ? (
                  <WaveText>Sending...</WaveText>
                ) : status === 'sent' ? (
                  <WaveText>✓ Message Sent!</WaveText>
                ) : (
                  <>
                    <WaveText>Send Message</WaveText>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
