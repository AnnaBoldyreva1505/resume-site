export default {
  name: "Anna Boldyreva",
  greeting: "Welcome!",
  buttonText: "Click me",
  hero: {
    hello: "HELLO! I'M",
    download: "Download My CV",
    typed: [
      "E-learning Developer",
      "Frontend Developer",
      "LXD Designer",
      "Instructional Designer",
    ],
  },
  menu: {
    home: "Home",
    about: "About",
    skills: "Skills",
    codeExample: "Code example",
    projects: "Projects",
    education: "Education",
    languages: "Languages",
  },
  about: {
    sectionTitle: "About Me",
    title: "About Me",
    labelName: "Name",
    labelEmail: "Email",
    labelPhone: "Phone",
    labelLocation: "Location",
    labelBirthday: "Birthday",
    labelNationality: "Nationality",
    description:
      "I have over 10 years of experience in adult education and corporate training. Since 2017, I've been developing e-learning courses, tests, interactive materials, and learning programs. I’m also a web developer, which allows me to create custom course designs and templates. I use Figma for visual layouts and UX prototypes, and I develop full-scale digital learning solutions tailored to client needs.",
  }, // ← ВАЖНО: вот здесь не хватало запятой!
  experience: {
    sectionTitle: "Work Experience",
    jobs: [
      {
        title: "E-learning Developer",
        company: "Telecom Company",
        period: "2017 — Present",
        description:
          "Creating interactive online courses, simulations, and instructional solutions for corporate learning.",
      },
      {
        title: "Frontend Developer",
        company: "Freelance",
        period: "2020 — Present",
        description:
          "Developing responsive websites and learning platforms with HTML, CSS, JS, and Astro.",
      },
      {
        title: "Instructional Designer",
        company: "L&D Agency",
        period: "2015 — 2017",
        description:
          "Designed blended learning programs and custom training solutions using Figma, Storyline, iSpring.",
      },
    ],
  },
};
