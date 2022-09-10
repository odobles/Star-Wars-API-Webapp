import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from "react";
import { Link } from "react-router-dom"

export default function PlanetsPage({planetNamesList, setPlanetsNamesList, planetsList, setPlanetsList, uid, setUid}){

        useEffect(() => {
            const planetsUrl = "https://www.swapi.tech/api/planets/"
                 
            if (planetsList.length === 0) {

                const fetchPlanets = async () => {

                    const response = await fetch(planetsUrl);
                    const json = await response.json();
    
                    setPlanetsList(json.results)
             
                }
                fetchPlanets()
            };
        }, []);

        useEffect(() =>{

            if (planetsList.length !== 0 &&  planetNamesList.length === 0){
                planetsList.forEach(planet => setPlanetsNamesList(oldList =>  [...oldList, planet.name]))
                planetsList.forEach(planet => setUid(oldList =>  [...oldList, planet.uid]))
            } 
            console.log(planetNamesList)
            console.log(uid)

    }, [planetsList])

    return(
        <>
            <div>
                <h1>Planets</h1>
            </div>

            <div className="table-responsive">
            <table className="table table-striped table-bordered" style={{width: "10px"}}>
            <thead>
                <tr>
                {/* <!-- Your Columns HERE --> */}

                {planetNamesList.map((element, index) => {
                    return(
                        <th key={index} scope="col">{element}</th>
                    )
                })}
                
                </tr>
            </thead>
            <tbody>
            {/* <!-- Your rows inside the table HERE: --> */}
                <tr>
                    {planetNamesList.map((element,index) => {
                       
                        return(
                            <td key={index} style={{padding: "100px"}}> <img width="400" height="400" src={`https://starwars-visualguide.com/assets/img/planets/${uid[index]}.jpg`}/></td>
                        )
                        

                    })}
  
                </tr>
            </tbody>
            <tbody>
            {/* <!-- Your rows inside the table HERE: --> */}
                <tr>
                    {planetNamesList.map((element,index) => {
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
