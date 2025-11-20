import meta from "/images/meta.jpg";
import kpcss from "/images/kp_css.jpeg";
import udemy from "/images/udemy.jpg";
import oracle from "/logo/oracle.png";
import sql from "/logo/sql.png";
import xml from "/logo/xml.png";
import firebase from "/logo/firebase.png";
import android from "/logo/android.png";
import github from "/logo/github.png";
import php from "/logo/php.png";
import html from "/logo/html.png";
import css from "/logo/css.png";
import js from "/logo/js.png";

export const socialMediaLinks = [
  {
    linkName: "LinkedIn",
    linkURL: "https://www.linkedin.com/in/yokeshbaskaran/",
  },
  {
    linkName: "GitHub",
    linkURL: " https://github.com/yokeshbaskaran ",
  },
];

export const navLinks = [
  { linkName: "Home", linkURL: "" },
  { linkName: "Education", linkURL: "education" },
  { linkName: "Projects", linkURL: "projects" },
  { linkName: "Experience", linkURL: "experience" },
  { linkName: "Contact", linkURL: "contact" },
];

export const coursesList = [
  {
    courseName: "react",
    courseImg: meta,
    certifyURL:
      "https://www.coursera.org/account/accomplishments/verify/MQBQSPBAJCA9",
    courseDes: "React Basics by META in Coursera",
  },
  {
    courseName: "JavaScript",
    courseImg: meta,
    certifyURL:
      "https://www.coursera.org/account/accomplishments/verify/9FG9NXS7SGH6",
    courseDes: " Programming with JavaScript ",
  },
  {
    courseName: "Git-Github",
    courseImg: meta,
    certifyURL:
      "https://www.coursera.org/account/accomplishments/verify/YDZUNDX5HXJC",
    courseDes: " Version Control - Git & Github ",
  },
  {
    courseName: "MySQL",
    courseImg: meta,
    certifyURL:
      "https://www.coursera.org/account/accomplishments/verify/MHXHMUJE2F4R",
    courseDes: "Database Structures and Management with MySQL ",
  },
  {
    courseName: "Front-End Web Dev",
    courseImg: udemy,
    certifyURL:
      "https://www.udemy.com/certificate/UC-9d391b8d-64f8-4729-9ad2-f23332e20ca6/",
    courseDes: "Front-End Web Development using HTML,CSS & JS",
  },
  {
    courseName: "CSS concepts",
    courseImg: kpcss,
    certifyURL: kpcss,
    courseDes: "Conquering Responsive Layouts using CSS",
  },
];

export const experData = [
  {
    roleName: "PeopleSoft Intern",
    duration: "MAY 2023 - AUG 2023",
    companyName: "Kovaion Consulting",
    companyLocation: "Coimbatore, India",
    workType: "On-site",
    workDescription: [
      "Collaborated with my team using Peoplesoft Tools, achieving a 55% completion rate on a project.",
      "Contributed to developing a robust system for tracking sales and expenses, achieving a remarkable accuracy rate of 95% in monitoring sales.",
    ],
    techStacks: [
      { stackName: "SQL", stackImage: sql },
      { stackName: "PeopleSoft(Oracle)", stackImage: oracle },
    ],
  },
  {
    roleName: "Android Developer",
    duration: " Feb 2023 - May 2023  ",
    companyName: " Codewents",
    companyLocation: " Coimbatore, Tamil Nadu ",
    workType: "On-site",
    workDescription: [
      " Developed front-page layouts, with approximately 80% of the focus on design and 20% on user input, user experience and improvements.   ",
      " Integrated Firebase to synchronize data, achieving a 90% accuracy rate. ",
    ],
    techStacks: [
      { stackName: " XML ", stackImage: xml },
      { stackName: " Firebase ", stackImage: firebase },
      { stackName: "Android Studio", stackImage: android },
      { stackName: " GitHub ", stackImage: github },
    ],
  },
  {
    roleName: "Back-end developer",
    duration: "Jul 2021 - Sep 2021 ",
    companyName: "Tech Exordium	",
    companyLocation: " New Delhi",
    workType: " Remote",
    workDescription: [
      "Managed database operations and server-side functionality using PHP and MySQL.  ",
      " Successfully handled database management, order processing, and user authentication, achieving a 40% completion rate.",
    ],
    techStacks: [
      { stackName: " MySQL ", stackImage: sql },
      { stackName: " PHP ", stackImage: php },
      { stackName: " JS ", stackImage: js },
      { stackName: " HTML ", stackImage: html },
      { stackName: " CSS ", stackImage: css },
    ],
  },
];

// {
//   roleName: "dfd",
//   duration: " fgfg ",
//   companyName: " fgfg",
//   companyLocation: " fbghg ",
//   workType: " dv",
//   workDescription: [" gffg ", " fgfg  "],
//   techStacks: [
//     { stackName: " fg ", stackImage: sql },
//     { stackName: " ffg ", stackImage: oracle },
//   ],
// },
