import { use } from "react";
import User from "./User";

const Users = ({ fetchUsers }) => {
    const users = use(fetchUsers);
    console.log(users);
    return (
        <div className="card">
            <h3>Users : {users.length}</h3>
            {
                users.map(user => <User user={user}></User>)
            }
        </div>
    );
};

export default Users;