import React, {useEffect, useState} from "react";

function DataOutput() {

    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch("https://nba-stats4.p.rapidapi.com/teams/?per_page=50&page=1", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "f2f2dfce82mshcb64156556ea80ap1968b8jsn5e6669fe879d",
                "x-rapidapi-host": "nba-stats4.p.rapidapi.com"
            }
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    console.log(teams)

if(teams){
    return (
        <div>
            {teams.map((team) => (
                <ul>
                    <li>{team[0].city}</li>
                </ul>
            ))}
        </div>
    )}else{
    return <h2>Loading data...</h2>
}
}


export default DataOutput