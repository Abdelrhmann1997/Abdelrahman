import { motion } from "motion/react"
import { 
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoReact, 
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoPython,
  BiLogoBootstrap} from "react-icons/bi";
const Tech: React.FC = () => {
  const variants = {
    hidden: { opacity:0, y:50},
    visible: {opacity:1, y:0}
  }
  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      <motion.h1 
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration: 0.5, delay:0.2 }}
      className="text-4xl font-light text-white md:text-6xl">Technologies</motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5 ">
        <motion.div 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5, delay:0.2 }}>
        <BiLogoTypescript className="cursor-pointer text-[80px] text-[#3178C6] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5, delay:0.2 }}>
        <BiLogoJavascript className="cursor-pointer text-[80px] text-[#F7DF1E] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5, delay:0.2 }}>
        <BiLogoTailwindCss className="cursor-pointer text-[80px] text-[#3178C6] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5, delay:0.2 }}>
        <BiLogoReact className="cursor-pointer text-[80px] text-[#61DAFB] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5, delay:0.2 }}>
        <BiLogoHtml5 className="cursor-pointer text-[80px] text-[#E34F26] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5, delay:0.2 }}>
        <BiLogoCss3 className="cursor-pointer text-[80px] text-[#1572B6] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5, delay:0.2 }}>
        <BiLogoPython className="cursor-pointer text-[80px] text-[#3776AB] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5, delay:0.2 }}>
          <BiLogoBootstrap className="cursor-pointer text-[80px] text-[#7952B3] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
      </div>
    </div>
  )
}

export default Tech;