import { useState, useEffect } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const res = await fetch(
            `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();

        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form onSubmit={e => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input onChange={(e) => setLocation(e.target.value)} type="text" value={location} id="location" placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select onChange={(e) => {
                        setAnimal(e.target.value);
                        setBreed("");
                    }} value={animal} id="animal">
                        <option />
                        {ANIMALS.map((animal) => <option key={animal}>{animal}</option>)}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select disabled={breeds.length === 0} onChange={(e) => setBreed(e.target.value)} value={breed} id="breed" >
                        <option />
                        {breeds.map((breed) => <option key={breed}>{breed}</option>)}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {
                pets.map(pet => <Pet key={pet.id} name={pet.name} animal={pet.animal} breed={pet.breed} />)
            }
        </div>
    );
}

export default SearchParams;