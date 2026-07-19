export type BookEntry = { title: string; author: string; status: "Reading" | "Read" | "Next"; note: string };
export type Project = { slug: string; title: string; problem: string; tools: string[] };

export const personalPages = {
  about: { label: "About", title: "The Inner World", intro: "I'm Khoi - someone who enjoys understanding how things work, whether it is a dataset, a visual system, a book, or the way people make decisions.", items: ["Currently based in Ho Chi Minh City.", "Currently reading: Placeholder - add current title.", "Currently learning: Placeholder - add current topic.", "Current obsession: Placeholder - add a small curiosity."] },
  notes: { label: "Field Notes", title: "Small signals, kept close.", intro: "A living shelf for questions about data, design, AI and ordinary life.", items: ["Placeholder note: Add a recent observation.", "Placeholder note: Add a question still being explored.", "Placeholder note: Add a learning from building this website."] },
  movement: { label: "Movement", title: "The work no one sees.", intro: "Discipline, movement and the quiet repetitions behind a stronger practice.", items: ["Placeholder: Why boxing matters.", "Placeholder: Training rhythm and consistency.", "Placeholder: A lesson carried from movement into work."] },
  places: { label: "Places & Frames", title: "Places that stayed in the frame.", intro: "A map for photographs, trips and the moments that make a place memorable.", items: ["Placeholder destination: Add a place and short story.", "Placeholder frame: Add a photograph or image reference.", "Placeholder memory: Add the detail that remained."] },
  learning: { label: "Learning Log", title: "Learning in public, slowly.", intro: "Experiments, courses and useful failures recorded as a direction rather than a checklist.", items: ["Placeholder experiment: Add an active project.", "Placeholder course: Add a course or concept.", "Placeholder lesson: Add what did not work and why."] },
};

export const books: BookEntry[] = [
  { title: "Add current book", author: "Placeholder author", status: "Reading", note: "Personal note to be added." },
  { title: "Add a finished book", author: "Placeholder author", status: "Read", note: "Reflection to be added." },
  { title: "Add a next book", author: "Placeholder author", status: "Next", note: "Reason for choosing it to be added." },
];

export const projects: Project[] = [
  { slug: "retail-inventory", title: "Retail Inventory & Promotion Analytics", problem: "Project context and business question to be confirmed.", tools: ["SQL", "Power BI"] },
  { slug: "logistics-performance", title: "Logistics Performance Dashboard", problem: "Project context and business question to be confirmed.", tools: ["Excel", "Power BI"] },
  { slug: "research-scraping", title: "Quantitative Research & Web Scraping", problem: "Project context and business question to be confirmed.", tools: ["Python", "Data collection"] },
  { slug: "customer-churn", title: "Customer Churn Prediction", problem: "Project context and business question to be confirmed.", tools: ["Python", "Machine learning"] },
];

export const workPages = {
  profile: { label: "Profile", title: "Turning Data Into Direction.", intro: "I turn business questions into structured analysis, clear visual systems and decisions people can act on.", items: ["Data Analyst", "Ho Chi Minh City", "CV, email, LinkedIn and GitHub available from Contact."] },
  experience: { label: "Experience", title: "A record of useful questions.", intro: "A selected professional journey. Detailed records will be added when confirmed.", items: ["Placeholder record: Add company, role and dates.", "Placeholder record: Add the challenge and result.", "Placeholder record: Add a lesson carried forward."] },
  toolkit: { label: "Toolkit", title: "Instruments for seeing clearly.", intro: "Tools grouped by the work they support, not a wall of logos.", items: ["Analyze: SQL, Python, Excel", "Transform: Power Query, Pandas, Polars, PySpark", "Visualize: Power BI, Tableau, Looker Studio", "Build: React, Flask, databases", "Explore: AI agents, automation, MCP"] },
  archive: { label: "Archive", title: "Previous signals, kept in reach.", intro: "A filtered store for experiments, smaller dashboards, repositories and credentials.", items: ["Placeholder: Add an archive filter and real artifact.", "Placeholder: Add an experiment or mini tool.", "Placeholder: Add a certificate only when verified."] },
};
