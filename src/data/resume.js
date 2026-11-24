// All portfolio content lives here, separate from the UI.
// Pages and components receive this data and render it, so you can update
// your résumé content without touching any JSX.

export const profile = {
  name: "Dinesh Chennu",
  title: "Full Stack Developer",
  location: "Chennai, India",
  email: "dineshc0503@gmail.com",
  phone: "+91 7448541572",
  linkedin: "https://linkedin.com/in/dinesh-chennu-7313571a8",
  yearsOfExperience: "2.5+",
  summary:
    "Experienced Software Programmer with 2.5+ years of experience building and maintaining scalable web applications. Skilled in front-end and back-end development, focused on delivering high-quality, user-friendly solutions and solving complex problems using modern technologies.",
};

// Shown on the receipt in the hero. Each line points at a group in `skills` below.
export const receiptLines = [
  { label: "Frontend", value: "React, Vue.js, jQuery" },
  { label: "Backend", value: "Laravel, Symfony, PHP" },
  { label: "Commerce", value: "Shopify, WooCommerce" },
  { label: "Database", value: "MySQL" },
  { label: "Cloud", value: "AWS, Docker" },
];

export const skills = [
  {
    category: "Frontend Development",
    items: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "Vue.js", "React"],
  },
  {
    category: "Backend Development & Frameworks",
    items: [
      "Core PHP",
      "Symfony",
      "Laravel",
      "REST APIs",
      "MVC",
      "Microservices",
      "DDD",
      "SOLID Principles",
      "Clean Architecture",
    ],
  },
  {
    category: "Database",
    items: ["MySQL (Schema Design, Query Optimization)", "Eloquent ORM"],
  },
  {
    category: "CMS & E-commerce",
    items: [
      "WordPress",
      "Squarespace",
      "WooCommerce",
      "Shopify",
      "Shopware",
      "OroCommerce",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (Basic: EC2, S3, CodeCommit)", "Docker"],
  },
  {
    category: "Version Control & Collaboration",
    items: ["Git", "Bitbucket", "Jira", "CLI", "Agile"],
  },
  {
    category: "Tools & Utilities",
    items: [
      "PhpStorm",
      "Visual Studio Code",
      "Postman",
      "Chrome DevTools",
      "XAMPP",
      "cPanel",
    ],
  },
  {
    category: "Additional Technical Skills",
    items: [
      "API Integration",
      "Performance Optimization",
      "Debugging",
      "Cross-Browser Compatibility",
      "Deployment Support",
      "n8n",
    ],
  },
];

export const experience = [
  {
    id: "softsolutions4u",
    role: "Software Programmer",
    company: "SOFTSOLUTIONS4U",
    location: "Chennai, India",
    period: "04/2024 – 11/2026",
    highlights: [
      "Full Stack Web Developer with over 2.5+ years of experience in developing interactive web applications using PHP, VueJs, and MySQL.",
      "Strong expertise in backend development with Core PHP, Laravel, and WordPress, following MVC architecture.",
      "Proficient in creating responsive, cross-browser front-end interfaces using HTML5, CSS, jQuery, and basic JavaScript, with hands-on experience in VueJs.",
      "Skilled in integrating RESTful APIs and building scalable, maintainable application architectures.",
      "Collaborate effectively with UI/UX teams to design and implement user-friendly, cross-platform web interfaces.",
      "Familiar with version control tools like Git and Bitbucket, and have experience working in Dockerized and AWS-hosted environments.",
      "Capable of handling system maintenance, user feedback, and routine checkups to ensure seamless website functionality.",
      "Adept at managing multiple projects simultaneously, ensuring timely delivery without compromising code quality.",
    ],
  },
];

