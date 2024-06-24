import React, { useState } from 'react';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Dashboard from './components/Dashboard';


const App = () => {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);


  return (
    <div className="flex h-screen overflow-hidden">
      <LeftSidebar isOpen={isLeftSidebarOpen} />
      <div className="flex-1 flex flex-col">
        
        <Dashboard />
      </div>
      <RightSidebar isOpen={isRightSidebarOpen} />
    </div>
  );
};

export default App;
