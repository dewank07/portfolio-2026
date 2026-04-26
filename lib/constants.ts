export const personalData = {
  personal: {
    firstName: "Dewank",
    lastName: "Rastogi",
    fullName: "Dewank Rastogi",
    username: "dewank07",
    title: "Software Development Engineer",
    status: "Available for opportunities",
    location: "Pune, India",
    description: {
      short: "Crafting beautiful, performant and accessible web experiences with modern technologies.",
      long: "Focused on performance, accessibility and impactful solutions."
    }
  },
  about: {
    sections: [
      {
        content: "I'm a Software Development Engineer with experience in building modern, scalable web applications. My expertise lies in JavaScript, React, and Next.js, with a strong focus on creating performance-optimized user interfaces and impactful solutions that drive business growth."
      },
      {
        content: "Currently working at Amber Student, I've developed Chrome extensions, custom CMS solutions, and migrated legacy systems to modern tech stacks. I have hands-on experience with WCAG 2.1 accessibility best practices, performance optimization, and building AI-powered features that enhance user experience and operational efficiency."
      },
      {
        content: "I hold a Bachelor of Technology in Computer Science from AKTU University, Noida, India. My approach emphasizes clean code, accessibility, measurable impact, and engineering best practices to deliver exceptional user experiences."
      }
    ]
  },
  education: {
    degree: "Bachelor of Technology",
    field: "Computer Science",
    university: "AKTU University",
    location: "Noida, India"
  },
  skills: {
    categories: [
      {
        title: "Languages & Web Technologies",
        skills: [
          { name: "JavaScript", level: 80 },
          { name: "HTML", level: 90 },
          { name: "CSS", level: 80 },
          { name: "ReactJS/NextJS", level: 85 },
          { name: "Redux-Toolkit", level: 75 },
          { name: "Tailwind CSS", level: 75 }
        ]
      },
      {
        title: "Databases & Tools",
        skills: [
          { name: "MySQL", level: 75 },
          { name: "MongoDB", level: 60 },
          { name: "Git", level: 85 },
          { name: "Canva", level: 85 },
          { name: "Figma", level: 65 }
        ]
      },
      {
        title: "Familiar With",
        skills: [
          { name: "Python", level: 60 },
          { name: "Angular", level: 55 },
          { name: "Bootstrap", level: 75 },
          { name: "AntDesign", level: 75 },
          { name: "AgGrid", level: 70 },
          { name: "Shadcn", level: 70 },
          { name: "Express JS", level: 70 }
        ]
      }
    ]
  },
  experience: [
    {
      company: "Leverage Edu",
      role: "Software Development Engineer",
      period: "Oct 2023 – Present",
      location: "Noida, India",
      achievements: [
        "Developed a Chrome extension to auto-fill university forms using saved data, reducing form completion time by ~85% (30 mins to 5 mins), improving operational efficiency by 80% and minimizing manual errors by 90%; adopted daily by 50+ counselors to streamline onboarding",
        "Built a custom CMS to manage student success stories, boosting engagement by 15% and session duration by 10%",
        "Migrated 40+ legacy landing pages from PHP to Next.js and Strapi, improving page load speed by 35%, reducing bounce rate by 20%, and increasing organic traffic by 15%",
        "Developed a high conversion landing page for NAS Daily campaign, generating 9,000+ leads in 1 hour and increasing the acquisition of quarterly leads by 40%",
        "Refactored the frontend codebase with WCAG 2.1 accessibility best practices, reducing bundle size by 30%, improving load speed by 25%, and boosting Core Web Vitals by 15%",
        "Led frontend development of AI-powered Course Finder and 111 Guarantee Scheme, enhancing user experience and improving lead qualification by 20%"
      ]
    },
    {
      company: "JobTwine",
      role: "Software Engineer - Frontend",
      period: "Jan 2023 - May 2023",
      location: "Washington DC, Remote",
      achievements: [
        "Optimized frontend load times by 25% using code splitting, lazy loading, and performance techniques, enhancing user experience and reducing session delays",
        "Built an advanced data visualization dashboard with React and Chart.js, enabling effective tracking of interviewee performance and increasing operational efficiency by 40%"
      ]
    }
  ],
  projects: [
    {
      title: "SkySearch – Smarter flight decisions, faster",
      description:
        "A modern flight search and comparison web app that helps users explore, filter, and compare flights with clarity. Features real-time filtering, live price trends, and side-by-side comparisons in a fast, responsive interface.",
      problem:
        "Flight search results are often overwhelming, making it hard for users to judge value, compare options, and make confident decisions quickly—especially across price, duration, and stops.",
      solution:
        "Built a user-centric flight search experience with instant filtering and sorting, live price visualization, price confidence indicators, and an intuitive compare mode that highlights the best options across key criteria.",
      tech: [
        "Next.js",
        "React",
        "JavaScript",
        "Tailwind CSS",
        "MUI",
        "Zustand",
        "Recharts"
      ],
      links: {
        live: "https://skysearch-snegi.vercel.app/",
        github: "https://github.com/snegicodes/SkySearch"
      }
    },    
    {
      title: "Silent Sentinel – Realtime Theft Detection",
      description: "A browser-based AI tool for real-time person detection from video input with automated email alerts. Built with Next.js, Tailwind CSS, and TensorFlow.js (COCO-SSD) for sub-1s response time.",
      problem: "Need for a privacy-compliant, real-time intrusion detection system that works without additional hardware or installation.",
      solution: "Developed a browser-based solution using TensorFlow.js for local processing, with Nodemailer integration for automated alerts. Ensured 100% offline detection with no data saved to external servers.",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "TensorFlow.js",
        "Nodemailer",
        "COCO-SSD"
      ],
      links: {
        live: "https://snegicodes-thief-detection.vercel.app/",
        github: "https://github.com/snegicodes/Silent-Sentinel"
      }
    },
    {
      title: "VibeCheck – Instant Tone Rewriter",
      description: "An AI-powered tool that instantly rewrites any message into selected tones (professional, friendly, formal, casual, promotional, and more). Get polished rewrites in under 5 seconds with a smooth, intuitive interface.",
      problem: "Users need a quick way to adapt their messages for different contexts—students rewriting emails, professionals refining client communication, content creators adjusting captions, and business owners polishing outreach messages.",
      solution: "Built a fast, user-friendly web application powered by Gemini API that supports up to 2000 characters, multiple predefined tones, one-click copy functionality, and robust error handling with input sanitization to prevent prompt injection.",
      tech: [
        "Next.js",
        "Gemini API",
        "Tailwind CSS",
        "React",
        "JavaScript"
      ],
      links: {
        live: "https://vibecheck-snegi.vercel.app/",
        github: "https://github.com/snegicodes/VibeCheck"
      }
    }
  ],
  contact: {
    email: "dewankrastogi007@gmail.com",
    phone: "+918057116644",
    social: {
      github: {
        username: "dewank07",
        url: "https://github.com/dewank07",
        display: "GitHub / dewank07"
      },
      linkedin: {
        username: "dewankrastogi",
        url: "https://linkedin.com/in/dewankrastogi",
        display: "LinkedIn / dewankrastogi"
      }
    },
    message: "Let's connect! Whether you're looking for a frontend engineer or want to discuss a project, I'd love to hear from you."
  },
  meta: {
    lastUpdated: "2026-01-27",
    version: "1.0.0",
    description: "Personal portfolio data for Sarthak Negi - Software Development Engineer"
  }
} as const;
