import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <>
         <Navbar />
      <div className="container-fluid header">
     
          <div className="row justify-content-center text-center">
              <div className="col-md-10">
                  <h1 className="heading">Fastreel by Movavi: online video creation & editing  </h1>
                  <p className="parag">Edit videos or use online templates – right in your browser. No downloads required!</p>
              </div>
          </div>
          <div className="row srow pt-5">
              <div className="col-md-6 firstbtn">
              <button className="btn1 btn-white bg-white">Use Online Tools</button> 
              <button  className="btn2 btn-white bg-white">Use Online Templates</button>
              
              </div>
              </div>
      </div>
      </>
    );
}

export default Header;
