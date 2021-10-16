import React from 'react'

const Footer = () => {
    return (
      <div className="container-fluid footer">
          <div className="row d-flex justify-content-center text-center">
              <div className="col-md-3">
                  <h4>Windows Products</h4>
                  <a href="#" className="WMSC pt-5">Video Suit</a> <br />
                  <a href="#" className="WMSC">Video Editor Plus</a> <br />
                  <a href="#" className="WMSC">Video Converter</a> <br />
                  <a href="#" className="WMSC">All Windows Products</a>
                
              </div>
              <div className="col-md-3">
                  <h4>Mac Products</h4>
                  
                  <a href="#" className="WMSC1 pt-5">Video Editor Plus</a> <br />
                  <a href="#" className="WMSC1">Video Converter</a> <br />
                  <a href="#" className="WMSC1">All Mac Products</a>
              </div>
              <div className="col-md-3">
                  <h4>Support</h4>
                  <a href="#" className="WMSC2 pt-5">Support Center</a> <br />
                  <a href="#" className="WMSC2">Learning Portal</a> <br />
                  <a href="#" className="WMSC2">Blog</a> 
                 
              </div>
              <div className="col-md-3">
                  <h4>Company</h4>
                  <a href="#" className="WMSC2 pt-5">About Fastreel</a> <br />
                  <a href="#" className="WMSC2">Contact Fastreel</a>
                  
              </div>
             <div className="footerline">
             <hr />
             </div>
          </div>
          
      </div>

    )
}

export default Footer;
