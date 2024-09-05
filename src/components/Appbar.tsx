import { Button } from "./ui/button";


export default function Appbar(){
    return <div className="w-2/5  flex justify-between  bg-black bg-opacity-90 px-3 py-2  rounded-3xl my-10 fixed top-0 z-50 text-white border border-zinc-800">
        <div className="flex justify-center  items-center">
            <img src="/o.png" className=" rounded-3xl w-9" alt="logo"/>
            <a className="px-4 cursor-pointer  text-lg" >Om </a>
        </div>
        <div className="flex justify-center  items-center">
            <a className="cursor-pointer hover:underline px-4 hover:text-zinc-600 " href="https://x.com/00ommmm?t=Fz5jtYuNu1nzt85xHhqMtw&s=08" target="_blank"> Twitter/X</a>
            <a className="cursor-pointer hover:underline px-4 hover:text-zinc-600"  href="https://www.linkedin.com/in/om-hagargi-a97bb9289/" target="_blank"> LinkedIn</a>
            <a href="https://github.com/Itaro18" target="_blank"><Button  className="px-6 rounded-3xl  text-black bg-white hover:bg-zinc-600 ">Github</Button></a>
        </div>
    </div>
}