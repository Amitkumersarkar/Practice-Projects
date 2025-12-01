import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTea = () => {
    const { _id, name, photo, category, chef, details, supplier, taste } = useLoaderData();

    const handleUpdateTea = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedTea = Object.fromEntries(formData);
        form.reset();
        console.log(updatedTea);

        //send updated api to the server
        fetch(`http://localhost:4000/teas/${_id}`, {
            method: "PUT",
            headers: {
                'contentType': 'application/json'
            },
            body: JSON.stringify(updatedTea)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount)
                    Swal.fire({
                        title: "Drag me!",
                        icon: "tea updated successfully",
                        draggable: true
                    });
                console.log(data)
            })

    }
    return (
        <div>
            <Link to='/'>
                <button className="btn btn-info">Home</button>
            </Link>
            <h2 className="text-center font-bold text-4xl my-5">update tea</h2>
            <form onSubmit={handleUpdateTea}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" name="name" defaultValue={name} required className="input w-full" placeholder="Tea Name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Chef</label>
                        <input type="text" name="chef" defaultValue={chef} required className="input w-full" placeholder="Chef Name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" name="supplier" defaultValue={supplier} required className="input w-full" placeholder="Supplier" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input type="text" name="taste" defaultValue={taste} required className="input w-full" placeholder="Taste" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Category</label>
                        <input type="text" name="category" defaultValue={category} required className="input w-full" placeholder="Category" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input type="text" name="details" defaultValue={details} required className="input w-full" placeholder="Details" />
                    </fieldset>
                </div>

                <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Photo URL</label>
                    <input type="text" name="photo" defaultValue={photo} required className="input w-full" placeholder="Photo URL" />
                </fieldset>

                <button className="btn btn-info w-full">Update Tea</button>
            </form>
        </div>
    );
};

export default UpdateTea;