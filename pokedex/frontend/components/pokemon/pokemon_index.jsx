import React from 'react';

class PokemonIndex extends React.Component{
  render(){
    const allPokemon = this.props.pokemon;
  
    return (
      <ul>
        {allPokemon.map((poke) => (
          <li key={poke.id}>
            <span style={{marginRight: 10 }}>{poke.id}</span>
            <img src={poke.image_url} height='20px' width='20px' alt="" style={{ marginRight: 10 }}/>
            <span>{poke.name}</span>
          </li>
        ))}
      </ul>
    );
  }

  componentDidMount(){
    this.props.requestAllPokemon();
    
  }

}
export default PokemonIndex;