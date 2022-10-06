import{useState} from "react"; //so we can have controlled inputs we need useState

//This component is for the creation of a Pokemon in our db

export const PokemonForm = () => {

    const [pokemonData, setPokemonData] = useState(
        {
            pokemonName: ''
        }
    )
    //page refresh is default behavior for a form submit, 
    //since we are an SPA we do NOT want to refresh
    //the DOM calls our function handler with the first parameter being the event obj itself
    // the event object will reference where it came from
    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(pokemonData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="pokemon-name">Pokemon name</label>
                <input id="pokemon-name" 
                       placeholder="ex. Charmander" 
                       value={pokemonData.pokemonName}
                       onChange={e =>setPokemonData({...pokemonData, pokemonName: e.target.value})}
                /> {/* COMMENT: self closing input tage */}
            </div>
            <button>Submit</button>
        </form>

    );
}