import Pokemon from './Pokemon'

const PokemonList = ({ pokemons }: any) => {
    return (
        <>
            <div className="container pokemon_list">
                <div className="row">
                    {
                        pokemons.map((pokemon: any, i: any) => (
                            <Pokemon key={i} pokemon={pokemon} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default PokemonList
