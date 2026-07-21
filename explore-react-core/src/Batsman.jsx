import { useState } from "react";

const Batsman = () => {
    const [runs, setRuns] = useState(0);
    const handleScore = () => {
        const newScore = runs + 1;
        setRuns(newScore);
    }
    const handleSix = () => {
        const newRuns = runs + 6;
        setRuns(newRuns);
    }
    return (
        <div>
            <h3>Player : BD</h3>
            {
                runs > 50 && <p>Your score : 50</p>
            }
            <h2>Score : {runs} </h2>
            <button onClick={handleScore}>Add Runs</button>
            <button onClick={handleSix}>Six</button>
        </div>
    );
};

export default Batsman;