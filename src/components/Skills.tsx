import { BackgroundBeams } from "./ui/background-beams";
import SkillItem from "./ui/skillItem";

export default function Skills(){
    return <div className="relative w-full mb-4 md:mb-0 md:h-screen flex flex-col items-center bg-black bg-dot-white/[0.4]  px-12 border-dashed border-t-2 border-white mt-24">

        <h1 className="text-white text-7xl my-24"> Skills</h1>
        <div className="w-full  grid md:grid-cols-4 justify-items-center gap-12">
            <div className="flex flex-col ">
                <SkillItem skill="Typescript" src="/skills/ts.png"/> 
                <SkillItem skill="Javascript" src="/skills/js.png"/> 
                <SkillItem skill="Cpp" src="/skills/cpp.png"/> 
                {/* <SkillItem/>  */}
            </div>
            <div className="flex flex-col ">
                <SkillItem skill="ReactJS" src="/skills/react.png"/> 
                <SkillItem skill="NextJS" src="/skills/next.png"/> 
                <SkillItem skill="NodeJS" src="/skills/node.png"/> 
                
            </div>
            <div className="flex flex-col">
                <SkillItem skill="Postgresql" src="/skills/postgresql.png"/> 
                <SkillItem skill="MongoDB" src="/skills/mongo.png"/> 
                <SkillItem skill="Tailwind" src="/skills/tailwind.png"/> 
            </div>
            <div className="flex flex-col">
                <SkillItem skill="Git" src="/skills/git.png"/> 
                <SkillItem skill="Docker" src="/skills/docker.png"/> 
                {/* <SkillItem/> 
                <SkillItem/>  */}
            </div>
            
        </div>
        <BackgroundBeams/>
    </div>
}