
import ProjectCard from "./ui/projectCard"
import { BackgroundBeams } from "./ui/background-beams"
export default function Projects(){
    
    return <div className="relative  w-full bg-black py-12 pb-36 mt-28 border-dashed border-y-2 border-white">
    <div className="  w-full flex flex-col justify-center items-center">
      <h1 className="  relative z-10 text-5xl text-white mb-20">
        Projects
      </h1>
      <div className=" relative z-10 grid grid-cols-2 gap-y-10 items-center">
        <ProjectCard src="/projects/editor.png" title="Collaborative Text Editor " description="Real-time collaborative text editor using React, Quill.js, and Socket.io, featuring Markdown support, rich text formatting, and MongoDB for persistent storage." tags={["ReactJS","Socket.io","MongoDB"]}/>

        <ProjectCard src="/projects/billBuddies.jpeg" title=" Bill Buddies(Splitwise for WEB 3)" description="Decentralized bill-splitting app on Solana, integrated with HD wallets , built using Next.js for frontend/backend, and PostgreSQL for data storage." tags={["NextJS","Solana","Postgres"]}/>

        <ProjectCard src="/projects/lexer.png" title="Lexer and Tokenizer in C++" description="Developed a C++ lexer for custom language tokenization, optimizing with classes, enums, and STL containers, enhancing compiler efficiency and maintainability." tags={["C++"]}/>

        <ProjectCard src="/projects/portfolio.png" title="Portfolio Site" description="Developed a sleek, modernistic portfolio site using Next.js, Tailwind, and ShadCN. Showcases my skills and experience with an elegant design .(This Site)" tags={["Next Js","Tailwind","ShadCN"]}/>
      </div>
      <BackgroundBeams />
    </div>
    
  </div>
}