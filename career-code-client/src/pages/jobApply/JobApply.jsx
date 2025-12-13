import { useParams } from "react-router-dom";
import UserAuth from "../../hooks/UserAuth";
import axios from "axios";

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = UserAuth();
    console.log(jobId, user);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const newForm = { linkedin, github };
        form.reset();
        console.log(newForm);
        const application = {
            jobId,
            applicant: user.email,
            linkedin,
            github
        }
        //by used axios send application data to the backend
        axios.post('http://localhost:3000/application', application)
            .then(res => {
                console.log(res.data)
            })
            .catch((error => {
                console.log(error)
            }))

    }
    return (
        <div>
            <h3 className="text-4xl text-center my-5">Apply Job</h3>
            <form onSubmit={handleSubmit} className="flex justify-center mb-10">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  w-xs border p-4">
                    <label className="label">LinkedIn</label>
                    <input name="linkedin" type="url" className="input" placeholder="LinkedIn profile" />

                    <label className="label">GitHub</label>
                    <input name="github" type="url" className="input" placeholder="GitHub Link" />

                    <button className="btn btn-neutral mt-4">Apply</button>
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;