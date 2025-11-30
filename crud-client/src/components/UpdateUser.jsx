import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
    const user = useLoaderData();
    console.log(user);

    const handleUpdate = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;

        const updatedUser = { name, email };

        fetch(`http://localhost:7000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('updated user ', data);
            })
    };

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <label>Name : </label>
                <input
                    type="text"
                    name="name"
                    defaultValue={user?.name}
                    className="input input-bordered h-10 text-center m-2"
                />

                <br />

                <label>Email : </label>
                <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    className="input input-bordered h-10 text-center"
                />

                <div className="flex justify-center">
                    <button className="btn btn-secondary mt-5">
                        Update User
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateUser;
