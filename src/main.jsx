import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import BookDetails from './Components/BookDetails/BookDetails';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: 'books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../public/BooksData/booksData.json')
      },

      {
        path: 'listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('../public/BooksData/booksData.json')
      },

      {
        path: "dashboard",
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <HelmetProvider>

    <RouterProvider router={router} />
    <ToastContainer />

    </HelmetProvider>

  </StrictMode>,
)
