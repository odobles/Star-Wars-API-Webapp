import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from "react";
import { Link } from "react-router-dom"

export default function VehiclesPage({vehiclesNamesList, setVehiclesNamesList, vehiclesList, setVehiclesList, vehiclesUid, setVehiclesUid}){

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
                vehiclesList.forEach(vehicles => setVehiclesUid(oldList =>  [...oldList, vehicles.uid]))
            } 
            console.log(vehiclesNamesList)
            console.log(vehiclesUid)

    }, [vehiclesList])

    return(
        <>
            <div className='text-light'>
                <h1>Vehicles</h1>
            </div>

            <div className="table-responsive">
            <table className="table table-striped table-bordered" style={{width: "10px"}}>
            <thead>
                <tr className='bg-info'>
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
                <tr className='bg-dark'>
                    {vehiclesNamesList.map((element,index) => {
                        return(
                            <td key={index} style={{padding: "30px"}}> <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehiclesUid[index]}.jpg`}/></td>
                        )
                    })}
  
                </tr>
            </tbody>
            <tbody>
            {/* <!-- Your rows inside the table HERE: --> */}
                <tr className='bg-dark'>
                    {vehiclesNamesList.map((element, index) => {
                        return(
                            <td key={index}> <Link to={`${vehiclesUid[index]}`}> <p><button className='btn btn-primary'>Learn More!</button></p> </Link> </td> 
                        )
                    })}
                </tr>
            </tbody>
            </table>
            </div>
            <Link to={'/'} className="btn btn-secondary m-4"><h4>Back</h4></Link>
        </>
    )
}
