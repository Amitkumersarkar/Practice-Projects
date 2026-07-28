import { use } from "react";

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);

    return (
        <div>
            <h2>In the countries : {countries.length}</h2>
        </div>
    );
};

export default Countries;