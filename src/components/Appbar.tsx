import { Button } from "./ui/button";


export default function Appbar(){
    return <div className=" w-4/5 md:max-w-90 md:w-2/5  flex flex-col md:flex-row justify-center md:justify-between  bg-black bg-opacity-90 md:px-3 md:py-2  rounded-3xl mb-0 mt-5 md:my-10 md:fixed top-0 z-50 text-white border border-zinc-800">
        <div className="flex justify-center  items-center">
            <img src="/o.png" className=" rounded-3xl w-0 md:w-9" alt="logo"/>
            <a className="px-4 cursor-pointer  text-lg my-5 md:my-0  " >Om </a>
        </div>
        <div className="flex  flex-col md:flex-row justify-center  items-center ">
            <a className="cursor-pointer hover:underline md:px-4 my-5 md:my-0 hover:text-zinc-600 " href="https://x.com/00ommmm?t=Fz5jtYuNu1nzt85xHhqMtw&s=08" target="_blank"> Twitter/X</a>
            <a className="cursor-pointer hover:underline md:px-4 my-5 md:my-0  hover:text-zinc-600"  href="https://www.linkedin.com/in/om-hagargi-a97bb9289/" target="_blank"> LinkedIn</a>
            <a href="https://github.com/Itaro18" target="_blank"><Button  className="px-6 rounded-3xl  my-5 md:my-0  text-black bg-white hover:bg-zinc-600 ">Github</Button></a>
        </div>
    </div>
}