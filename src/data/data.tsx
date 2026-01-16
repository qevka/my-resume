import {
  AcademicCapIcon,
  CalendarIcon,
  ChartSquareBarIcon,
  DownloadIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/outline";

import GithubIcon from "../components/Icon/GithubIcon";
import InstagramIcon from "../components/Icon/InstagramIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import heroImage from "../images/header-background.jpg";
import sas from "../images/portfolio/sas.jpg";
import profilepic from "../images/profilepic.png";
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
        <strong className="text-stone-100">NinjaTrader</strong> building trading
        tools.
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

// const myBirthDate = new Date("1989-11-24"); // Replace with your actual birth date

export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a force multiplier for engineering teams, transforming complex problems into simple, elegant solutions that accelerate delivery, empower iteration, and create meaningful value for users.`,
  aboutItems: [
    { label: "Location", text: "Dayton, Ohio", Icon: MapIcon },
    // { label: "Age", text: `${calculateAge(myBirthDate)}`, Icon: CalendarIcon },
    // { label: "Nationality", text: "Italian / Irish", Icon: FlagIcon },
    {
      label: "Interests",
      text: "scuba, paragliding, hiking",
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
/**
 * Technical Skills & Expertise
 */
export const skills: SkillGroup[] = [
  {
    name: "Backend & APIs",
    skills: [
      {
        name: "Node.js/JavaScript/TypeScript",
        level: 10,
      },
      {
        name: "GraphQL",
        level: 10,
      },
      {
        name: "Temporal (workflow orchestration)",
        level: 8,
      },
      {
        name: "PostgreSQL",
        level: 8,
      },
      {
        name: "Scala",
        level: 4,
      },
      {
        name: "PHP/Laravel",
        level: 4,
      },
    ],
  },
  {
    name: "Patterns & Practices",
    skills: [
      {
        name: "Cross-platform integrations",
        level: 10,
      },
      {
        name: "CI/CD",
        level: 10,
      },
      {
        name: "ELT/data pipelines",
        level: 8,
      },
    ],
  },
  {
    name: "Frontend",
    skills: [
      {
        name: "Flutter/Dart",
        level: 10,
      },
      {
        name: "React",
        level: 8,
      },
      {
        name: "Swift",
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
        BS in Business Management from WGU with 3 years accounting/management
        experience. Started coding career automating accounting tasks with VBA
        scripts.
      </p>
    ),
  },
  {
    date: "December 2017",
    location: "",
    title: "Comptia Project+ Certification",
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: "June 2024 - Present",
    location: "NinjaTrader/Kraken",
    title: "Senior Software Engineer II",
    content: (
      <p>
        <ul>
          <li
            className="text-wrap text-pretty pl-5"
            style={{ textIndent: "-0.8em", paddingLeft: "1.15em" }}
          >
            • Migrated legacy platform to Flutter — 3x team velocity, faster
            feature delivery.
          </li>
          <li
            className="text-wrap text-pretty pl-5"
            style={{ textIndent: "-0.8em", paddingLeft: "1.15em" }}
          >
            • Modernized CI/CD — cut regression testing from months to days,
            quicker releases.
          </li>
          <li
            className="text-wrap text-pretty pl-5"
            style={{ textIndent: "-0.8em", paddingLeft: "1.15em" }}
          >
            • Rewrote Scala codegen for domain models — improved team's
            adaptability to backend changes.
          </li>
        </ul>
      </p>
    ),
  },
  {
    date: "September 2023 - June 2024",
    location: "Forward Thinking Company",
    title: "Senior Full Stack Software Engineer",
    content: (
      <ul>
        <li
          className="text-wrap text-pretty pl-5"
          style={{ textIndent: "-0.8em", paddingLeft: "1.15em" }}
        >
          • Developed multi-platform Flutter apps for Agriculture Logistics
          (mobile and web) - improving supply chain efficiency.
        </li>
        <li
          className="text-wrap text-pretty pl-5"
          style={{ textIndent: "-0.8em", paddingLeft: "1.15em" }}
        ></li>
        <ul>
          <li
            className="text-wrap text-pretty pl-5"
            style={{ textIndent: "-0.8em", paddingLeft: "1.15em" }}
          >
            • Improved team efficiency and release reliability by adding
            fastlane/CI/CD automations and ruby scripts.
          </li>
        </ul>
      </ul>
    ),
  },
  {
    date: "Aug 2022 - Jan 2025",
    location: "FoxTrax.io",
    title: "CTO/Founder",
    content: (
      <p>
        <ul>
          <li
            className="text-wrap text-pretty pl-5"
            style={{ textIndent: "-0.8em", paddingLeft: "1.15em" }}
          >
            • Built and designed an attribution tracking system powering
            multi-platform apps:
            <ul className="mt-1 mb-3">
              <li
                className="text-wrap text-pretty pl-7"
                style={{ textIndent: "-0.8em", paddingLeft: "2em" }}
              >
                – Shopify app — React, Node.js, and custom pixel for e-commerce
                event tracking
              </li>
              <li
                className="text-wrap text-pretty pl-7"
                style={{ textIndent: "-0.8em", paddingLeft: "2em" }}
              >
                – Facebook app integration — Facebook API, GraphQL, analytics
                workflows
              </li>
              <li
                className="text-wrap text-pretty pl-7"
                style={{ textIndent: "-0.8em", paddingLeft: "2em" }}
              >
                – Mobile app — Flutter (Dart) front-end for on-the-go reporting
              </li>
              <li
                className="text-wrap text-pretty pl-7"
                style={{ textIndent: "-0.8em", paddingLeft: "2em" }}
              >
                – Web dashboard — React web UI for desktop analytics
              </li>
              <li
                className="text-wrap text-pretty pl-7"
                style={{ textIndent: "-0.8em", paddingLeft: "2em" }}
              >
                – Backend infrastructure — Temporal cluster powering ELT
                workflow pipeline and data sync with Apollo GraphQL
              </li>
            </ul>
          </li>
          <li
            className="text-wrap text-pretty pl-5"
            style={{ textIndent: "-0.8em", paddingLeft: "1.15em" }}
          >
            • Enabled users to more accurately track Facebook attribution and
            run successful ad campaigns, while monitoring their ads and
            reporting across mobile and desktop applications.
          </li>
        </ul>
      </p>
    ),
  },
  {
    date: "April 2022 - August 2023",
    location: "eXp Realty",
    title: "Lead Software Engineer",
    content: (
      <>
        <ul>
          <li
            className="text-wrap text-pretty pl-5"
            style={{ textIndent: "-0.8em", paddingLeft: "1.15em" }}
          >
            • Built and Designed Flutter Apps
            <ul>
              <li
                className="text-wrap text-pretty pl-5"
                style={{ textIndent: "-0.8em", paddingLeft: "1.15em" }}
              >
                - Revenue-split project with AWS middleware layer - enabled
                agents to track their commissions.
              </li>
              <li
                className="text-wrap text-pretty pl-5"
                style={{ textIndent: "-0.8em", paddingLeft: "1.15em" }}
              >
                - Agent App (mobile and web) - improved agents ability to manage
                their listings and track their leads.
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    date: "January 2021 - April 2022",
    location: "Sproutly.io",
    title: "Full Stack Software Engineer",
    content: (
      <ul>
        <li
          className="text-wrap text-pretty pl-5"
          style={{ textIndent: "-0.8em", paddingLeft: "1.00em" }}
        >
          • Enabled patient-provider communication and health plan management
          through reliable, cross-platform applications.
          <ul>
            <li
              className="text-wrap text-pretty pl-5"
              style={{ textIndent: "-0.8em", paddingLeft: "1.15em" }}
            >
              - Worked on maintaining and building the custom multi-platform UI framework (Haxe, Objective C++, and java bridge), extending the framework's mobile and web functionalities.
            </li>
            <li
              className="text-wrap text-pretty pl-5"
              style={{ textIndent: "-0.8em", paddingLeft: "1.15em" }}
            >
              - Contributed to backend (PHP Laravel) and custom rendering engine for animations in healthcare app.
            </li>
          </ul>
        </li>
        <li
          className="text-wrap text-pretty pl-5"
          style={{ textIndent: "-0.8em", paddingLeft: "1.15em" }}
        >
          • Built Flutter web app for school district, managing meetings and
          slides for thousands of teachers.
        </li>
        <li
          className="text-wrap text-pretty pl-5"
          style={{ textIndent: "-0.8em", paddingLeft: "1.15em" }}
        >
          • Developed Flutter app for drone company, coordinating pilots with
          logistics managers.
        </li>
      </ul>
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
      text: "cmaccarone (most my work is private)",
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
