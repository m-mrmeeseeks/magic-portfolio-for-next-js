import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Nikol",
  lastName: "Guragain",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Intern Doctor and Researcher",
  avatar: "/images/avatar.jpg",
  email: "guragainnikol@gmail.com",
  location: "Asia/Kathmandu", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Nepali","Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
     Every so often, I write about the things that inspire me—heartfelt encounters in medicine, curious questions from research, and little productivity lessons along the way. I’d love to share them with you.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
    {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nikolguragain/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Beyond the White Coat</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">My portfolio</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm {person.firstName}, an Intern Doctor at <a href="www.pahs.edu.np">Patan Academy of Health Sciences</a>, where I am learning from patients every day and growing into the physician I hope to become.
      Beyond the hospital, I find joy in adventure, travel, music, and all things that fuel productivity.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Nikol is a Nepal-based Doctor with a passion for transforming complex challenges into simple and elegant solutions. 
        His work spans clinical assesment, performing minor procedures, proper documentation/charting and healing the patients. 
        He is actively involved in trainings, conferences and seminars; increasing the synapses between his neurons everyday. 
        Research is one of the pillars of his career: reviewing literatures, sharing uncommon findings, testing hypotheses, performing Clinical audits and Quality improvement strategies. 
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Journal of Nepal Medical Association",
        timeframe: "2023 - Present",
        role: "Section Editor",
        achievements: [
          <>
            Started the journey as a <b>Copy-Editor</b> by reviewing submissions, filtering them and following them up throughout the process.
          </>,
          <>
            Promoted to the <b>Guest Editor</b> and involved in publication process of the journal and programs conducted by Nepal Medical Association.
          </>,
          <>
          Promoted and currently working as the <b>Section Editor</b> and involved in publication process of the journal and programs conducted by Nepal Medical Association.
        </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/jnma-cover.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 11,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Patan Academy of Health Sciences",
        description: <>Undergraduate studies in Medicine.</>,
      },
      {
        name: "S.O.S. Hermann Gmeiner Higher Secondary School",
        description: <>Higher Secondary with Biology, Physics, Chemistry and Mathematics as Major.</>,
      },
      {
        name: "St. Xavier's Godavari School",
        description: <>Primary and Lower Secondary with Science, Mathematics and Computer as Major.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Elective trainings",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Kapilvastu Hospital",
        role: "Senior Clerk",
        description: <>For 17 weeks, I got chance to involve in direct patient care, daily medical rounds, clinical discussions, diagnosis and treatment.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/Elective-03.jpeg",
            alt: "Project image",
            width: 16,
            height: 16,
          },
        ],
      },
      {
        title: "Ayurveda and Alternative medicine Hospital, Lalitpur",
        description: <>A 2-week-long elective in Alternative Medicine (Ayurveda), involving in its treatment
        methods, its beliefs and direct patient interaction throughout the procedures and
        feedback sessions.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/Elective-01.jpeg",
            alt: "Project image",
            width: 16,
            height: 16,
          },
          {
            src: "/images/projects/project-01/Elective-02.jpeg",
            alt: "Project image",
            width: 16,
            height: 16,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
