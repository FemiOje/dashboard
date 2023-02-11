import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  )
}

export default App;
