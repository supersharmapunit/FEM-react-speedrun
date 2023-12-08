import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const BREEDS = [];

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input onChange={(e) => setLocation(e.target.value)} type="text" value={location} id="location" placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select onChange={(e) => {
                        setAnimal(e.target.value);
                        setBreed("");
                    }} value={animal} id="animal" >
                        <option />
                        {ANIMALS.map((animal) => <option key={animal}>{animal}</option>)}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select disabled={BREEDS.length === 0} onChange={(e) => setBreed(e.target.value)} value={breed} id="breed" >
                        <option />
                        {BREEDS.map((breed) => <option key={breed}>{breed}</option>)}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default SearchParams;