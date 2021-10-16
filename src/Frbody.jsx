import React from 'react'
import media from './images/5.jpg'
const Frbody = () => {
    return (
        <div className="container-fluid contchose">
        <h1 className="headingchose">Why do people choose us?</h1>
        <div className="row pt-5">
                <div className="col-md-4">

                    <img src={media} alt="" className="imgall" />
                    <hr  className="hzline"/>
                    <h4 className="h2-merge pt-5">Enthusiast video makers</h4>
                   <p className="frhading">Online video-editing tools enable anyone
                    to polish their video in just a couple of clicks</p>

                </div>

                <div className="col-md-4">
                    <img src={media} alt="" className="imgall" />
                    <hr  className="hzline"/>
                    <h4 className="h2-merge pt-5">Social media specialists</h4>
                    <p className="frhading">The program helps create dynamic promo
                     videos and sales announcements in no time.</p>

                </div>
                <div className="col-md-4">
                    <img src={media} alt="" className="imgall" />
                    <hr  className="hzline "/>
                    <h4 className="h2-merge pt-5">Bloggers</h4>
                    <p className="frhading">The colorful templates and high-energy music
                     help make videos that will engage viewers.</p>
                   

                </div>



            </div>
        </div>
    )
}

export default Frbody;
