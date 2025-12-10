import { createBrowserRouter, } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../auth/Register/Register";
import SignIn from "../auth/SignIn/SignIn";
import JobDetails from "../pages/JobDetails";

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
            }
        ]
    },
]);

export default router;