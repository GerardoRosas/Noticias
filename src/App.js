import React, { Component } from 'react';

class App extends Component {
  state = { 
    noticias: []
   }

  async componentDidMount(){
    const url = `https://newsapi.org/v2/top-headlines?country=mx&
    category=business&apiKey=09da4de6a9a049378b3094819af696a4`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    console.log(noticias.articles);
  }

  render() { 
    return ( <h1>Noticias API React</h1> );
  }
}
 
export default App;
