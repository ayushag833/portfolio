import { IProject } from "./types"
import agayu from "@/assets/projectImages/agayu.png"
import crazy from "@/assets/projectImages/crazy.png"
import filmi from "@/assets/projectImages/filmi.png"
import recipe from "@/assets/projectImages/recipe.png"
import store from "@/assets/projectImages/store.png"
import blog from "@/assets/projectImages/blog.png";

const projects: Array<IProject> = [
  {
    title: "Agayu",
    description: "Student-focused, feature-rich, zero-code platform to learn, revise and test concepts interactively across core technical subjects. Frontend - React, Backend - Nodejs, Database - MongoDB",
    thumbnail: agayu,
    githubLink: "https://github.com/ayushag833/AGAYU"
  },
  {
    title: "Crazy Typewriter",
    description: "AI-powered, intuitive, no-code tool to convert voice recordings into structured and publish-ready blog posts within seconds. Frontend - Nextjs, Backend - Nextjs, Database - NeonDB, Auth - Clerk",
    thumbnail: crazy,
    githubLink: "https://github.com/ayushag833/Crazy-TypeWriter"
  },
  {
    title: "The Convenience Store",
    description: "Simple, responsive, user-friendly storefront to explore, add and purchase daily essentials with a real-time cart and checkout flow. Frontend - React, Backend - Nodejs, Database - MongoDB",
    thumbnail: store,
    githubLink: "https://github.com/ayushag833/The-Convenience-Store"
  },
  {
    title: "Filmi Flex",
    description: "Clean, searchable, detail-oriented catalog to view ratings, cast, genre, and summaries of movies and web series in one place. Coded this project using React and TMDB API for movie data",
    thumbnail: filmi,
    githubLink: "https://github.com/ayushag833/Filmi-Flex"
  },
  {
    title: "iBlog",
    description: "Straightforward, minimal blogging platform to create, browse and comment on posts without any setup or coding knowledge. Frontend - EJS, Backend - Nodejs, Database - MongoDB",
    thumbnail: blog,
    githubLink: "https://github.com/ayushag833/iBlog"
  },
  {
    title: "Recipe App",
    description: "Instant-access, visually guided interface to find detailed recipes and watch related YouTube videos for step-by-step cooking support. Coded this project using HTML, CSS, JavaScript and MealDB API for recipes data",
    thumbnail: recipe,
    githubLink: "https://github.com/ayushag833/Recipe-App"
  }
]

export default projects