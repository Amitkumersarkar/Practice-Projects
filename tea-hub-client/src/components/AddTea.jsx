import Swal from "sweetalert2";

const AddTea = () => {

    const handleAddTea = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const category = form.category.value;
        const photo = form.photo.value;

        const newTea = { name, chef, supplier, taste, details, category, photo };
        console.log(newTea);

        form.reset();

        // send data to the backend

        fetch('http://localhost:4000/teas', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTea)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // alert
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your tea added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    };

    return (
        <div className="p-24">
            <div className="text-center p-12 space-y-4">
                <h1 className="text-5xl">Add Tea</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <form onSubmit={handleAddTea}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" name="name" required className="input w-full" placeholder="Tea Name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Chef</label>
                        <input type="text" name="chef" required className="input w-full" placeholder="Chef Name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" name="supplier" required className="input w-full" placeholder="Supplier" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input type="text" name="taste" required className="input w-full" placeholder="Taste" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Category</label>
                        <input type="text" name="category" required className="input w-full" placeholder="Category" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input type="text" name="details" required className="input w-full" placeholder="Details" />
                    </fieldset>
                </div>

                <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Photo URL</label>
                    <input type="text" name="photo" required className="input w-full" placeholder="Photo URL" />
                </fieldset>

                <button className="btn btn-info w-full">Add Tea</button>
            </form>
        </div>
    );
};

export default AddTea;
