
const User = ({ user }) => {
    const { name, email, id } = user;
    return (
        <div>
            <h2>ID : {id}</h2>
            <h3>Name : {name} </h3>
            <p>Email : {email}</p>
        </div>
    );
};

export default User;