
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './components/Pagination';
import PokemonList from './components/PokemonList';


const App = () => {

  const [pokemons, setPokemons] = useState<any>([])
  const [loadPokemon] = useState('https://pokeapi.co/api/v2/pokemon?limit=150&offset=20')
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);




  useEffect(() => {
    const getAllPokemons = async () => {
      try {
        const res = await fetch(loadPokemon)
        const data = await res.json()

        const createPokemonObject = (results: any) => {
          results.forEach(async (pokemon: any) => {
            const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            // console.log(data.data);

            // setPokemons(list => [...list, data])
            setPokemons((list: any) => [...list, data.data])
          });
        }
        createPokemonObject(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getAllPokemons();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = pokemons.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (

    <div className="container-fluid app_wrapper">
      {/* <Header /> */}
      <PokemonList pokemons={currentPosts} />
      <Pagination postsPerPage={postsPerPage} totalPosts={pokemons.length} paginate={paginate} />
      {/* <Footer /> */}
    </div>

  )
}

export default App
