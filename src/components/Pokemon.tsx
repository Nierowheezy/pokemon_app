import { Link } from 'react-router-dom';

const Pokemon = ({ pokemon, handleDelete }: any) => {



    return (
        <div className="col-sm-3 pokemon">
            <div className="card" >
                <div className="center_img">
                    <img src={pokemon.sprites["front_default"]} alt={pokemon.name} className="card-img-top" />
                </div>

                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Type : {pokemon.types[0].type.name}</li>
                    <li className="list-group-item">
                        <span className="badge rounded-pill bg-primary">
                            <Link to={`/pokemon/${pokemon.name}`}>
                                Details
                            </Link>
                        </span>
                        {/* <span className="badge rounded-pill bg-primary" style={{ marginLeft: '1rem', cursor: 'pointer' }} onClick={ }>
                            Delete
                        </span> */}
                        <button className="badge rounded-pill bg-primary" style={{ marginLeft: '1rem', cursor: 'pointer', border: '0' }}
                            onClick={() => handleDelete(pokemon.id)}
                        >
                            Delete
                        </button>
                    </li>

                </ul>

            </div>
        </div>
    )
}

export default Pokemon
