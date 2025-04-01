import {
  AcademicCapIcon,
  CalendarIcon,
  ChartSquareBarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/outline";

import GithubIcon from "../components/Icon/GithubIcon";
import InstagramIcon from "../components/Icon/InstagramIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import heroImage from "../images/header-background.jpg";
import sas from "../images/portfolio/sas.jpg";
import profilepic from "../images/profilepic.jpg";
import testimonialImage from "../images/testimonial.webp";
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
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Caleb Maccarone",
  description: "Resume of Caleb Maccarone, Full Stack Software Engineer",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Testimonials: "testimonials",
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Caleb`,
  description: (
    <>
      <p className="prose-sm sm:prose-base lg:prose-lg text-stone-200">
        An Ohio based{" "}
        <strong className="text-stone-100">Full Stack Software Engineer</strong>
        , currently working at{" "}
        <strong className="text-stone-100">NinjaTrader</strong> building trading tools.
      </p>
      <p className="prose-sm sm:prose-base lg:prose-lg text-stone-200">
        I have a passion for exploring new places and cultures, and I enjoy
        finding unique ways to experience them. One of my favourite activities
        is <strong className="text-stone-100">Paragliding</strong>, which
        provides an exciting perspective on the world and the beauty of nature.
      </p>
    </>
  ),
  actions: [
    {
      href: "/assets/resume.pdf",
      text: "Resume",
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: "Contact",
      primary: false,
    },
  ],
};

/**
 * About section
 */

const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

const myBirthDate = new Date("1989-11-24"); // Replace with your actual birth date

export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `While I've contributed to notable companies like NinjaTrader, eXp Realty, and Forward Thinking, one of my proudest achievements was revolutionizing a small aviation manufacturing business. I led the development of a comprehensive manufacturing management system for Sport Aircraft Seats, where I assembled and directed a skilled team to transform manual processes into a streamlined digital workflow. The solution we created not only optimized production efficiency and reduced manufacturing errors but also enhanced customer experience through real-time order tracking and automated updates. This project exemplifies my approach to software engineering: taking complex business challenges and crafting elegant, user-focused solutions that deliver tangible results. Whether working with enterprise systems or specialized manufacturing operations, I bring the same dedication to understanding core business needs and implementing transformative technical solutions.`,
  aboutItems: [
    { label: "Location", text: "Dayton, Ohio", Icon: MapIcon },
    { label: "Age", text: `${calculateAge(myBirthDate)}`, Icon: CalendarIcon },
    { label: "Nationality", text: "Italian / Irish", Icon: FlagIcon },
    {
      label: "Interests",
      text: "Paragliding, Hiking, Travel",
      Icon: SparklesIcon,
    },
    {
      label: "Study",
      text: "Western Governors University",
      Icon: AcademicCapIcon,
    },
    { label: "Employment", text: "NinjaTrader", Icon: ChartSquareBarIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Spoken languages",
    skills: [
      {
        name: "English",
        level: 10,
      },
      {
        name: "Palawano (filipino)",
        level: 5,
      },
      {
        name: "Spanish",
        level: 3,
      },
    ],
  },
  {
    name: "Tech Stacks",
    skills: [
      {
        name: "Flutter/Dart",
        level: 10,
      },
      {
        name: "GraphQL", 
        level: 10,
      },
      {
        name: "JavaScript/TypeScript/Node",
        level: 9,
      },
      {
        name: "PostGresSQL",
        level: 8,
      },
      {
        name: "React",
        level: 7,
      },
      {
        name: "Swift",
        level: 6,
      }
    ],
  },
  {
    name: "Technologies",
    skills: [
      {
        name: "Apollo/GraphQL",
        level: 9,
      },
      {
        name: "AWS",
        level: 8,
      },
      {
        name: "Docker",
        level: 8,
      },
      {
        name: "Firebase",
        level: 8,
      },
      {
        name: "XState",
        level: 8,
      },
      {
        name: "Temporal",
        level: 5,
      },
    ],
  },
  {
    name: "Flutter Skills",
    skills: [
      {
        name: "Flutter Performance Optimization (DevTools)",
        level: 10,
      },
      {
        name: "Flutter Testing",
        level: 10,
      },
      {
        name: "GetIt/Injectable",
        level: 10,
      },
      {
        name: "Inherited Widget", 
        level: 10,
      },
      {
        name: "RxDart/Streams",
        level: 10,
      },
      {
        name: "Bloc/Cubit State Management",
        level: 9,
      },
      {
        name: "Code Generation (build_runner)", 
        level: 9,
      },
      {
        name: "Event Loop (dart:async)",
        level: 9,
      },
      {
        name: "Flutter Web/Desktop",
        level: 8,
      },
      {
        name: "Flutter Animation",
        level: 7,
      },
      {
        name: "Platform Channels",
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Manufacturing Management App sportaircraftseats.com ",
    description:
      "As the project owner and tech lead, I developed and successfully launched a mobile app for an aviation manufacturing business. This app has been in production for 3 years with no major issues and has improved the manufacturing process and automated order management. I was responsible for managing the scope of the project, hiring a team of designers, and driving the architecture, including the implementation of an automated email system using third party ecommerce APIs to provide real-time updates to customers, enhancing customer communication and operational efficiency.",
    url: "https://www.qevka.com/sas-project.html",
    image: sas,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: "July 2019",
    location: "WGU",
    title: "Bachelors of Science in Business Management",
    content: (
      <p>
        BS in Business Management from WGU with 3 years accounting/management experience. 
        Started coding career automating accounting tasks with VBA scripts.
      </p>
    ),
  },
  {
    date: "December 2017",
    location: "",
    title: "Comptia Project+ Certification",
    content: (
      <p>
        
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: "June 2024 - Present",
    location: "NinjaTrader",
    title: "Senior Software Engineer",
    content: (
      <p>
        Led migration of a legacy trading app to a new architecture, increasing
        sprint velocity by 300% through CI/CD improvements, secure AI tool
        adoption, and refactors with clear patterns for junior engineers
      </p>
    ),
  },
  {
    date: "September 2023 - June 2024",
    location: "Forward Thinking Company",
    title: "Senior Software Engineer",
    content: (
      <p>
        Provided full-stack support for an Ag industry company , including
        Flutter front-end, Firebase back-end, and DevOps with Fastlane and Ruby
        scripts .
      </p>
    ),
  },
  {
    date: "April 2022 - August 2023",
    location: "eXp Realty",
    title: "Lead Software Engineer",
    content: (
      <p>
        Led full-stack development of a real estate app , clarifying
        requirements , uncovering domain knowledge, and securing support through
        collaboration.
      </p>
    ),
  },
  {
    date: "January 2021 - April 2022",
    location: "Sproutly.io",
    title: "Software Engineer",
    content: (
      <p>
        Led development of a web app for a large school district, migrated a
        legacy app for drone pilots , and supported a custom UI framework
        integrating native mobile APIs through a bridge layer.
      </p>
    ),
  }
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: "Daniel - CEO of SportAircraftSeats.com",
      text: "I spent a year searching for a project management app to organize all the custom jobs from our customers. All of our products are made to order with many customization fields and I couldn't find an app that would do it all. The app Caleb created for my business is nearly perfect and he continues to improve it as I provide feedback. What used to take me all day with paperwork and whiteboards now takes only a few hours. I can also track progress or make updates remotely. I'm planning a 3-week trip and plan to work a few hours remotely using the app.",
      image: "https://www.qevka.com/assets/img/person_1.jpg",
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "How can I help?",
  description:
    '"The true measure of a successful business is in its ability to understand and fulfill the needs of its customers."',
  items: [
    {
      type: ContactType.Email,
      text: "support@qevka.com",
      href: "mailto:reachout@timbaker.me",
    },
    {
      type: ContactType.Instagram,
      text: "@maccarone1989",
      href: "https://www.instagram.com/maccarone1989/",
    },
    {
      type: ContactType.Github,
      text: "cmaccarone",
      href: "https://github.com/qevka",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: "Github", Icon: GithubIcon, href: "https://github.com/qevka" },
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/maccarone/",
  },
  {
    label: "Instagram",
    Icon: InstagramIcon,
    href: "https://www.instagram.com/maccarone1989/",
  },
];
