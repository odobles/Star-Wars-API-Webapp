import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export default function IndividualUserPage(){

    const [propsList, setPropsList] = useState([])
    const params = useParams()
    
    useEffect(() => {
        const individualCharacter = `https://www.swapi.tech/api/${params.asset}/${params.id}`
             

        const fetchIndividualCharacter = async () => {

            const response = await fetch(individualCharacter);
            const json = await response.json();

            setPropsList(json.result.properties)

            // console.log(propsList)
                

        }
        fetchIndividualCharacter()
        
    },[]);

    return(
        <>
            <div>
                <h1>{propsList.name}</h1>
            </div>

            <div className="table-responsive">
            <table className="table table-striped table-bordered" style={{width: "10px"}}>
            <thead>
                <tr>
                {/* <!-- Your Columns HERE --> */}

                    <th scope="col">{propsList.name}</th>
                
                </tr>
            </thead>
            <tbody>
            {/* <!-- Your rows inside the table HERE: --> */}
                <tr>

                    <td style={{padding: "50px"}}> <img src={
                         params.asset == "planets" && params.id == 1 ?
                         `https://starwars-visualguide.com/assets/img/placeholder.jpg`:
                        params.asset == "people" ?
                        `https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg` :
                        params.id == 1 && params.asset == "people" ?
                        `https://starwars-visualguide.com/assets/img/placeholder.jpg` :
                        `https://starwars-visualguide.com/assets/img/${params.asset}/${params.id}.jpg`  

                        }/>
                    </td>

                </tr>
            </tbody>
            <tbody>
            {/* <!-- Your rows inside the table HERE: --> */}
                <tr>
                    <td>
                        <ul>
                            {Object.keys(propsList).map((key,index) => {
                                    return(
                                        
                                        <li key={index}><p>{key + ': ' + propsList[key]}</p></li>
                                    )
                                })}
                        </ul>
                    </td>
                </tr>
            </tbody>
            </table>
            <Link to={ "/" + params.asset}><button>Go back</button></Link>
            </div>
        </>
    )
}