import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineComponent() {
  const data = [
    {
      title: "Jul 2024-Present ",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
            Enginner 1 ,Western Digital(Sandisk),Banglore (IN)
          </p>
          <div className="text-white text-lg grid  gap-4">
            <p>- Designed and built the frontend and backend of an internal site for automated testing, entirely from scratch.</p>
            <p>-  Tested critical storage device modules, adapting swiftly to frequent changes to ensure reliable functionality</p>
            {/* <p>- Tasksdfadaldkhalhlkasddhshl</p> */}
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2024-Jun 2024",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
            Intern ,Western Digital(Sandisk),Banglore (IN)
          </p>
          <div className="text-white text-lg grid  gap-4">
            <p>- Proactively transitioned the company’s codebase from Python 2.7 to Python 3.8 in response to a previous data breach, selecting and utilizing conversion tools like Modernize and YAPF to streamline the migration, enhance security, and ensure compatibility while minimizing manual effort
            to 3 weeks from 2 months which is a 63% reduction in work hours</p>
            <p>- By utilizing Modernize and YAPF tools, it reduced the estimated time required for the transition from approximately 2 months(when done  manually) to just 3 weeks, resulting in an 63\% reduction in work hours for the conversion proces</p>
            {/* <p>- Tasksdfadaldkhalhlkasddhshl</p> */}
          </div>
        </div>
      ),
    },
    {
      title: "2020-2024",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
            Bachelor&apos;s in E&C,Shri Jayachamrajendra College of Engineering ,Mysuru
          </p>
          <div className="text-white text-lg grid  gap-4">
            <p>- Explored Various Technologies </p>
            <p>- Technical Lead,Programming Community ,SJCE</p>
            <p>- Conducted &quot; Har Din DSA &quot; where new DSA questions were posted every day and various approaches were discussed.</p> 
            <p>- Organized 10+ online and offline events to enhance the coding culture at the college.</p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full ">
      
      <Timeline data={data} />
    </div>
  );
}
