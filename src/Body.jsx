import React from 'react'
import img1 from './images/1.jpg'

const Body = () => {
    return (

        <div className="container BodyCont">
            <h1 className="bodyheading">Online video editing tools</h1>
            <div className="row pt-5">
                <div className="col-md-6">

                    <img src={img1} alt="" className="imgall" />
                    <h2 className="h2-merge">Merge a video</h2>
                    <img src={img1} alt="" className="imgall" />
                    <h2 className="h2-merge">Make a video</h2>

                </div>

                <div className="col-md-6">
                    <img src={img1} alt="" className="imgall" />
                    <h2 className="h2-merge">Compress a video</h2>
                    <img src={img1} alt="" className="imgall" />
                    <h2 className="h2-merge">Cut a video</h2>

                </div>



            </div>
            <div className="text-center pt-5">
                <button className="btn border-primary">More Tools</button>
            </div>
        </div>


    )
}

export default Body;
