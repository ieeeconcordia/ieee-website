import React, { useState } from "react";
import { Member } from "@/components/cards/Member";

  export const Tab = ({ members }: any) => {
      const tabs = ['Chair', 'Academics', 'IT', 'Competitions', 'Development', 'External', 'Internal', 'Finance', 'Community', 'Lab Services', 'Projects', 'Marketing', 'Notion', 'Advisor'];
      const [activeTab, setActiveTab] = useState(tabs[0]);
      const [startIndex, setStartIndex] = useState(0);
    
      const handleTabClick = (tab: string) => {
        setActiveTab(tab);
      };
    
      const handleNext = () => {
        if (startIndex + 5 < tabs.length) {
          setStartIndex(startIndex + 5);
        }
      };
    
      const handlePrev = () => {
        if (startIndex - 5 >= 0) {
          setStartIndex(startIndex - 5);
        }
      };

      
    const getMembersForTab = (tab: string) => {
      if (!members) return [];
      switch (tab) {
        case "Chair":
          return members.filter((member: any) => member.teams.includes("Chair"));
        case "Academics":
          return members.filter((member: any) => member.teams.includes("Academics"));
        case "Community":
          return members.filter((member: any) => member.teams.includes("Community"));
        case "Competitions":
          return members.filter((member: any) => member.teams.includes("Competitions"));
        case "Development":
          return members.filter((member: any) => member.teams.includes("Development"));
        case "External":
          return members.filter((member: any) => member.teams.includes("External"));
        case "Internal":
          return members.filter((member: any) => member.teams.includes("Internal"));
        case "Finance":
          return members.filter((member: any) => member.teams.includes("Finance"));
        case "IT":
          return members.filter((member: any) => member.teams.includes("IT"));
        case "Lab Services":
          return members.filter((member: any) => member.teams.includes("Lab Services"));
        case "Projects":
          return members.filter((member: any) => member.teams.includes("Projects"));
        case "Marketing":
          return members.filter((member: any) => member.teams.includes("Marketing"));
        case "Notion":
          return members.filter((member: any) => member.teams.includes("Notion"));
        case "Advisor":
          return members.filter((member: any) => member.teams.includes("Advisor"));  
          

        default:
          return [];
      }
    };


    return (
      <div>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-4">
          <div className="flex justify-between items-center">
            <button onClick={handlePrev} disabled={startIndex === 0} className="p-2">
              &lt;
            </button>
            <ul className="flex overflow-hidden">
              {tabs.slice(startIndex, startIndex + 5).map((tab) => (
                <li className="me-2" key={tab}>
                  <a
                    href="#"
                    className={`inline-block p-4 border-b-2 rounded-t-lg ${
                      activeTab === tab
                        ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                        : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    }`}
                    onClick={() => handleTabClick(tab)}
                    aria-current={activeTab === tab ? "page" : undefined}
                  >
                    {tab}
                  </a>
                </li>
              ))}
            </ul>
            <button onClick={handleNext} disabled={startIndex + 5 >= tabs.length} className="p-2">
              &gt;
            </button>
          </div>
        </div>
        <div className="w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-4 sm:gap-10">
          {getMembersForTab(activeTab).map((member: any) => (
            <Member key={member.id} {...member} />
          ))}
        </div>
      </div>
    );
  };