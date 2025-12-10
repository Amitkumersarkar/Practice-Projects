import { NavLink } from "react-router-dom";

const JobCard = ({ jobs }) => {
    const { title, _id, location, jobType, company_logo, category, applicationDeadline, salaryRange, description, company, requirements } = jobs;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <div className="flex text-center gap-3 my-2">
                    <div>
                        <img
                            className="w-15"
                            src={company_logo}
                            alt="Shoes" />
                    </div>
                    <div>
                        {company}
                        <p>{location}</p>
                    </div>
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {
                        requirements.map((skills, idx) => <div className="badge badge-outline" key={idx}>{skills}</div>)
                    }
                    <div className="badge badge-outline">{category}</div>
                    {/* <div className="badge badge-outline">Products</div> */}
                </div>
            </div>
            <div className="flex justify-center my-4">
                <NavLink to={`/jobs/${jobs._id}`}>
                    <button className="btn btn-primary w-30">Show Details</button>
                </NavLink>
            </div>
        </div>
    );
};

export default JobCard;