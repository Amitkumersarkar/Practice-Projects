import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contextApi/AuthContext/AuthContext";
import { myApplicationPromise } from "../../applicationApis/applicationApis";

const ApplicationList = () => {
    const { user } = useContext(AuthContext);
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        if (!user?.email) return;

        myApplicationPromise(user.email)
            .then(data => setApplications(data))
            .catch(err => console.error(err));
    }, [user?.email]);

    return (
        <div>
            <h2 className="text-3xl">
                Jobs Applied so far: {applications.length}
            </h2>
        </div>
    );
};

export default ApplicationList;
