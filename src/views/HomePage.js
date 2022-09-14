import { Link } from "react-router-dom"

export default function HomePage(){
    
    return(
        <div>
            <h1 className="text-light p-4">Home</h1>
            <div className="row">
                <div className="col-md-4 p-4">
                    <div className="card">
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-light">Characters</h5>
                            <img className="card-img-top bg-dark mx-auto p-2" src="https://starwars-visualguide.com/assets/img/categories/character.jpg" />
                            <Link to={'/people'} className="btn btn-primary">Go to characters</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-4">
                    <div className="card">
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-light">Films</h5>
                            <img className="card-img-top bg-dark mx-auto p-2" src="https://starwars-visualguide.com/assets/img/categories/films.jpg" />
                            <Link to={'/films'} className="btn btn-primary">Go to films</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-4">
                    <div className="card">
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-light">Planets</h5>
                            <img className="card-img-top bg-dark mx-auto p-2" src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" />
                            <Link to={'/planets'} className="btn btn-primary">Go to planets</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-4">
                    <div className="card">
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-light">Starships</h5>
                            <img className="card-img-top bg-dark mx-auto p-2" src="https://starwars-visualguide.com/assets/img/categories/starships.jpg" />
                            <Link to={'/starships'} className="btn btn-primary">Go to starships</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-4">
                    <div className="card">
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-light">Species</h5>
                            <img className="card-img-top bg-dark mx-auto p-2" src="https://starwars-visualguide.com/assets/img/categories/species.jpg" />
                            <Link to={'/species'} className="btn btn-primary">Go to species</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-4">
                    <div className="card">
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-light">Vehicles</h5>
                            <img className="card-img-top bg-dark mx-auto p-2" src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg" />
                            <Link to={'/vehicles'} className="btn btn-primary">Go to vehicles</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
