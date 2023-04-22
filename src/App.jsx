import './App.css';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="layout relative">
        <div className="sidenav">
          <Sidenav />
        </div>

        <div className="outlet">
          <Outlet />
        </div>

        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default App;
