import React from "react";

const Card = (props) => {

    return(
        <div className="d-flex flex-md-row justify-content-center">
                <div className="card pr-1 pl-1" style={{width: '18rem', margin: '0.5em'}}>
                        <img src={props.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <a href={props.link} className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        </div>
    );
};





export default Card;