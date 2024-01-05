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
      description:
        "For a large group in the SME accounting sector, developed the digital transformation strategy with a focus on LLM use cases, managing the relationship with c-level and leading the development of a data platform to enable core and moonshot use cases. Technologies: Python, TypeScript, HCL",
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
          <li>
            Architected and supported the development of a self-service 
            data platform based on data mesh principles on AWS, orchestrated 
            by Argo workflows, using Airbyte for ingestion, and Databricks plus 
            dbt for compute and transformation. 
          </li>
          <li>
            Developed and optimized batch and 
            streaming PySpark ETL pipelines, frameworks and libraries (Python and Rust). 
          </li>
          <li>
            Defined data product, contract and permission specifications across the company 
            and supported roadmap definition.
          </li>
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
          <li>
            Led a team of five in architecting and developing a data platform
            using AWS native services and Airflow; managed the team
            quarterly plannings and led all the rituals.
          </li>
          <li>
            Orchestrated PySpark data pipelines to connect all subsidiaries
            in EMEA and North America and produce source-oriented foundational
            Data Products to feed machine learning use cases.
          </li>
          <li>
            Spearheaded development of Python libraries for data processing, 
            data quality monitoring, and logging (streaming and batch) and 
            supported the transition to a new global AWS organization 
            designing company-wide frameworks for all Data Products.
          </li>
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
          <li>
            Transitioned core data pipelines in Azure (Databricks and ADF)
            from batch to real-time streaming (Kafka and Debezium);
            enhanced data observability library and introduced 
            automated data tests.
          </li>
          <li>
            Architected and deployed an MLOps platform on MLFlow and 
            created ML models to forecast churn, LTV and predict demand; 
            improved demand forecasting accuracy by approximately 40%.
          </li>
          <li>
            Integrated into the existing data infrastructure a new B2B2C 
            marketplace and direct-to-consumer product, developing
          </li>
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
          <li>
          Led the engineering of a research project, finetuned transformers models 
          with €100k GCP grant and created historicized models, created API to extract 
          the entire Delpher collection of the Dutch national library, developed 
          ETL pipelines to extract, OCR, chunk and score texts.
          </li>
          <li>
          Developed back-end security of OSS to automate systematic reviews (asreview)
          having more than 140,000 downloads on PyPi and OSS spatial data 
          package (osmenrich) for sensitive data enrichment.
          </li>
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
  ],
  projects: [
    {
      title: "Talent Copilot",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Python",
        "OpenAI",
        "Custom LLM", 
      ],
      description: "A copilot for companies to improve the time to best talent for a given position. It uses a LLM pipeline to understand the job description, resume and company, and then it scores candidates, write rejection/ confirmation emails and much more, all under human supervision.",
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
