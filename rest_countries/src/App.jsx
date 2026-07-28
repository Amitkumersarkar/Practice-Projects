import { Suspense } from "react";
import Countries from "./components/Countries/Countries";

// loading data
const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

const App = () => {

  return (
    <div>
      <Suspense fallback={<p>Countries data loading..</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </div>
  );
};

export default App;