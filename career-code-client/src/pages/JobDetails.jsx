import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const { title, company } = useLoaderData();

    return (
        <div>
            <h2 className="text-6xl">{title}</h2>
            <p>Company: {company}</p>
            <button className="btn btn-primary">Apply Now</button>
        </div>
    );
};

export default JobDetails;