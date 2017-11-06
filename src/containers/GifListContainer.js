import React, { Component } from 'react';
import { fetchFromGiphy } from '../services/functions'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      gifs: [],
      query: ''
    }
  }

  alterQuery = (newQuery) => {
    this.giphyFetch(newQuery)
  }

  render(){
    return(
      <div>
        Query: {this.state.query}
        <GifList gifs={this.state.gifs}/>
        <GifSearch alterQuery={this.alterQuery}/>
      </div>
    )
  }

  giphyFetch = (newQuery) => {
    fetchFromGiphy(newQuery)
    .then(json => {
      const newState = {gifs: json.data, query: newQuery}
      this.setState(newState)
    })
  }

  componentDidMount = () => {
    this.giphyFetch()
  }

}

GifListContainer.defaultProps = {

}

GifListContainer.propTypes = {

}

export default GifListContainer;
