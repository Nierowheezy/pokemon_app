
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './components/Pagination';
import PokemonList from './components/PokemonList';


interface IPokemon {
  name: string;
  url: string;
}

interface ApiResponse {
  count: number;
  next: string;
  previous: string | null;
  results: IPokemon[];
}

// const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';
const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=20';


const App = () => {

  const [loading, setLoading] = useState(true);
  // const [response, setResponse] = useState<ApiResponse | null>(null);
  const [pokemons, setPokemons] = useState<any>([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);


  useEffect(() => {
    const getAllPokemons = async () => {
      try {

        axios.get<ApiResponse>(baseUrl + '&offset=0').then((response) => {

          response.data.results.forEach(async (pokemon: any) => {
            const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            setPokemons((list: any) => [...list, data.data])
          })
          // setResponse(response.data);

          setLoading(false);
        });
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
      {
        loading ? (
          <h1>Loading ...</h1>
        ) : (
          <PokemonList pokemons={currentPosts} setPokemons={setPokemons} />
        )
      }
      <Pagination postsPerPage={postsPerPage} totalPosts={pokemons.length} paginate={paginate} />
    </div>
  )
}

export default App
