import React from 'react'
import img2 from './images/3.jpg'
const Tvideo = () => {
    return (
        <div className="container BodyCont">
            <h1 className="bodyheading">Online video Templates </h1>
            <div className="row pt-5">
                <div className="col-md-6">

                    <img src={img2} alt="" className="imgall" />
                    <h2 className="h2-merge">Intro Video</h2>
                    <img src={img2} alt="" className="imgall" />
                    <h2 className="h2-merge">Video Ads</h2>

                </div>

                <div className="col-md-6">
                    <img src={img2} alt="" className="imgall" />
                    <h2 className="h2-merge">Outro Video</h2>
                    <img src={img2} alt="" className="imgall" />
                    <h2 className="h2-merge">Birthday Video</h2>

                </div>
            </div>
            <div className="text-center pt-5 ">
                <button className="btn5 border-primary">More Templates</button>
            </div>
        </div>
    )
}

export default Tvideo;
