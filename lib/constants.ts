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
      short: "Building scalable, high-performance web apps with strong focus on user experience and system efficiency.",
      long: "Focused on performance, scalability, and building impactful, data-driven solutions across frontend and full-stack systems."
    }
  },

  about: {
    sections: [
      {
        content:
          "I'm a Software Development Engineer with hands-on experience in building scalable web applications and optimizing critical user flows. My expertise lies in JavaScript, React, and Next.js, with strong exposure to payment systems, real-time features, and performance optimization."
      },
      {
        content:
          "Currently working at Amber Student, I’ve worked extensively on payment systems using Stripe, improved system reliability to 99.9% uptime, and optimized APIs and frontend performance. I’ve also built real-time chat systems, transactional communication services, and internal dashboards to drive operational efficiency."
      },
      {
        content:
          "I hold a Bachelor of Technology in Computer Science from AKTU University. My approach emphasizes clean architecture, performance optimization, and building systems that deliver measurable business impact."
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
        title: "Languages",
        skills: [
          { name: "JavaScript", level: 85 },
          { name: "C++", level: 70 }
        ]
      },
      {
        title: "Web Technologies",
        skills: [
          { name: "HTML", level: 90 },
          { name: "CSS", level: 85 },
          { name: "ReactJS / NextJS", level: 90 },
          { name: "Redux Toolkit", level: 80 },
          { name: "Tailwind CSS", level: 85 },
          { name: "Ruby on Rails", level: 65 }
        ]
      },
      {
        title: "Databases & Tools",
        skills: [
          { name: "MySQL", level: 75 },
          { name: "MongoDB", level: 70 },
          { name: "Git", level: 90 },
          { name: "Figma", level: 70 },
          { name: "Canva", level: 85 }
        ]
      },
      {
        title: "Familiar With",
        skills: [
          { name: "Stripe", level: 80 },
          { name: "Mapbox", level: 75 },
          { name: "Google Maps", level: 75 },
          { name: "Express JS", level: 70 },
          { name: "AWS", level: 60 },
          { name: "Shadcn", level: 80 },
          { name: "Mantine", level: 70 },
          { name: "Jira", level: 75 }
        ]
      }
    ]
  },

  experience: [
    {
      company: "Amber Student",
      role: "Software Development Engineer",
      period: "Feb 2024 – Present",
      location: "Pune, India",
      achievements: [
        "Integrated Stripe SDK into the web payment system, reducing payment processing time by 30% and improving user experience",
        "Maintained and optimized core payment flows with 99.9% uptime and reduced redundant payment intents by 40% using idempotent handling",
        "Refactored Mapbox implementation, reducing bundle size and memory leaks, improving performance by 20%",
        "Built a transactional communication service for WhatsApp and email notifications, reducing manual support by 40%",
        "Implemented real-time chat with agent availability, reducing response latency and improving engagement",
        "Improved overall site performance by 30% by diagnosing and fixing critical bottlenecks",
        "Developed internal dashboards for payment tracking, reducing manual intervention by 50%"
      ]
    },
    {
      company: "WhatBytes",
      role: "Software Engineer - Frontend",
      period: "Nov 2023 – Feb 2024",
      location: "Remote",
      achievements: [
        "Built and launched 3 MVPs from scratch, accelerating early-stage product traction",
        "Enabled startups to iterate faster, reducing time to market by 30%",
        "Contributed to a low-code internal tool, improving development speed by 40%"
      ]
    },
    {
      company: "Freelance",
      role: "Frontend Developer",
      period: "Apr 2020 – Jan 2024",
      location: "Remote",
      achievements: [
        "Developed static and dynamic websites for clients using React, Next.js, and Supabase",
        "Delivered end-to-end solutions from design (Figma) to deployment"
      ]
    }
  ],

  projects: [
    {
      title: "DewCode – Code Share Platform",
      description:
        "An online IDE with multi-language support and community-driven code sharing.",
      problem:
        "Developers lack lightweight platforms for quick code execution and sharing without heavy setup.",
      solution:
        "Built a Next.js 15-based IDE with execution tracking, theming, webhook integration, and Lemon Squeezy payments.",
      tech: [
        "Next.js 15",
        "Convex",
        "Clerk",
        "TypeScript"
      ],
      links: {
        live: "https://dew-code-one.vercel.app/",
        github: ""
      }
    },
    {
      title: "Elixir Tech Community",
      description:
        "An open-source platform connecting students with working professionals.",
      problem:
        "Students lack access to direct mentorship and industry exposure.",
      solution:
        "Built a scalable community platform with user engagement features, growing to 1K+ monthly users.",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn",
        "Redux",
        "MongoDB"
      ],
      links: {
        live: "https://www.elixircommunity.in/",
        github: ""
      }
    },
    {
      title: "DewTools V2 – Developer Utility Suite",
      description:
        "A multi-utility toolset for developers including API tester, regex builder, JSON visualizer, and more.",
      problem:
        "Developers rely on multiple tools for small tasks, breaking workflow.",
      solution:
        "Created an extensible all-in-one tool platform for faster development workflows.",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn"
      ],
      links: {
        live: "https://dew-tools-v2.vercel.app/",
        github: ""
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
      },
      portfolio: {
        url: "https://dewank.vercel.app/",
        display: "Portfolio / dewank"
      }
    },
    message:
      "Let’s connect! I’m open to backend/full-stack roles, interesting projects, or anything involving scaling real-world systems."
  },

  meta: {
    lastUpdated: "2026-04-26",
    version: "2.0.0",
    description: "Personal portfolio data for Dewank Rastogi - Software Development Engineer"
  }
} as const;
