import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component{
  state= {
    noticias: []
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria='general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=d2ea4d7f6c924a2587435f5c7ae725b2`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    });
  }

  render(){
    return(
      <Fragment>
        <Header 
          titulo='Noticias by Mauro developer'
        />

        <div className="container white contenedor-noticias">
          <Formulario 
            consultarNoticias={this.consultarNoticias}
          />

          <ListaNoticias 
            noticias={this.state.noticias}
          />
        </div>

      </Fragment>
    );
  }
}

export default App;
