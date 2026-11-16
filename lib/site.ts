// All site copy and data lives here, so text can be edited without touching layout.

export const site = {
  name: "UDAY IdeaLab",
  legalName: "UDAY IdeaLab Pvt. Ltd.",
  tagline: "Ideas into innovation. Creativity into impact.",
  // Second line: shown under the hero headline, in the footer and in search results.
  strapline: "Technology and creative communication for social change.",
  description:
    "Technology and creative communication for social change. UDAY IdeaLab is a Nepal-based studio that builds websites, manages social media, designs brands, makes documentary films and podcasts, and teaches digital skills for organisations creating change.",
  // TODO before publishing: fill in the official contact details.
  // Empty values are shown as "To be announced" on the site.
  email: "udayidealab.org@gmail.com",
  phone: "+977 9767141381",
  formRecipients: ["udayidealab.org@gmail.com", "shahaaseesh@gmail.com"],
  address: "Janakpurdham, Nepal",
  location: "Janakpurdham, Nepal",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our work" },
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
];

export type Service = {
  id: string;
  number: string;
  short: string;
  title: string;
  promise: string;
  summary: string;
  detail: string;
  capabilities: string[];
  /** Cover for the service card: a project id, or a drawn cover when there is no project yet. */
  coverProject?: string;
  coverVisual?: Visual;
};

export const services: Service[] = [
  {
    id: "technology",
    number: "01",
    short: "Technology",
    title: "Websites & digital platforms",
    promise: "Websites and platforms that do real work.",
    summary:
      "Websites, digital platforms and IT support. We plan, design, build and maintain the tools your organisation runs on.",
    detail:
      "A website is often the first place people meet you. We build digital products that are simple to use and simple to maintain, advise on the technology behind them, and stay on to support the team that runs them.",
    capabilities: [
      "Website design & development",
      "Digital platforms",
      "IT consulting",
      "Digital transformation",
      "Technical support & maintenance",
    ],
    coverProject: "janakpur-literature-festival",
  },
  {
    id: "brand",
    number: "02",
    short: "Design & writing",
    title: "Branding, graphic design & content writing",
    promise: "A look and a voice people recognise.",
    summary:
      "Brand identities, campaign graphics, newsletters, reports and illustration, with clear writing for web, email and print.",
    detail:
      "How you look and how you sound should belong together. We design the identity, lay out the documents and write the words, so a report, a poster and a web page all read as the same organisation.",
    capabilities: [
      "Brand identity",
      "Graphic design",
      "Content writing & editing",
      "Newsletters & reports",
      "Illustration & comics",
      "Campaign design",
    ],
    coverVisual: "type",
  },
  {
    id: "social",
    number: "03",
    short: "Social media",
    title: "Social media management",
    promise: "Planned, created and published for you.",
    summary:
      "Full-service social media: strategy, content calendars, writing, design, reels, publishing and campaign rollout, managed end to end.",
    detail:
      "Posting now and then is not a presence. We plan the month, write and design each post, cut the reels, publish on schedule and report on what worked, so your channels stay active while your team gets on with its work.",
    capabilities: [
      "Social media strategy",
      "Content calendars",
      "Post & carousel design",
      "Reels & short-form video",
      "Publishing & community management",
      "Digital marketing",
    ],
    coverProject: "jlf-social",
  },
  {
    id: "media",
    number: "04",
    short: "Film & photo",
    title: "Documentary films & photography",
    promise: "Stories that deserve to be told.",
    summary:
      "Documentaries, interviews and photography. We handle research, scripting, field production, cinematography, editing and subtitles.",
    detail:
      "Reports explain what a project did. Stories show why it mattered. We spend time with the people involved before we film, then shape interviews, footage and photographs into stories audiences watch to the end.",
    capabilities: [
      "Documentary filmmaking",
      "Interview-led stories & scripting",
      "Field production & cinematography",
      "Photography & photojournalism",
      "Event documentation",
      "Editing, colour & subtitles",
    ],
    coverProject: "karkhana-documentary",
  },
  {
    id: "audio",
    number: "05",
    short: "Audio & multimedia",
    title: "Podcasts, audio & multimedia",
    promise: "Ideas you can listen to and watch.",
    summary:
      "Podcast development, recording and editing, plus audio stories, animation, explainers, voiceover and translation.",
    detail:
      "Some ideas travel better by ear, and some need to be drawn. We develop and produce podcasts, turn complex topics into short explainers and animations, and adapt content into the languages your audience speaks.",
    capabilities: [
      "Podcast development",
      "Recording & editing",
      "Audio stories",
      "Animation & explainers",
      "Voiceover",
      "Translation & subtitling",
    ],
    coverVisual: "wave",
  },
  {
    id: "education",
    number: "06",
    short: "Education",
    title: "Digital education & social impact",
    promise: "Skills and awareness, within everyone’s reach.",
    summary:
      "Hands-on training, awareness campaigns and community engagement that bring digital and creative skills to more people.",
    detail:
      "Digital and creative skills open doors for young people. We run practical training, design awareness campaigns and work with development partners to bring technology-based learning to the communities they serve.",
    capabilities: [
      "Digital literacy training",
      "Design & creative skills workshops",
      "Awareness campaigns",
      "Youth engagement",
      "Development communication",
      "Community engagement & facilitation",
    ],
    coverProject: "rju-design-training",
  },
];

