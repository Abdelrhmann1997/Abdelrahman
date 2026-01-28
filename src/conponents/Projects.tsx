import newsimg from "../assets/news.png"
import Dashimg from "../assets/qq1 (1).png"
import worldimg from "../assets/world (1).png"
import noteimg from "../assets/notes.png"
import gamestorimg from "../assets/qq1 (2).png"
import storimg from "../assets/qq1 (4).png"
import wather from "../assets/qq1 (3).png"
import shoplov from "../assets/Luex App - shop.png"
import { motion } from "motion/react"
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
}

const projectsData = [
  {
    image: newsimg,
    title: "Articles",
    description: "Articles is a modern news application for browsing, reading, and organizing articles with a clean, responsive, and user-friendly interface.",
    technologies: ["React","Tailwind","TypeScript"],
  },
  {
    image: worldimg,
    title: "Around the World",
    description: "Around the World is an interactive application showcasing countries, flags, and key information through a clean, responsive interface.",
    technologies: ["React","Tailwind","TypeScript"],
  },
  {
    image: Dashimg,
    title: "Dashboard",
    description: "An interactive dashboard displaying data insights, statistics, and analytics through dynamic charts and a clean, responsive interface.",
    technologies: ["HTML","CSS","JavaScript"],
  },
  {
    image: noteimg,
    title: "Kanban Board",
    description: "A Kanban task management app for organizing boards, columns, and tasks, improving productivity with a clean, responsive interface and usability.",
    technologies: ["React","Tailwind","TypeScript"],
  },
  {
    image: shoplov,
    title: "LUXE",
    description: "A modern fashion e-commerce website for clothing and shoes, featuring a clean and elegant interface, responsive design, smooth browsing experience, and well-organized product categories.",
    technologies: ["React","Tailwind","TypeScript"],
  },
  {
    image: gamestorimg,
    title: "Gaming Storer",
    description: "A gaming store platform showcasing games, accessories, and consoles with an engaging design, smooth browsing, and a responsive user experience.",
    technologies: ["HTML","CSS","JavaScript"],
  },
  {
    image: storimg,
    title: "Sports Store",
    description: "An e-commerce sports store showcasing athletic clothing and footwear with high-quality visuals, smooth navigation, and a modern, responsive shopping experience.",
    technologies: ["HTML","CSS","JavaScript"],
  },
  {
    image: wather,
    title: "Weather App",
    description: "A weather application providing real-time forecasts, temperature updates, and location-based weather insights through a clean, responsive interface.",
    technologies: ["HTML","CSS","JavaScript"],
  },
]

const ScrollReveal: React.FC<ScrollRevealProps> = ({children}) => {
  return (
    <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity: 1, y:0}}
    viewport={{once:true}}
    transition={{duration: 0.8}} >
      {children}
    </motion.div>
  )
}

interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-75"/>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>
            <div className="flex flex-wrap gap-5">
              {
                project.technologies.map((tech, index) => (
                  <span key={index} className="rounded-lg bg-black p-3">
                  {tech}
                </span>
              ) )
            }
              </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

const Projects: React.FC = () => {
  return (
    <ScrollReveal>
      <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24 ">
        <div className="text-4xl font-light text-white md:text-6xl">My Project</div>
        <div className="flex w-full max-w-250 flex-col gap-16 text-white">
          {
            projectsData.map((project, index) => (
              <ProjectCard key={index} project={project}/>
            ))
          }
        </div>
      </div>
    </ScrollReveal>
  )
}

export default Projects