export const projects = [
  {
    id: "viviapp",
    name: "Viviapp",
    stack: ["Laravel", "MySQL", "React"],
    summary: "Billing, CRM, production and marketing system for ViviKola, Switzerland.",
    description:
      "Viviapp is a backend application used by ViviKola in Switzerland to manage the Billing, CRM, Production, and Marketing systems of the company.",
    highlights: [
      "Viviapp Billing Management System: Developed and maintained the Billing Management module of Viviapp, allowing seamless tracking and processing of invoices, payments, and financial transactions.",
      "Viviapp CRM Integration: Collaborated with the sales team to design and implement a user-friendly CRM interface to facilitate customer engagement and sales pipeline management.",
      "Viviapp Production Control System: Implemented data visualization tools to provide production insights and optimize resource allocation, resulting in enhanced productivity and reduced operational costs.",
      "Regularly performed system maintenance, bug fixes, and security updates to ensure the smooth and secure functioning of Viviapp.",
      "Contributed to continuous improvement initiatives, implementing new features and enhancements based on user feedback and evolving business requirements.",
    ],
  },
  {
    id: "payrexx",
    name: "Payrexx",
    stack: ["PHP", "React", "Vue.js", "jQuery"],
    summary: "Payment platform: hotfixes, PSP integrations, refactoring and optimization.",
    description:
      "Work on a payment platform covering critical fixes, service-based refactoring, payment service provider integrations, dependency upkeep, localization and backend optimization.",
    highlights: [
      "Bug Fixing and Hotfixes: Delivered critical bug fixes and hotfixes across application modules, ensuring system stability and minimizing production downtime.",
      "Code Refactoring: Refactored user handling by migrating functionalities to a service-based architecture, enhancing modularity and code maintainability.",
      "Payment Service Provider (PSP) Integrations: Troubleshot and resolved PSP-related issues, ensuring seamless merchant payment processing. Integrated APIs for various PSPs, expanding payment options.",
      "Package and Dependency Updates: Managed updates and maintained critical package dependencies, including Monolog, ensuring the system remained up-to-date with industry standards.",
      "Localization and Multisite Support: Resolved language-related bugs in multisite setups, improving platform-wide localization and ensuring consistency across regions.",
      "Backend Optimization: Optimized database queries and improved API response times, resulting in enhanced performance and reduced latency.",
    ],
  },
  {
    id: "wordpress-squarespace",
    name: "Web Development (WordPress & Squarespace)",
    stack: ["WordPress", "Squarespace"],
    summary: "Custom themes, plugins and GDPR consent setup for client websites.",
    description:
      "Responsive WordPress and Squarespace websites, built and maintained to client requirements, with custom themes, plugins and privacy-compliant tracking.",
    highlights: [
      "Developed responsive WordPress and Squarespace websites tailored to client requirements.",
      "Built custom WordPress themes and customized existing themes.",
      "Developed and integrated custom and third-party WordPress plugins.",
      "Customized Squarespace websites using HTML, CSS, JavaScript, and Code Injection.",
      "Implemented Google Consent Mode v2 (GDPR) using YesCookie and Google Tag Manager.",
      "Optimized website performance, SEO, and cross-device responsiveness.",
      "Maintained websites by resolving bugs, implementing enhancements, and ensuring smooth performance.",
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce Development",
    stack: ["Shopify", "WooCommerce"],
    summary: "Checkout, shipping, payment and inventory features for online stores.",
    description:
      "Custom WooCommerce and Shopify functionality, integrations and performance work for online stores.",
    highlights: [
      "Built custom WooCommerce functionality, including checkout customization, shipping methods, payment gateway integration, and product management.",
      "Integrated third-party applications and REST APIs to extend e-commerce functionality.",
      "Developed features for inventory management, order processing, and customer management.",
      "Optimized e-commerce websites for performance, security, SEO, and responsiveness.",
      "Improved user experience by implementing responsive UI components across desktop, tablet, and mobile devices.",
    ],
  },
];

export const education = [
  {
    id: "be-mech",
    degree: "Bachelor of Engineering, Mechanical Engineering",
    school: "Chennai Institute of Technology",
    location: "Chennai, India",
    period: "08/2016 – 04/2020",
    grade: "CGPA: 7.8",
  },
];
