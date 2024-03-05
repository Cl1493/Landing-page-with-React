import React from "react";

const Jumbotron = () => {
	return (
    <div className=" d-flex flex-column flex-md-row">
        <div className="card card-body m-4 p-4 center w-auto h-auto">
          <h5 className="card-title">A Warm Welcome!</h5>
          <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <a href="#" className="btn btn-primary mx-auto">Call to action!</a>
        </div>
    </div>
	);
};
export default Jumbotron;