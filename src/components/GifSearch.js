import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GifSearch extends Component{

  state = {
    input: ""
  }

  handleChange = (ev) => {
    const newInput = {input: ev.target.value}
    this.setState(newInput)
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.alterQuery(this.state.input)
    this.setState({
      input: ""
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} >
        <input type="text" value={this.state.input} onChange={this.handleChange} />
        <input type='submit' />
      </form>
    )
  }
}

GifSearch.defaultProps = {

}

GifSearch.propTypes = {

}

export default GifSearch;
