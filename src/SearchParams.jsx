import { useState } from "react";
import { useQuery } from '@tanstack/react-query';
import fetchSearch from './fetchSearch';
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [requestParams, setRequestParams] = useState({
        location: "",
        breed: "",
        animal: "",
    });
    const [animal, setAnimal] = useState("");
    const [breeds] = useBreedList(animal);

    const results = useQuery(["search", requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];

    return (
        <div className="search-params">
            <form onSubmit={e => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const obj = {
                    animal: formData.get("animal") ?? "",
                    location: formData.get("location") ?? "",
                    breed: formData.get("breed") ?? "",
                };
                setRequestParams(obj);
            }}>
                <label htmlFor="location">
                    Location
                    <input name="location" type="text" id="location" placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select onChange={(e) => {
                        setAnimal(e.target.value);
                    }} value={animal} id="animal">
                        <option />
                        {ANIMALS.map((animal) => <option key={animal}>{animal}</option>)}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select disabled={breeds.length === 0} name="breed" id="breed" >
                        <option />
                        {breeds.map((breed) => <option key={breed}>{breed}</option>)}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
}

export default SearchParams;