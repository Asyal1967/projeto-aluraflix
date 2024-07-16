import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home';
import 'overlayscrollbars/overlayscrollbars.css';
import './scss/styles.scss'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import PaginaNaoEncontrada from './pages/404';
import NovoVideo from './pages/NovoVideo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async ({ request }) => {
      return fetch('http://localhost:3000/videos', { method: 'get', signal: request.signal })
    }
  },
  {
    path: "/novo-video",
    element: <NovoVideo />
  },
  {
    path: "*",
    element: <PaginaNaoEncontrada />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OverlayScrollbarsComponent defer>
      <RouterProvider router={router} />
    </OverlayScrollbarsComponent>
  </React.StrictMode>,
)