export type Visual =
  | "browser"
  | "film"
  | "reel"
  | "numbers"
  | "posts"
  | "learn"
  | "type"
  | "wave";

export type Project = {
  id: string;
  service: Service["id"];
  client: string;
  title: string;
  kind: string;
  summary: string;
  body?: string;
  facts?: { value: string; label: string }[];
  link?: { href: string; label: string };
  note?: string;
  visual: Visual;
  /** Cover image in /public. Projects without one get a drawn cover. */
  image?: string;
  /** Domain shown in the browser mock, or the YouTube video id for films. */
  visualMeta?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "janakpur-literature-festival",
    service: "technology",
    client: "Janakpur Literature Festival",
    title: "Where stories and Mithila culture meet",
    kind: "Website design & development",
    summary:
      "We designed and developed the official website for Janakpur Literature Festival, providing a rich digital platform for festival schedules, speaker profiles, live events and cultural archives.",
    link: {
      href: "https://www.janakpurliteraturefestival.com/",
      label: "Visit website",
    },
    visual: "browser",
    visualMeta: "janakpurliteraturefestival.com",
    image: "/work/janakpur-literature-festival-website.jpg",
    featured: true,
  },
  {
    id: "travel-janakpur",
    service: "technology",
    client: "Travel Janakpur",
    title: "Putting Janakpur travel online",
    kind: "Website development",
    summary:
      "We developed a website for Travel Janakpur to strengthen its digital presence and give its travel services an online home.",
    link: { href: "https://traveljanakpur.com/", label: "Visit website" },
    visual: "browser",
    visualMeta: "traveljanakpur.com",
    image: "/work/travel-janakpur.jpg",
    featured: true,
  },
  {
    id: "karkhana-documentary",
    service: "media",
    client: "Karkhana Samuha",
    title: "Community science education in Madhesh",
    kind: "Documentary",
    summary:
      "We produced documentary content on the Community Science Education Project in Madhesh Province, recording its activities and the experiences of the people involved.",
    link: {
      href: "https://youtu.be/cUdy-73Y4JM",
      label: "Watch documentary",
    },
    visual: "film",
    visualMeta: "cUdy-73Y4JM",
    image: "/work/karkhana-documentary.jpg",
    featured: true,
  },
  {
    id: "visual-storytelling",
    service: "media",
    client: "Video & visual storytelling",
    title: "Short-form stories for social feeds",
    kind: "Short-form video",
    summary:
      "Short videos made for the places people already watch, with the story told in the first few seconds.",
    link: {
      href: "https://web.facebook.com/reel/1482893840121772",
      label: "Watch video",
    },
    visual: "reel",
  },
  {
    id: "rju-design-training",
    service: "education",
    client: "Rajarshi Janak University",
    title: "Seven days, thirty new designers",
    kind: "Graphic design training",
    summary:
      "We ran a seven-day graphic design training for 30 bachelor’s-level students at the University Campus, Rajarshi Janak University.",
    body: "The programme introduced students to graphic design and visual communication, with practical skills learned by doing.",
    facts: [
      { value: "30", label: "students" },
      { value: "7", label: "days" },
    ],
    visual: "numbers",
    featured: true,
  },
  {
    id: "karkhana-digital-education",
    service: "education",
    client: "Karkhana Samuha",
    title: "Digital education initiative",
    kind: "Digital education",
    summary:
      "We worked with Karkhana Samuha on digital education initiatives, supporting technology-based and creative approaches to learning.",
    // TODO before publishing: add programme details and outcomes from the report PDF, and link the report.
    note: "Programme report coming soon",
    visual: "learn",
  },
  {
    id: "jlf-social",
    service: "social",
    client: "Janakpur Literature Festival",
    title: "One consistent voice across every post",
    kind: "Graphic design & social media",
    summary:
      "We provide graphic design and social media management for Janakpur Literature Festival, creating the creatives and communication materials for its sessions, announcements, speaker cards and campaigns.",
    facts: [{ value: "7 editions", label: "since 2019" }],
    link: {
      href: "https://www.facebook.com/janakpurlitfest/",
      label: "Visit Facebook page",
    },
    visual: "posts",
    featured: true,
  },
];

