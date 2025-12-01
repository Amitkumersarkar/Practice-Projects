import { Link, useLoaderData } from "react-router-dom";
import TeaCard from "../Pages/TeaCard";
import { useState } from "react";

const Home = () => {
    const teasData = useLoaderData();
    const [teas, setTeas] = useState(teasData);

    return (
        <>
            <Link to='/addTea'>
                <button className="btn btn-primary">Add Tea</button>
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">

                {teasData?.map((tea) => (
                    <TeaCard teas={teas} setTeas={setTeas} key={teas._id} tea={tea} />
                ))}
            </div>
        </>

    );
};

export default Home;
