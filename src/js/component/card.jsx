import React from "react";

const Card = () => {
	return (
    <div className="d-flex flex-column flex-md-row justify-content-center">
        <div className="card pr-1 pl-1" style={{width: '18rem', margin: '0.5em'}}>
        <img src="https://picsum.photos/500/325" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
         <div className="card" style={{width: '18rem', margin: '0.5em'}}>
         <img src="https://picsum.photos/500/325" className="card-img-top" alt="..."/>
             <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="btn btn-primary">Go somewhere</a>
             </div>
         </div>
          <div className="card" style={{width: '18rem', margin: '0.5em'}}>
          <img src="https://picsum.photos/500/325" className="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
           <div className="card" style={{width: '18rem', margin: '0.5em'}}>
           <img src="https://picsum.photos/500/325" className="card-img-top" alt="..."/>
               <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" className="btn btn-primary">Go somewhere</a>
               </div>
           </div>
    </div>
	);
};
export default Card;