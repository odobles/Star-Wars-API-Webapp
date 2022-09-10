import { render } from "react-dom";
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Navigate,
} from "react-router-dom";

import Navbar from './components/Navbar'
import HomePage from './views/HomePage'
import CharactersPage from './views/CharactersPage'
import FilmsPage from './views/FilmsPage'
import PlanetsPage from './views/PlanetsPage'
import StarshipsPage from "./views/StarshipsPage";
import SpeciesPage from './views/SpeciesPage'
import VehiclesPage from './views/VehiclesPage'
import IndividualUserPage from './views/IndividualUserPage'
import NotFoundPage from './views/NotFoundPage'

function App() {

  const [uid, setUid] = useState([])

  const [charactersList, setCharactersList] = useState([])
  const [namesList, setNamesList] = useState([])

  const [filmsList, setFilmsList] = useState([])
  const [filmNamesList, setFilmNamesList] = useState([])

  const [planetsList, setPlanetsList] = useState([])
  const [planetNamesList, setPlanetsNamesList] = useState([])

  const [starshipsList, setStarshipsList] = useState([])
  const [starshipsNamesList, setStarshipsNamesList] = useState([])

  const [speciesList, setSpeciesList] = useState([])
  const [speciesNamesList, setSpeciesNamesList] = useState([])

  const [vehiclesList, setVehiclesList] = useState([])
  const [vehiclesNamesList, setVehiclesNamesList] = useState([])

  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route path="/people" element={<CharactersPage namesList={namesList} setNamesList={setNamesList} charactersList ={charactersList} setCharactersList={setCharactersList} />} />
          <Route path="/films" element={<FilmsPage filmNamesList={filmNamesList} setFilmNamesList={setFilmNamesList} filmsList={filmsList} setFilmsList={setFilmsList} />} />
          <Route path="/planets" element={<PlanetsPage planetNamesList={planetNamesList} setPlanetsNamesList={setPlanetsNamesList} planetsList={planetsList} setPlanetsList={setPlanetsList} uid={uid} setUid={setUid} />} />
          <Route path="/starships" element={<StarshipsPage starshipsNamesList={starshipsNamesList} setStarshipsNamesList={setStarshipsNamesList} starshipsList={starshipsList} setStarshipsList={setStarshipsList} uid={uid} setUid={setUid} />} />
          <Route path="/species" element={<SpeciesPage speciesNamesList={speciesNamesList} setSpeciesNamesList={setSpeciesNamesList} speciesList={speciesList} setSpeciesList={setSpeciesList} />} />
          <Route path="/vehicles" element={<VehiclesPage vehiclesNamesList={vehiclesNamesList} setVehiclesNamesList={setVehiclesNamesList} vehiclesList={vehiclesList} setVehiclesList={setVehiclesList} uid={uid} setUid={setUid} />} />
          
          <Route path="/characters" element={<Navigate replace to="/people"/>} /> {/*User redirect. Replace does not allow to go back to usuarios*/}

          <Route path="/:asset/:id" element={<IndividualUserPage />} />
          
          <Route path="*" element={<NotFoundPage />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
