import { createBrowserRouter, } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../auth/Register/Register";
import SignIn from "../auth/SignIn/SignIn";
import JobDetails from "../pages/JobDetails";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import JobApply from "../pages/jobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('http://localhost:3000/jobs')
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/signIn',
                Component: SignIn,
            },
            {
                path: '/jobs/:id',
                Component: JobDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoutes><JobApply></JobApply></PrivateRoutes>
            },
            {
                path: 'myApplication',
                element: <PrivateRoutes><MyApplication></MyApplication></PrivateRoutes>
            }
        ]
    },
]);

export default router;