import { IExperience } from "./types";

const experiences: Array<IExperience> = [
  {
    company: "Chaitanya Projects",
    role: "Backend Developer",
    work: [
      "Contributed to a five-year-old ERP system by reducing technical debt and improving maintainability by 40% through targeted module cleanups",
      "Designed and stabilized a permission-based access control system, resolved legacy bugs, and implemented bulk upload features, enhancing data handling efficiency by 65%",
      "Collaborated on the vendor management module, added CSV export functionality, and accelerated delivery timelines by 50% under the mentorship of senior backend engineers"
    ],
    joining_date: "May 2025",
    ending_date: "Present"
  },
  {
    company: "Plutonic Services",
    role: "Backend Developer Intern",
    work: [
      "Implemented a campaign mail feature that triggers emails upon campaign creation, along with PDF email support, using AWS S3 integration via Boto3 in Django REST Framework",
      "Enhanced legacy code performance by optimizing query handling, leading to up to 70% faster response times on key endpoints",
      "Refactored parts of a five-year-old codebase and introduced a project board system, improving developer task clarity and productivity by 45%"
    ],
    joining_date: "January 2025",
    ending_date: "April 2025"
  }
]

export default experiences;