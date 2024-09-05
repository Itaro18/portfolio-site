export default function Hero(){
    return <div className=" w-full flex justify-center text-white mt-48 px-24">
        <div className="w-2/3">
            <h3 className="text-3xl">Hi, my name is </h3>
            <h1 className="text-[100px] text-purple-500">Om Hagargi</h1>
            <p className="text-2xl leading-10">I&apos;m a Software Developer based in Bangalore(IN), with a strong foundation in <span className="text-indigo-500 ">Web Development</span> and a passion for solving problems based on DSA . Currently, I&apos;m exploring the world of <span className="text-indigo-500">Web3</span>. In my free time, I enjoy playing/watching cricket and binging anime.</p>
        </div>
        <div className="w-1/3">
            <img src="/ferb.png"></img>
        </div>
    </div>
}