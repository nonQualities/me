// Central data repository — Ronit Choudhury Portfolio
// Idiomatic SvelteKit data module: individual modules for quick editing & unified bundle for search

export { about, education, manifesto, snapshot } from "./about.js";
export { stack } from "./stack.js";
export { projects } from "./projects.js";
export { github } from "./github.js";
export { experience } from "./experience.js";
export { reading, textbooks, textbooksNote } from "./reading.js";
export { writing } from "./writing.js";
export { contact } from "./contact.js";
export { watchlist } from "./watchlist.js";

import { about, education, manifesto, snapshot } from "./about.js";
import { stack } from "./stack.js";
import { projects } from "./projects.js";
import { github } from "./github.js";
import { experience } from "./experience.js";
import { reading, textbooks, textbooksNote } from "./reading.js";
import { writing } from "./writing.js";
import { contact } from "./contact.js";
import { watchlist } from "./watchlist.js";

export const portfolioData = {
  about,
  education,
  manifesto,
  snapshot,
  stack,
  projects,
  github,
  experience,
  reading,
  textbooksNote,
  textbooks,
  writing,
  contact,
  watchlist
};

export default portfolioData;
