import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Leonardo Vida",
  initials: "LV",
  location: "Amsterdam, the Netherlands, CET",
  locationLink: "https://www.google.com/maps/place/Amsterdam",
  about:
    "Full Stack Data Engineer biased on building products that use (a lot of) data",
  summary:
    "As a Data Engineer, I single-handedly built data platforms for enterprise clients. Recently, I led a team of 5 for ~6 months in a big corporate, successfully delivering the product we were building and aim to going back doing so in the future. Currently, I work as consultant for companies in Netherlands and I mostly use Python, HCL and TypeScript.",
  avatarUrl: "https://avatars.githubusercontent.com/u/2588282?v=4",
  personalWebsiteUrl: "https://leonardovida.com",
  contact: {
    email: "lleonardovida@gmail.com",
    tel: "+31621949806",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/leonardovida",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leonardovida/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/leonardojvida",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Utrecht University",
      degree: "M.Sc. in Computational Science: Applied Data Science; GPA: 8.1/10 (Cum laude)",
      start: "2020",
      end: "2022",
    },
    {
      school: "Maastricht University",
      degree: "B.Sc. in Economics: International Economics; GPA: 8.2/10.0",
      start: "2014",
      end: "2017",
    },
  ],
  work: [
    {
      company: "DBC",
      link: "https://databuildcompany.com",
      badges: [],
      title: "Senior Data Engineer Consultant",
      logo: [],
      start: "Dec 2023",
      end: "Present",
      description: (
        <>
          <li>For client A, deployed data platform using IaC on Azure (Databricks, dbt) to centralize data of growing number of subsidiaries</li>
          <li>For client A, created custom API wrappers to ELT across 10+ sources alongside custom libraries for pipelines and data tests</li>
          <li>For client B, developed and productionized advanced custom RAG solution over 1M+ files on Azure used by 700+ employees</li>
          <li>For client B, deployed self-hosted LLM reducing cost by 40X, trace monitoring and system telemetry (Langsmith, Azure)</li>
          <li>For client C, deployed data platform using IaC on AWS (Airbyte, Databricks and Dagster), provided infra to backend team</li>
          <li>Developed internal terraform blueprints and modules for a range of data platform solutions and client sizes</li>
          <li>Led the development of internal project for a co-pilot for recruitment, currently being tested at a partner company</li>
          <li>Mentored junior team members, led trainings and clients' workshops on the application and productionization of LLMs</li>
        </>
      ),
    },
    {
      company: "Prima assicurazioni",
      link: "https://prima.it",
      badges: ["Remote"],
      title: "Senior Data Engineer",
      logo: [],
      start: "Jun 2023",
      end: "Nov 2023",
      description: (
        <>
        <li>Supported the development of self-service data platform based on data mesh principles on AWS (dbt, Airbyte, Argo)</li>
        <li>Refactored old in-house config-driven ETL package and developed supporting libraries for self-service data platform</li>
        <li>Engineered petabyte-scale ETL processes in PySpark focusing on data quality and data pipeline efficiency</li>
        <li>Implemented agile product management, boosting efficiency and team morale</li>
        <li>Defined data product, contract and permission specifications across the company and supported team's roadmap definition</li>
        </>
      ),
    },
    {
      company: "Brenntag",
      link: "https://brenntag.com/",
      badges: [],
      title: "Senior Data Engineer",
      logo: [],
      start: "Oct 2022",
      end: "May 2023",
      description: (
        <>
        <li>Led core Data Engineering team with a total of 6 developers in newly created Data department</li>
        <li>Architected and developed AWS-native data platform with focus on security and data quality (Glue, Iceberg, MWAA)</li>
        <li>Developed all core pipelines for EMEA and NA subsidiaries and main libraries for data processing and quality monitoring</li>
        <li>Deployed SLAs monitoring for critical data sets, ensuring high data availability and integrity</li>
        <li>Managed team planning and rituals, and translated business needs into technical requirements prioritizing them</li>
        </>
      ),
    },
    {
      company: "Beerwulf / Heineken",
      link: "https://www.beerwulf.com",
      badges: [],
      title: "Data Engineer",
      logo: [],
      start: "Aug 2021",
      end: "Sep 2022",
      description: (
        <>
          <li>Transitioned all core ETL pipelines from batch to micro-batch structured streaming and then DLT on Databricks</li>
          <li>Refactored and enhanced data observability library and introduced automated data tests across all medallion layers</li>
          <li>Deployed MLOps platform on MLFlow and integrated into data infrastructure new B2B2C marketplace and D2C product</li>
          <li>Created ML models to forecast churn, LTV and predict demand, improving demand forecasting accuracy by 40\%</li>
        </>
      ),
    },
    {
      company: "Utrecht University",
      link: "https://www.uu.nl",
      badges: [],
      title: "Research Engineer",
      logo: [],
      start: "Aug 2020",
      end: "Jul 2021",
      description: (
        <>
          <li>Led research project engineering, fine-tuned transformer models with \$100k+ GCP grant</li>
          <li>Developed custom pipeline to extract entire collection of the Dutch national library, process, OCR and score texts</li>
          <li>Developed back-end security of OSS to automate systematic reviews (<a href="https://github.com/asreview/asreview">asreview</a>), with more than 150,000 downloads on PyPi</li>
          <li>Developed OSS spatial data package (<a href="https://github.com/sodascience/osmenrich">osmenrich</a>) in R for sensitive data enrichment</li>
        </>
      ),
    },
  ],
  skills: [
    "Python",
    "TypeScript",
    "Next.js",
    "SQL",
    "Terraform HCL/Docker/Kubernetes",
    "GraphQL",
    "R",
    "Langchain, llamaindex, open source LLMs"
  ],
  projects: [
    {
      title: "Talent Copilot",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Python",
        "FastAPI",
        "Openrouter",
        "LLM", 
      ],
      description: "A LLM-based autopilot for companies to improve the time to best talent for a given position. It uses a custom LLM pipeline to understand the job description, resume and company, and then it scores candidates, write rejection/ confirmation emails and much more, all under human supervision.",
      logo: [],
      link: {
        label: "talentcopilot",
        href: "https://dbc-cv-copilot.vercel.app/",
      },
    },
    {
      title: "Nearit",
      techStack: [
        "Side Project",
        "Python",
        "Webflow",
        "GMaps API"
      ],
      description: "A website to find list of places to visit in a city, recommended by locals, to be used directly in Google Maps",
      logo: [],
      link: {
        label: "nearit.io",
        href: "",
      },
    },
    {
      title: "Younico",
      techStack: [
        "Side Project",
        "React",
      ],
      description: "A university platform to match students with an idea with other students that want to work on a project.",
      logo: [],
      link: {
        label: "younico",
        href: "",
      },
    },
  ],
} as const;
