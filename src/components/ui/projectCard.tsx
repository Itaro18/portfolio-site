import Image from "next/image";
import Tag from "./tag";
import { Separator } from "@radix-ui/react-separator";

export default function ProjectCard({src,title,description,tags}:{src:string,title:string,description:string,tags:string[]}){

    return <div className="z-100 w-[524px] h-[294px] mx-20 p-0.5  bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-lg ">
        <div className="h-full w-full flex flex-col  rounded-lg bg-black overflow-hidden p-4">

            {/* <Image src={src} alt="project-icon" width={410} height={312} className="h-3/5 rounded-lg "/> */}
            <div className="text-white px-2">
                <h1 className="text-3xl my-2 text-indigo-500 ">{title}</h1>
                <p className="my-4"> {description}</p>
                <div className="flex">
                    {tags.map((tag,index)=>{
                        return <Tag key={index} tag={tag}/>
                    })}
                </div>
                
            </div>
            <Separator className="w-full h-1 my-4 mx-auto  border-dashed border-t-2 border-stone-500 "/>
            <div className="text-white flex justify-center">
                <a href="#" className="hover:underline w-1/2 text-center border-dashed border-r-2 border-zinc-500 ">Live Link</a>
                <a href="#" className="hover:underline w-1/2 text-center">Github</a>
            </div>

        </div>
    </div>
}