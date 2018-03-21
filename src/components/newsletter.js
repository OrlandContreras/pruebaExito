import React, { Component } from 'react';

// componentes
import News from './news';

// Api
import { getTopHeadelines } from "../api/news";

// Declarando un componente tipo container
class Newsletter extends Component {

    // Definición del estado de mi aplicación
    state = {
        news: []
    }

    // Ciclo de vida de un componente
    // llamado a la API
    componentDidMount(){
        getTopHeadelines()
        .then((res) => {
            this.setState({
              news: res.data.articles
            })
        })
        .catch((err) => console.log(err));
      }

      // Construyendo la interfaz de las noticias.
      // Haciendo uso del componente News
      renderNews = () => {
        const { news } = this.state;
        return news.map( res => {
            const { urlToImage, title, description, url } = res;
            return(
                <News
                    key={ title }
                    title={ title }
                    urlToImage={ urlToImage }
                    description={ description }
                    url={ url }
                 />
            );
        });
      }

      // Renderizado del componente
      render(){
          return(
              <div className="row">
                  { this.renderNews() }
              </div>
          )
      }
}

export default Newsletter;