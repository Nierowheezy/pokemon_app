import { useEffect, useState } from 'react';


const PokemonDetails = ({ match }: any) => {

  const [singlepoke, setSinglepoke] = useState<any>([]);
  const [abilities, setAbilities] = useState<any>([]);
  const [moves, setMoves] = useState<any>([]);
  const [image, setImage] = useState<any>(null);


  useEffect(() => {
    const fetchSinglePost = () => {
      fetch(`https://pokeapi.co/api/v2${match.url}`)
        .then(singlepoke => {
          return singlepoke.json()
        })
        .then(data => {
          console.log(data)
          setSinglepoke(data)
          setAbilities(data.abilities)
          setMoves(data.moves)
          setImage(data.sprites["front_default"])
        })
    }
    fetchSinglePost();

  }, [])


  // console.log(abilities);

  const renderAbility = () => abilities?.map((ability: any) => {
    return <>
      <p>{ability.ability.name},</p>
    </>
  });

  console.log();


  return (
    <div className="app-container">

      <div className="card_single_container">
        <div className="card card_single" >
          <div className="img_single">
            <img src={image} alt={singlepoke.name} className="card-img-top" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Name : {singlepoke.name}</h5>
          </div>

          <div className="card-body">
            <h5 className="card-title">Abilities : {renderAbility()}</h5>
            <h5 className="card-title">Moves : {moves[0].move.name}, {moves[1].move.name}</h5>
          </div>


        </div>
      </div>

    </div>
  );
}

export default PokemonDetails;