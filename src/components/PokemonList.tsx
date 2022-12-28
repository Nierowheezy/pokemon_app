import Pokemon from './Pokemon';

const PokemonList = ({ pokemons, setPokemons }: any) => {


    // console.log(pokemons);

    const handleDelete = (id: number) => {
        if (window.confirm('Delete Item')) {
            setPokemons(() => pokemons.filter((pokemon: any) => pokemon.id !== id))
        }
    }



    return (
        <>
            <div className="container pokemon_list">
                <div className="row">
                    {
                        pokemons.map((pokemon: any, i: any) => (
                            <Pokemon key={i} pokemon={pokemon} handleDelete={handleDelete} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default PokemonList
