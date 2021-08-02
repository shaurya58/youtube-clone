import { useState } from 'react';
import Sidebar from './components/Sidebar';
import PrimaryHeader from './components/PrimaryHeader';
import Home from './components/Home';
import VideoView from './components/VideoView';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebarState = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="App">
      <PrimaryHeader onMenuBtnClick={toggleSidebarState} />
      <Sidebar open={isSidebarOpen} onMenuBtnClick={toggleSidebarState} />
      <div className={`content${isSidebarOpen ? ' contentShift' : ''}`}>
        {/* <Home /> */}
        <VideoView />
      </div>
    </div>
  );
}

export default App;
