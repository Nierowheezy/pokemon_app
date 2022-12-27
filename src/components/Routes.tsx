import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Add from "../pages/Add";
import Footer from "./common_files/Footer";
import Header from "./common_files/Header";
import PokemonDetails from "./PokemonDetails";


const Routes = () => {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/add-pokemon" exact component={Add} />
          <Route path="/pokemon/:name" exact component={PokemonDetails} />
          <Route path="/:number" exact component={App} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routes;
