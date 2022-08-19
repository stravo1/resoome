import Employment from "../components/sub-components/modal_content/Employment";
import Education from "../components/sub-components/modal_content/Education";
import Projects from "../components/sub-components/modal_content/Projects";
import Links from "../components/sub-components/modal_content/Links";
import References from "../components/sub-components/modal_content/Reference";

import {
  changeEductaion,
  changeEmployment,
  changeLanguages,
  changeProjects,
  changeReferences,
  changeSkills,
  changeURL,
} from "../store/slice";
export const otherInputs = [
  {
    title: "Employment Details",
    desc: "Jobs you have done before.",
    buttonText: "employment",
    modal: <Employment />,
    task: changeEmployment,
    source: "employment",
  },
  {
    title: "Education Details",
    desc: "Your complete education history.",
    buttonText: "education",
    modal: <Education />,
    task: changeEductaion,
    source: "education",
  },
  {
    title: "Projects",
    desc: "Any projects you have done. This can be coding projects, research papers, art samples, blogs etc.",
    buttonText: "projects",
    modal: <Projects />,
    task: changeProjects,
    source: "projects",
  },
  {
    title: "Skills",
    desc: "Skills relevant to the position you are applying to.",
    buttonText: "skills",
    task: changeSkills,
  },
  {
    title: "Website and Social Links",
    desc: "Professional websites and social media handles. Avoid links to personal accounts for family and friends.",
    buttonText: "link",
    modal: <Links />,
    task: changeURL,
    source: "links",
  },
  {
    title: "Languages",
    desc: "Languages that you can speak, write or read.",
    buttonText: "language",
    task: changeLanguages,
  },
  {
    title: "References",
    desc: "Any referrals from anyone for the position you are applying to.",
    buttonText: "reference",
    modal: <References />,
    task: changeReferences,
    source: "references",
  },
];
