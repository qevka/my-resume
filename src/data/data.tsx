import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import sas from '../images/portfolio/sas.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Caleb Maccarone',
  description: "Resume of Caleb Maccarone, Full Stack Software Engineer",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Caleb Maccarone`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an Ohio based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">eXp Realty</strong> building websites and mobile apps to support real-estate agents.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I have a passion for exploring new places and cultures, and I enjoy finding unique ways to experience them. One of my favourite activities is <strong className="text-stone-100">Paragliding</strong>, which provides an exciting perspective on the world and the beauty of nature. 
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a self-taught engineer with a passion for learning and understanding how things work. I enjoy diving deep into code libraries and tackling difficult problems and puzzles. Efficiency and adventure are important values to me, both in my work and in my personal life. I am always looking for new challenges and opportunities to grow and expand my skills. In my free time, I enjoy exploring the world and meeting new people.`,
  aboutItems: [
    {label: 'Location', text: 'Dayton, Ohio', Icon: MapIcon},
    {label: 'Age', text: '33', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Italian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Paragliding, Hiking, Travel', Icon: SparklesIcon},
    {label: 'Study', text: 'Western Governors University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'eXp Realty', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Palawano (filipino)',
        level: 5,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Dev Skills',
    skills: [
      {
        name: 'Git',
        level: 8,
      },
      {
        name: 'Agile',
        level: 8,
      },
      {
        name: 'CI/CD',
        level: 7,
      },
      {
        name: 'Debugging',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 5,
      },
      {
        name: 'GraphQL',
        level: 3,
      },
      {
        name: 'Firebase',
        level: 8,
      },
      {
        name: 'TypeScript / JavaScript / Node',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Dart/Flutter',
        level: 10,
      },
      {
        name: 'Swift',
        level: 4,
      },
      {
        name: 'React',
        level: 6,
      },
      
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Manufacturing Management App sportaircraftseats.com ',
    description: 'Developed a mobile app for an aviation manufacturing business that improved the manufacturing process and automated order management. Implemented an automated email system using third party restful apis that notified customers in real-time of updates made to their orders by employees. Improved customer communication and operational efficiency.',
    url: 'https://www.qevka.com/sas-project.html',
    image: sas,
    },
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2019',
    location: 'Western Governors University',
    title: 'Bachelors of Science in Business Management',
    content: <p>I learn alot about management and also business, in the past I also worked for 3 years as an accountant.</p>,
  },
  {
    date: 'December 2017',
    location: 'School of Business',
    title: 'Comptia Project+ Certification',
    content: <p>While working on my business degree I also got a certification in project management.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2022 - Present',
    location: 'eXp Realty',
    title: 'Software Engineer',
    content: (
      <p>
        Developed multi-platform real estate application (mobile, web, custom component library) 
        using Flutter, Dart, Firebase, and Bloc pattern to improve agents productivity. 
        I played a key role in architectural design which was the foundation of the team's work, 
        by simplifying complex issues to improve team's velocity and avoid re-engineering.
      </p>
    ),
  },
  {
    date: 'January 2021 - April 2022',
    location: 'Sproutly.io',
    title: 'Software Engineer',
    content: (
      <p>
        Developed comprehensive medical services application with front-end and back-end functionality, 
        utilizing self-designed custom UI framework that integrated native libraries for iOS and Android with Haxe.
      </p>
    ),
  },
  {
    date: 'January 2021 - April 2022',
    location: 'Sellship.com',
    title: 'Flutter Developer',
    content: (
      <p>
        Utilizing Flutter and Dart, I refactored and optimized existing codebase, 
        by cleaning, removing redundant code, and organizing it to best practices 
        to improve maintainability, scalability, and performance.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Daniel - CEO of SportAircraftSeats.com',
      text: 'I spent a year looking for a project management app to organize all the custom jobs from our customers. All of our products are made to order with many customization fields and I couldn’t find an app that would do it all. The app Caleb made for my business is nearly perfect and he continues to improve it as I offer feedback. What used to take me all day with paper work orders and white boards now takes me a couple hours. Also I can now track progress or make updates remotely. I’m planning a 3 week trip and plan to work a couple hours remotely using the app.',
      image: 'https://www.qevka.com/assets/img/person_1.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'How can I help?',
  description: '"The true measure of a successful business is in its ability to understand and fulfill the needs of its customers."',
  items: [
    {
      type: ContactType.Email,
      text: 'support@qevka.com',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Instagram,
      text: '@maccarone1989',
      href: 'https://www.instagram.com/maccarone1989/',
    },
    {
      type: ContactType.Github,
      text: 'cmaccarone',
      href: 'https://github.com/qevka',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/qevka'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/maccarone/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/maccarone1989/'},
];
