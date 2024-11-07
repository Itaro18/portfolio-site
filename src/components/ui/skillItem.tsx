export default function SkillItem({src,skill}:{src:string,skill:string}){
    return <div className=" w-[200px]  flex justify-center items-center text-black text-2xl my-4 bg-white rounded-lg overflow-hidden p-1 shadow-xl shadow-indigo-500/50">
        <img src={src} className="w-2/5 h-14 text-center rounded-lg "/>
        <p className="w-3/5 mx-2">{skill} </p>
    </div>
}