import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Root.tsx'
import NotFound from './NotFound.tsx'

import Home from './routes/Home.tsx'
import Portfolio from './routes/Portfolio.tsx';
import Gallery from './routes/Gallery.tsx';
import BlogPost from './routes/BlogPost.tsx';
import Blog from './routes/Blog.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "portfolio",
        element: <Portfolio />
      },
      {
        path: "gallery",
        element: <Gallery />
      },
      {
        path: "blog",
        element: <Blog />
      }
    ]
  },
  {
    path: "/post/:year/:month/:day/:name",
    element: <BlogPost />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
