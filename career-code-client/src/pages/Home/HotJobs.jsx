import { use } from "react";
import JobCard from "../Shared/JobCard";

const HotJobs = ({ jobsPromise }) => {
    // const jobs = use(jobsPromise);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                jobsPromise.map((jobs) => <JobCard key={jobs._id} jobs={jobs}></JobCard>)
            }
        </div>
    );
};

export default HotJobs;