export type Partner = {
  name: string;
  sector: string;
  logo: string;
  tone: string;
};

export const partners: Partner[] = [
  {
    name: "Travel Janakpur",
    sector: "Tourism",
    logo: "/partners/travel-janakpur.jpg",
    tone: "sand",
  },
  {
    name: "Janakpur Literature Festival",
    sector: "Literature & culture",
    logo: "/partners/janakpur-literature-festival.png",
    tone: "sky",
  },
  {
    name: "Restless Development Nepal",
    sector: "Youth & community development",
    logo: "/partners/restless-development.png",
    tone: "lilac",
  },
  {
    name: "Karkhana Samuha",
    sector: "Education",
    logo: "/partners/karkhana-samuha.svg",
    tone: "rose",
  },
  {
    name: "Binaytara Cancer Trust",
    sector: "Healthcare",
    logo: "/partners/binaytara.png",
    tone: "mint",
  },
  {
    name: "Leo District Council 325 F, Nepal",
    sector: "Youth leadership",
    logo: "/partners/leo-325f.png",
    tone: "navy",
  },
];

export const approach = [
  {
    step: "Understand",
    text: "Every project starts with listening. We learn the idea, the people involved and what success should look like.",
  },
  {
    step: "Create",
    text: "We choose the right mix of technology and creativity, then design, build, film or teach.",
  },
  {
    step: "Communicate",
    text: "We put the work in front of the people it is meant for, in a form they will use and remember.",
  },
  {
    step: "Impact",
    text: "We look at what changed, and hand over everything your team needs to keep it going.",
  },
];

export const values = [
  {
    name: "Innovation",
    text: "We look for new ideas and better ways of solving problems.",
  },
  {
    name: "Creativity",
    text: "We meet challenges with imagination and a fresh perspective.",
  },
  {
    name: "Collaboration",
    text: "We work closely with clients, partners and communities towards shared goals.",
  },
  {
    name: "Accessibility",
    text: "Technology, education and communication should be within everyone’s reach.",
  },
  {
    name: "Impact",
    text: "We build solutions that deliver meaningful, lasting value.",
  },
];

