import React from 'react';
import { Bell } from 'lucide-react';

const AnnouncementBar = () => {
  const text = 'Where are your customers actually searching? Download the report';
  
  return (
    <div className="w-full bg-[#9DF5D2] relative m-2 p-1 rounded-4xl">
      
        
          <a href="#report"  className="flex justify-center gap-2 px-6 text-[13px] font-small tracking-tight">
            <Bell className="w-3.5 h-3.5" />
            <span>{text}</span>
          </a>
        
      
    </div>
  );
};

export default AnnouncementBar;