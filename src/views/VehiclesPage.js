import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from "react";
import { Link } from "react-router-dom"

export default function VehiclesPage({vehiclesNamesList, setVehiclesNamesList, vehiclesList, setVehiclesList, uid, setUid}){

        useEffect(() => {
            const vehiclessUrl = "https://www.swapi.tech/api/vehicles/"
                 
            if (vehiclesList.length === 0) {

                const fetchVehicles = async () => {

                    const response = await fetch(vehiclessUrl);
                    const json = await response.json();
    
                    setVehiclesList(json.results)
                }
                fetchVehicles()
            };
        }, []);

        useEffect(() =>{

            if (vehiclesList.length !== 0 &&  vehiclesNamesList.length === 0){
                vehiclesList.forEach(vehicles => setVehiclesNamesList(oldList =>  [...oldList, vehicles.name]))
                vehiclesList.forEach(vehicles => setUid(oldList =>  [...oldList, vehicles.uid]))
            } 
            console.log(vehiclesNamesList)
            console.log(uid)

    }, [vehiclesList])

    return(
        <>
            <div>
                <h1>Vehicles</h1>
            </div>

            <div className="table-responsive">
            <table className="table table-striped table-bordered" style={{width: "10px"}}>
            <thead>
                <tr>
                {/* <!-- Your Columns HERE --> */}

                {vehiclesNamesList.map((element, index) => {
                    return(
                        <th key={index} scope="col">{element}</th>
                    )
                })}
                
                </tr>
            </thead>
            <tbody>
            {/* <!-- Your rows inside the table HERE: --> */}
                <tr>
                    {vehiclesNamesList.map((element,index) => {
                        return(
                            <td key={index} style={{padding: "100px"}}> <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid[index]}.jpg`}/></td>
                        )
                    })}
  
                </tr>
            </tbody>
            <tbody>
            {/* <!-- Your rows inside the table HERE: --> */}
                <tr>
                    {vehiclesNamesList.map((element, index) => {
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
