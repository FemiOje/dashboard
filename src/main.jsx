import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './routes/Home';
import Insights from './routes/Insights';
import Messages from './routes/Messages';
import Favorites from './routes/Favorites';
import Explore from './routes/Explore';
import Marketplace from './routes/Marketplace';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "favorites",
    element: <Favorites />,
  },
  {
    path: "messages",
    element: <Messages />,
  },
  {
    path: "insights",
    element: <Insights />,
  },
  {
    path: "explore",
    element: <Explore />,
  },
  {
    path: "marketplace",
    element: <Marketplace />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
