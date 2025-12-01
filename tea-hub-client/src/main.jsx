import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root';
import Home from './components/Home';
import UpdateTea from './components/UpdateTea';
import TeaCard from './Pages/TeaCard';
import TeaDetails from './Pages/TeaDetails';
import AddTea from "./components/AddTea"
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('http://localhost:4000/teas')
      },
      {
        path: 'addTea',
        Component: AddTea
      },
      {
        path: 'updateTea/:id',
        Component: UpdateTea,
        loader: ({ params }) => fetch(`http://localhost:4000/teas/${params.id}`)
      },
      {
        path: 'teaCard',
        Component: TeaCard
      },
      {
        path: 'tea/:id',
        Component: TeaDetails
      },
      {
        path: 'signIn',
        Component: SignIn
      },
      {
        path: 'signUp',
        Component: SignUp
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
