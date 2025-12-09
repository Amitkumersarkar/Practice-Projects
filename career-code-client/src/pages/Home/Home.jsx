import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import HotJobs from "./HotJobs";

const Home = () => {
    // const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json())
    const jobsPromise = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <HotJobs jobsPromise={jobsPromise}></HotJobs>
        </div>
    );
};

export default Home;