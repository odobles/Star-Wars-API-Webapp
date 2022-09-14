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
                

        }
        fetchIndividualCharacter()
        
    },[]);

    return(
        <>  
            <div className="row justify-content-center">
                <div class="col-auto">
                    <div className='text-light'>
                        <h1>{propsList.name}</h1>
                    </div>

                    <div className="table-responsive align-center">
                        <table className="table table-striped table-bordered justify-center" style={{width: "10px"}}>
                        <thead>
                            <tr className='bg-info'>
                            {/* <!-- Your Columns HERE --> */}
                                
                                <th scope="col">{params.asset == "films" ? propsList.title : propsList.name}</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                        {/* <!-- Your rows inside the table HERE: --> */}
                            <tr className='bg-dark'>

                                <td style={{padding: "50px"}}> <img src={
                                    params.asset == "planets" && params.id == 1 ?
                                    `https://starwars-visualguide.com/assets/img/placeholder.jpg`:
                                    params.asset == "starships" ?
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
                            <tr className='bg-dark'>
                                <td className='text-light'>
                                    <ul  className="list-unstyled">
                                        {Object.keys(propsList).map((key,index) => {
                                                return(
                                                    
                                                    <li className="px-2" key={index}><p>{ 
                                                        key !== "characters" && 
                                                        key !== "planets" && 
                                                        key !== "starships" && 
                                                        key !== "species" && 
                                                        key !== "pilots" && 
                                                        key !== "people" && 
                                                        key !== "vehicles" ? 
                                                        key + ': ' + propsList[key]:<div/>
                                                        }</p></li>
                                        
                                                )
                                            })}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to={ "/" + params.asset}><button className='btn btn-primary'>Go back</button></Link>
                </div>
            </div>
        </div>
    </>
    )
}