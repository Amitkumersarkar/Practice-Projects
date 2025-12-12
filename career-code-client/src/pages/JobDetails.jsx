import { NavLink, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const { _id, title, company } = useLoaderData();

    return (
        <div>
            <h2 className="text-6xl">{title}</h2>
            <p>Company: {company}</p>
            <NavLink to={`/jobApply/${_id}`}>
                <button className="btn btn-primary">Apply Now</button>
            </NavLink>
        </div>
    );
};

export default JobDetails;