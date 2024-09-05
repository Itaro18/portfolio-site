import { Separator } from "@radix-ui/react-separator"
import { Button } from "./ui/button"
export default function Footer(){
    return <div className="w-full flex justify-between  bg-black px-24 py-12 text-white border-t-4 border-indigo-500 ">

        <div className="">
        
            <p className="text-[50px]">Thank you for Visiting</p>
            <p>Reach out to me at - <span className="text-indigo-500 mt-8">omhagargi10@gmail.com </span></p>
            
        </div>
        <div>
            <div className="flex h-28 flex-col justify-around">
                <a className="cursor-pointer" href="https://x.com/00ommmm?t=Fz5jtYuNu1nzt85xHhqMtw&s=08" target="_blank">Twitter/X</a>
                <a className="cursor-pointer" href="https://github.com/Itaro18" target="_blank">Github</a>
                <a className="cursor-pointer" href="https://www.linkedin.com/in/om-hagargi-a97bb9289/" target="_blank">LinkedIn</a>
            </div>
            <p className="mt-12">
                Copyright © Om Hagargi 2024
            </p>
        </div>
        
    </div>
}