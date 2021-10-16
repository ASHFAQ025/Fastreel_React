import React from 'react';
const Navbar=()=>{
    return (
        <>
           <div className="navbar justify-content-center">
               <div className="navbar__text">
                  
                 <h1 className="logo">Fastreel</h1>
                   
                   <ul className='navbar__ul '>
                   
                       <li>  <a  href='#'>Tooles</a></li>
                       <li>  <a href='#'>Templates</a></li>
                       <li>  <a href='#'>Pricing</a></li>
                       
                   </ul>
               </div>
           </div>
           
        </>
    )
}
export default Navbar;