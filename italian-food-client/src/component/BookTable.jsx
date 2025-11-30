import { useState } from "react";
import { toast } from 'react-toastify';

export default function BookTable() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        people: '',
        table: 'Table 1'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:4000/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                toast.success('Reservation successful!');
                setFormData({
                    name: '',
                    email: '',
                    date: '',
                    time: '',
                    people: '',
                    table: 'Table 1'
                });
            } else {
                toast.error('Reservation failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Reservation failed. Please try again.');
        }
    };

    return (
        <>
            <div className="book mb-4">
                <div className="book_Container">
                    <div className="booking_Title" data-aos="fade-up">
                        <h3 data-aos="fade-up">Reservation</h3>
                        <h1 data-aos="fade-up">Book Your Table</h1>
                    </div>
                    <div className="from" data-aos="fade-up">
                        <div className="row from_Row">
                            <div className="col-6 form_Input" data-aos="fade-up">
                                <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
                                <input type="date" placeholder="Date" name="date" value={formData.date} onChange={handleChange} />
                                <input type="number" placeholder="People" name="people" value={formData.people} onChange={handleChange} />
                            </div>
                            <div className="col-6 form_Input" data-aos="fade-up">
                                <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                                <input type="time" placeholder="Time" name="time" value={formData.time} onChange={handleChange} />
                                <div className="w-full">
                                    <label className="block mb-1 font-medium text-gray-700">Select Table</label>
                                    <select
                                        name="table"
                                        value={formData.table}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    >
                                        <option value="Table 1">Table 1</option>
                                        <option value="Table 2">Table 2</option>
                                        <option value="Table 3">Table 3</option>
                                        <option value="Table 4">Table 4</option>
                                        <option value="Table 5">Table 5</option>
                                    </select>
                                </div>

                                <button className="btn mt-2 btn-primary" onClick={handleSubmit}>Reserve A Table</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}