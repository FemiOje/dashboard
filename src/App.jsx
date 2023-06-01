import './App.css';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app relative">
      <div className="navbar sticky top-0 z-40 w-full">
        <Navbar />
      </div>

      <div className="layout relative flex">
        <div className="sidenav h-screen md:w-1/5 md:fixed md:top-[3.5rem]">
          <Sidenav />
        </div>

        <div className="bg-slate-100 w-screen p-0 m-0 md:fixed md:overflow-y-scroll md:h-[90%] md:left-[20%] md:w-4/5 lg:w-3/5">
          <Outlet />
        </div>

        <div className="sidebar w-full md:w-1/5 md:h-full md:fixed md:right-0">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default App;
