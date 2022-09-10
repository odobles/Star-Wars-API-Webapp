import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function FilmsPage( {filmNamesList, setFilmNamesList, filmsList, setFilmsList }){

        useEffect(() => {
            const filmsUrl = "https://www.swapi.tech/api/films/"
                 
            if (filmsList.length === 0) {

                const fetchFilms = async () => {

                    const response = await fetch(filmsUrl);
                    const json = await response.json();

                    // const obj = json.result[0].properties.title
                    const filmNamesArray = []
                    const obj2 = Object.keys(json.result)
                    obj2.forEach(item => filmNamesArray.push(json.result[item].properties.title))
    
                    setFilmsList(filmNamesArray)
                    console.log(filmsList)
                   
                }
                fetchFilms()
            };
        }, []);

        useEffect(() =>{

            if (filmsList.length !== 0 &&  filmNamesList.length === 0){
                filmsList.forEach(film => setFilmNamesList(oldList => [...oldList, film]))
            } 
            console.log(filmNamesList)

    }, [filmsList])

    return(
        <>
            <div>
                <h1>Films</h1>
            </div>

            <div className="table-responsive">
            <table className="table table-striped table-bordered" style={{width: "10px"}}>
            <thead>
                <tr>
                {/* <!-- Your Columns HERE --> */}

                {filmNamesList.map((element, index) => {
                    return(
                        <th key={index} scope="col">{element}</th>
                    )
                })}
                
                </tr>
            </thead>
            <tbody>
            {/* <!-- Your rows inside the table HERE: --> */}
                <tr>
                    {filmNamesList.map((element,index) => {
                        return(
                            <td key={index} style={{padding: "100px"}}> <img src={`https://starwars-visualguide.com/assets/img/films/${filmNamesList.indexOf(element)+1}.jpg`}/></td>
                        )
                    })}
  
                </tr>
            </tbody>
            <tbody>
            {/* <!-- Your rows inside the table HERE: --> */}
                <tr>
                    {filmNamesList.map((element,index) => {
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
