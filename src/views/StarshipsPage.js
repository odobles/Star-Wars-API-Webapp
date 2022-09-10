import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from "react";
import { Link } from "react-router-dom"

export default function StarshipsPage({starshipsNamesList, setStarshipsNamesList, starshipsList, setStarshipsList, uid, setUid}){

        useEffect(() => {
            const starshipsUrl = "https://www.swapi.tech/api/starships/"
                 
            if (starshipsList.length === 0) {

                const fetchStarships = async () => {

                    const response = await fetch(starshipsUrl);
                    const json = await response.json();
    
                    setStarshipsList(json.results)
                }
                fetchStarships()
            };
        }, []);

        useEffect(() =>{

            if (starshipsList.length !== 0 &&  starshipsNamesList.length === 0){
                starshipsList.forEach(starship => setStarshipsNamesList(oldList =>  [...oldList, starship.name]))
                starshipsList.forEach(planet => setUid(oldList =>  [...oldList, planet.uid]))
            } 
            console.log(starshipsNamesList)
            console.log(uid)

    }, [starshipsList])

    return(
        <>
            <div>
                <h1>Starships</h1>
            </div>

            <div className="table-responsive">
            <table className="table table-striped table-bordered" style={{width: "10px"}}>
            <thead>
                <tr>
                {/* <!-- Your Columns HERE --> */}

                {starshipsNamesList.map((element, index) => {
                    return(
                        <th key={index} scope="col">{element}</th>
                    )
                })}
                
                </tr>
            </thead>
            <tbody>
            {/* <!-- Your rows inside the table HERE: --> */}
                <tr>
                    {starshipsNamesList.map((element,index) => {
                        return(
                            <td key={index} style={{padding: "100px"}}> <img src='https://starwars-visualguide.com/assets/img/placeholder.jpg'/></td>
                        )
                    })}
  
                </tr>
            </tbody>
            <tbody>
            {/* <!-- Your rows inside the table HERE: --> */}
                <tr>
                    {starshipsNamesList.map((element,index) => {
                        return(
                            <td key={index}> Lorem Ipsum <Link to={`${uid[index]}`}> <p><button>Learn More!</button></p> </Link> </td> 
                        )
                    })}
                </tr>
            </tbody>
            </table>
            </div>
        </>
    )
}
