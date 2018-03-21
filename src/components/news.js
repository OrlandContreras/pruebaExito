import React from 'react';
import { height } from 'window-size';


// definiendo un estilo
const divStyle = {
    width: '18rem',
    padding: '20px',
    height:'40rem'
  }

// Definiendo un componente presentacional
const News = ({ urlToImage, title, description, url }) => {
    return(
        <div>
            <div className="card bg-light" style={divStyle}>
                <img src={ urlToImage } alt={ description } className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ description }</p>
                    <a href={ url } className="btn btn-primary">ver mas</a>
                </div>
            </div>
        </div>
    );
};

export default News;