import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { TimelineComponent } from "@/components/TimelineComponent";



export default function Home() {
  return (
  
    // <div className="flex items-center justify-center w-full h-screen bg-black bg-grid-white/[0.1] relative"> {/* 0.1 point for light lines bg-black  bg-grid-white--lines white*/}
      // {/* Radial gradient for the container to give a faded look */}

      
     
    // </div>
    <div className="flex flex-col items-center justify-center w-full h-fit relative">
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(circle_at_top,transparent_15%,black)]"></div> */}
        <Appbar /> 
        
        <div className="flex  flex-col items-center justify-center">
          <Hero/>
          <Projects/>
          <TimelineComponent/>
          
          <Skills/>

          
          
        </div>
        <Footer/>
        
    </div>
      
  );
}
