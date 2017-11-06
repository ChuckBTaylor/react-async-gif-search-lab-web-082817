import React from 'react';
import { Route } from 'react-router-dom'

const GifList = (props) => {
  console.log(props);
  const gifs = props.gifs.map((gif, idx) => <li key={idx}> {gif.url} </li>)
  return (
  <ul>
    {gifs}
  </ul>
  )
}

GifList.defaultProps = {

}

export default GifList
