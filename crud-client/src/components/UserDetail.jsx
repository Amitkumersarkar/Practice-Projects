import { useLoaderData } from "react-router-dom";

const UserDetail = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div>

        </div>
    );
};

export default UserDetail;