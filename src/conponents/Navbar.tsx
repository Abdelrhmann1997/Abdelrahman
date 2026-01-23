import { BsDiscord, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import { useState } from "react"
import { BiX,BiMenu } from "react-icons/bi";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen ] = useState(false);
    const menuOpen = () => {
        setIsOpen(!isOpen);
    }
  return (
    <nav className="fixed top-0  flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
        <a href="#home" className="bg-linear-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">Abdelrhman</a>
        <ul className="hidden md:flex gap-10 ">
            <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 "><li>Home</li></a>
            <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 "><li>Tech</li></a>
            <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 "><li>Projects</li></a>
            <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 "><li>Contact</li></a>
        </ul>
        <ul className="hidden md:flex gap-5 ">
            <a className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-blue-500" target="_blank" href="https://www.linkedin.com/in/abdo-elrahman-mohmed-106849224/"><BsLinkedin/></a>
            <a className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-white" target="_blank" href="https://github.com/Abdelrhmann1997"><BsGithub/></a>
            <a className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 bg-linear-to-r hover:from-[#8134AF] hover:via-[#DD2A7B] hover:to-[#F58529] rounded-lg" target="_blank" href="https://www.instagram.com/abdo_elrahman_mohamed/"><BsInstagram/></a>
            <a className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-[#5865F2]" target="_blank" href="file:///D:/Python/Portfolio%20Website/discordapp.com/users/894490214578409482"><BsDiscord/></a>
        </ul>
        {isOpen ? (
            <BiX className="block md:hidden text-4xl cursor-pointer" onClick={menuOpen}/>
        ) : (
            <BiMenu className="block md:hidden text-4xl cursor-pointer " onClick={menuOpen}/>
        )}
        {isOpen && (
            <div className={`fixed right-0 top-21 flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/80 p-12 ${isOpen ? "block" : "hidden"}`}>
                <ul className="flex flex-col gap-8">
                    <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 "><li>Home</li></a>
                    <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 "><li>Tech</li></a>
                    <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 "><li>Projects</li></a>
                    <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 "><li>Contact</li></a>
                    <a href="#cv" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 "><li>Download CV</li></a>
                </ul>
                <ul className="flex flex-wrap gap-5 ">
                    <a className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-blue-500" target="_blank" href="https://www.linkedin.com/in/abdo-elrahman-mohmed-106849224/"><BsLinkedin/></a>
                    <a className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-white" target="_blank" href="https://github.com/Abdelrhmann1997"><BsGithub/></a>
                    <a className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 bg-linear-to-r hover:from-[#8134AF] hover:via-[#DD2A7B] hover:to-[#F58529] rounded-lg" target="_blank" href="https://www.instagram.com/abdo_elrahman_mohamed/"><BsInstagram/></a>
                    <a className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-[#5865F2]" target="_blank" href="file:///D:/Python/Portfolio%20Website/discordapp.com/users/894490214578409482"><BsDiscord/></a>
                </ul>
            </div>
        )}
    </nav>
  )
}

export default Navbar