import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from "react";
import { Link } from "react-router-dom"

export default function StarshipsPage({starshipsNamesList, setStarshipsNamesList, starshipsList, setStarshipsList, starshipsUid, setStarshipsUid}){

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
                starshipsList.forEach(starship => setStarshipsUid(oldList =>  [...oldList, starship.uid]))
            } 
            console.log(starshipsNamesList)
            console.log(starshipsUid)
            

    }, [starshipsList])

    return(
        <>
            <div className='text-light'>
                <h1>Starships</h1>
            </div>

            <div className="table-responsive">
            <table className="table table-striped table-bordered" style={{width: "10px"}}>
            <thead>
                <tr className='bg-info'>
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
                <tr className='bg-dark'>
                    {starshipsNamesList.map((element,index) => {
                        return(
                            <td key={index} style={{padding: "30px"}}> <img src='https://starwars-visualguide.com/assets/img/placeholder.jpg'/></td>
                        )
                    })}
  
                </tr>
            </tbody>
            <tbody>
            {/* <!-- Your rows inside the table HERE: --> */}
                <tr className='bg-dark'>
                    {starshipsNamesList.map((element,index) => {
                        return(
                            <td key={index}> <Link to={`${starshipsUid[index]}`}> <p><button className='btn btn-primary'>Learn More!</button></p> </Link> </td> 
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
