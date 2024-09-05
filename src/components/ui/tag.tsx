export default function Tag({tag}:{tag:string}){
    return <div className="px-1 md:px-2 py-1 mt-3 mx-1 md:mx-2 w-auto rounded-2xl bg-white text-black hover:bg-slate-500 cursor-pointer">
        {tag}
    </div>
}