import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from "react";
import '../components/views.css'
import { Link } from "react-router-dom";

export default function CharactersPage({namesList, setNamesList, charactersList, setCharactersList}){

        useEffect(() => {
            const charactersUrl = "https://www.swapi.tech/api/people/"
                 
            if (charactersList.length === 0) {

                const fetchCharacters = async () => {

                    const response = await fetch(charactersUrl);
                    const json = await response.json();
    
                    setCharactersList(json.results)
                }
                fetchCharacters()
            };
        }, []);

        useEffect(() =>{

            if (charactersList.length !== 0 &&  namesList.length === 0){
                charactersList.forEach(character => setNamesList(oldList =>  [...oldList, character.name]))
            } 
            console.log(namesList)

    }, [charactersList])

    return(
        <>
            <div className='text-light'>
                <h1>Characters</h1>
            </div>

            <div className="table-responsive">
            <table className="table table-striped table-bordered" style={{width: "10px"}}>
            <thead className='bg-info'>
                <tr>
                {/* <!-- Your Columns HERE --> */}

                {namesList.map((element, index) => {
                    return(
                        <th key={index} scope="col">{element}</th>
                    )
                })}
                
                </tr>
            </thead>
            <tbody>
            {/* <!-- Your rows inside the table HERE: --> */}
                <tr className='bg-dark'>
                    {namesList.map((element,index) => {
                        return(
                            <td key={index} style={{padding: "30px"}}> <img src={`https://starwars-visualguide.com/assets/img/characters/${namesList.indexOf(element)+1}.jpg`}/></td>
                        )
                    })}
  
                </tr>
            </tbody>
            <tbody>
            {/* <!-- Your rows inside the table HERE: --> */}
                <tr className='bg-dark'>
                    {namesList.map((element,index) => {
                        return(
                             <td key={index}> <Link to={`${index+1}`}> <p><button className='btn btn-primary'>Learn More!</button></p> </Link> </td> 
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
