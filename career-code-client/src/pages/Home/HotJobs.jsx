import { use } from "react";

const HotJobs = ({ jobsPromise }) => {
    // const jobs = use(jobsPromise);
    return (
        <div>
            {
                jobsPromise.length
            }
        </div>
    );
};

export default HotJobs;