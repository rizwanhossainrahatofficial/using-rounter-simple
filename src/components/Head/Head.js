import React from 'react';

import { Button } from 'react-bootstrap';

const Head = (props) => {
    const {name,description,img}=props.item
    return (
        <div className="col">
        <div className="card">
          <img src={img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
        
      </div>
    );
};

export default Head;