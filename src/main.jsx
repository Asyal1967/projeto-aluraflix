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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
