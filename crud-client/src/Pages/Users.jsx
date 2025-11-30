// "use client";

import { useState } from "react";
import { Link } from "react-router-dom";

const Users = ({ users }) => {

    const [allUsers, setAllUsers] = useState(users);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = { name, email };

        fetch('http://localhost:7000/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('users added successfully');
                    e.target.reset();

                    setAllUsers([...allUsers, { _id: data.insertedId, ...newUser }]);
                }
            })
    };
    // delete method
    const handleDelete = (id) => {
        // console.log(_id)
        fetch(`http://localhost:7000/users/${id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    // remove user from  UI (client)
                    const remaining = allUsers.filter(user => user._id !== id);
                    setAllUsers(remaining);
                    console.log('after user delete', data)
                }
            })
    }
    return (
        <div>
            {/* add users */}
            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                <input type="text" name="name" className="input input-bordered h-10 text-center m-2" />
                <br />
                <label>Email : </label>
                <input type="email" name="email" className="input input-bordered h-10 text-center" />
                <div className="flex justify-center">
                    <button className="btn btn-secondary mt-5">Add User</button>
                </div>
            </form>

            {/* show user */}
            <div>
                {allUsers.map(user =>
                    <p key={user._id}>{user.name}:{user.email} <Link to={`/users/${user._id}`}>Details</Link> <Link to={`/update/${user._id}`}>Update</Link>  <button onClick={() => handleDelete(user._id)} className="btn btn-info ml-2">X</button></p>
                )}
            </div>
        </div>
    );
};

export default Users;
