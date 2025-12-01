import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TeaCard = ({ tea, teas, setTeas }) => {
    const { _id, name, photo, category, chef, details, supplier, taste } = tea;

    const handleDelete = (_id) => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {

                // backend delete method
                fetch(`http://localhost:4000/teas/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount)
                            console.log(data)
                    })

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                // remove the teas from the state
                const remainingTeas = teas.filter(teaa => teaa._id !== _id);
                setTeas(remainingTeas);
            }
        });
    }

    return (

        <div className="card lg:card-side bg-base-100 shadow-md border rounded-xl overflow-hidden">
            <figure className="w-full lg:w-1/3 h-56 lg:h-auto">
                <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </figure>

            <div className="card-body">

                <h2 className="card-title text-xl font-semibold">Name: {name}</h2>
                <p>Category: {category}</p>
                <p>Chef: {chef}</p>
                <p>Supplier: {supplier}</p>
                <p>Taste: {taste}</p>
                <p className="text-gray-600 text-sm">{details}</p>

                <div className="flex gap-3 justify-end mt-4 flex-wrap">

                    <Link to={`/tea/${_id}`}>
                        <button className="btn btn-sm btn-info text-white">
                            View
                        </button>
                    </Link>

                    <Link to={`/updateTea/${_id}`}>
                        <button className="btn btn-sm btn-warning text-white">
                            Update
                        </button>
                    </Link>

                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-error text-white">
                        Delete
                    </button>

                </div>
            </div>
        </div>
    );
};

export default TeaCard;
