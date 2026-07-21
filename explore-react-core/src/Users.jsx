import { use } from "react";

const Users = ({ fetchUsers }) => {
    const users = use(fetchUsers);
    console.log(users);
    return (
        <div>
            <h3>Users : {users.length}</h3>
        </div>
    );
};

export default Users;