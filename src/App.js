import { waitForDomChange } from "@testing-library/react"
import React from "react"
import PropTypes from "prop-types"
import axios from "axios";

class App extends React.Component {
    state = {
      isLoading: true,
      movies: []
    };
    getMovies = async () => {
      const movie  = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
    }
    componentDidMount() {
      this.getMovies();
    }

    render() {
      const { isLoading } = this.state;
      return <div> {isLoading ? "Loading...." : "We are ready"} </div>;
    }
  }

export default App;
