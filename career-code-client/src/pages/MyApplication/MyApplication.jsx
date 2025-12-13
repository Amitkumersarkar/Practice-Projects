import { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import ApplicationStats from "./ApplicationStats";
import UserAuth from "../../hooks/UserAuth";
import { myApplicationPromise } from "../../applicationApis/applicationApis";

const MyApplication = () => {
    const { user } = UserAuth();

    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'loading your applications'}>
                <ApplicationList myApplicationPromise={myApplicationPromise}>
                </ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplication;