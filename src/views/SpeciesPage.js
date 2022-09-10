import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from "react";
import { Link } from "react-router-dom"

export default function SpeciesPage({speciesNamesList, setSpeciesNamesList, speciesList, setSpeciesList}){

        useEffect(() => {
            const speciesUrl = "https://www.swapi.tech/api/species/"
                 
            if (speciesList.length === 0) {

                const fetchSpecies = async () => {

                    const response = await fetch(speciesUrl);
                    const json = await response.json();
    
                    setSpeciesList(json.results)
                }
                fetchSpecies()
            };
        }, []);

        useEffect(() =>{

            if (speciesList.length !== 0 &&  speciesNamesList.length === 0){
                speciesList.forEach(character => setSpeciesNamesList(oldList =>  [...oldList, character.name]))
            } 
            console.log(speciesNamesList)

    }, [speciesList])

    return(
        <>
            <div>
                <h1>Characters</h1>
            </div>

            <div className="table-responsive">
            <table className="table table-striped table-bordered" style={{width: "10px"}}>
            <thead>
                <tr>
                {/* <!-- Your Columns HERE --> */}

                {speciesNamesList.map((element, index) => {
                    return(
                        <th key={index} scope="col">{element}</th>
                    )
                })}
                
                </tr>
            </thead>
            <tbody>
            {/* <!-- Your rows inside the table HERE: --> */}
                <tr>
                    {speciesNamesList.map((element,index) => {
                        return(
                            <td key={index} style={{padding: "100px"}}> <img src={`https://starwars-visualguide.com/assets/img/species/${speciesNamesList.indexOf(element)+1}.jpg`}/></td>
                        )
                    })}
  
                </tr>
            </tbody>
            <tbody>
            {/* <!-- Your rows inside the table HERE: --> */}
                <tr>
                    {speciesNamesList.map((element,index) => {
                        return(
                            <td key={index}> Lorem Ipsum <Link to={`${index+1}`}> <p><button>Learn More!</button></p> </Link> </td> 
                        )
                    })}
                </tr>
            </tbody>
            </table>
            </div>
        </>
    )
}
