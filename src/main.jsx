import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Insights from './routes/Insights';
import Messages from './routes/Messages';
import Favorites from './routes/Favorites';
import Explore from './routes/Explore';
import Marketplace from './routes/Marketplace';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route default path="/" element={<Home />} />
            <Route path="insights" element={<Insights />} />
            <Route path="messages" element={<Messages />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="explore" element={<Explore />} />
            <Route path="marketplace" element={<Marketplace />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
