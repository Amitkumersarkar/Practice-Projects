import { useParams } from "react-router-dom";
import UserAuth from "../../hooks/UserAuth";

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = UserAuth();
    console.log(jobId, user);

    return (
        <div>
            <h3 className="text-4xl">Apply Job For</h3>
        </div>
    );
};

export default JobApply;