import React, { useState,useEffect } from "react";
import { Member } from "@/components/cards/Member";

  export const Tab = ({ members }: any) => {
      const tabs = ['Chair', 'Academics', 'IT', 'Competitions', 'Development', 'External', 'Internal', 'Finance', 'Community', 'Lab Services', 'Projects', 'Marketing', 'Notion', 'Advisor'];
      const [activeTab, setActiveTab] = useState(tabs[0]);
      const [startIndex, setStartIndex] = useState(0);
      const [tabsToShow, setTabsToShow] = useState(3);
      const [filteredMembers, setFilteredMembers] = useState<any[]>([]);

      useEffect(() => {
        const updateTabsToShow = () => {
          if (window.innerWidth >= 1024) {
            setTabsToShow(7);
          } else if (window.innerWidth >= 768) {
            setTabsToShow(5);
          } else {
            setTabsToShow(2);
          }
        };
        updateTabsToShow();
        window.addEventListener('resize', updateTabsToShow);
    
        return () => {
          window.removeEventListener('resize', updateTabsToShow);
        };
      }, []);

      useEffect(() => {
        if (members) {
          setFilteredMembers(getMembersForTab(activeTab));
        }
      }, [members, activeTab]);
      
      const handleTabClick = (tab: string) => {
        setActiveTab(tab);
      };
    
      const handleNext = () => {
        if (window.innerWidth >= 1024) {
          if (startIndex + tabsToShow < tabs.length) {
            setStartIndex(startIndex + 7);
          }
        } else if (window.innerWidth >= 768) {
          if (startIndex + tabsToShow < tabs.length) {
            setStartIndex(startIndex + 5);
          }
        } else if (startIndex + tabsToShow < tabs.length) {
            setStartIndex(startIndex + 2 );
          }
      };
    
      const handlePrev = () => {
        if (window.innerWidth >= 1024) {
          if (startIndex >= 0) {
            setStartIndex(startIndex - 7);
          }
        } else if (window.innerWidth >= 768) {
          if (startIndex >= 0) {
            setStartIndex(startIndex - 5);
          }
        } else if (startIndex >= 0) {
            setStartIndex(startIndex - 2);
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
        <div className="text-base font-medium text-center border-b border-blue-200 dark:text-blue-400 dark:border-blue-700 mb-4">
          <div className="flex justify-between items-center">
            <button onClick={handlePrev} disabled={startIndex === 0} className="p-2 text-xl hover:text-blue-600 hover:border-blue-300 dark:hover:text-blue-300">
              &lt;-
            </button>
            <ul className="flex overflow-hidden text-gray-500">
              {tabs.slice(startIndex, startIndex + tabsToShow).map((tab, index) => (
                <li className="me-2" key={index}>
                  <button
                    className={`inline-block p-4 border-b-2 rounded-t-lg ${
                      activeTab === tab
                        ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                        : "border-transparent hover:text-blue-600 hover:border-blue-300 dark:hover:text-blue-300"
                    }`}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={handleNext} disabled={startIndex + tabsToShow >= tabs.length} className="p-2 text-xl hover:text-blue-600 hover:border-blue-300 dark:hover:text-blue-300">
              -&gt;
            </button>
          </div>
        </div>
        <div className="w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-4 sm:gap-10">
          {filteredMembers.map((member: any) => (
            <Member key={member.id} {...member} />
          ))}
        </div>
      </div>
    );
  }      

//     return (
//       <div>
//         <div className="text-base font-medium text-center border-b border-blue-200 dark:text-blue-400 dark:border-blue-700 mb-4">
//           <div className="flex justify-between items-center">
//             <button onClick={handlePrev} disabled={startIndex === 0} className="p-2 text-xl hover:text-blue-600 hover:border-blue-300 dark:hover:text-blue-300">
//               &lt;
//             </button>
//             <ul className="flex overflow-hidden text-gray-500  ">
//               {tabs.slice(startIndex, startIndex + 5).map((tab) => (
//                 <li className="me-2" key={tab}>
//                   <a
//                     href="#"
//                     className={`inline-block p-4 border-b-2 rounded-t-lg ${
//                       activeTab === tab
//                         ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
//                         : "border-transparent hover:text-blue-600 hover:border-blue-300 dark:hover:text-blue-300"
//                     }`}
//                     onClick={() => handleTabClick(tab)}
//                     aria-current={activeTab === tab ? "page" : undefined}
//                   >
//                     {tab}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//             <button onClick={handleNext} disabled={startIndex + 5 >= tabs.length} className="p-2  text-xl hover:text-gray-600 hover:border-blue-300 dark:hover:text-blue-300">
//               &gt;
//             </button>
//           </div>
//         </div>
//         <div className="w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-4 sm:gap-10">
//           {getMembersForTab(activeTab).map((member: any) => (
//             <Member key={member.id} {...member} />
//           ))}
//         </div>
//       </div>
//     );
//   };