import React from 'react';


class Navbar extends React.Component {
    state = {  } 
    render() { 
        return (
          <>
          <style>
            {`
              .ml-auto {
                margin-left: auto;
                margin-right: 7%;
              }
        
              .carousel-item img {
                max-width: 80%;
                height: auto;
                margin: 0 auto;
              }
        
              html {
                scroll-behavior: smooth;
              }
            `}
          </style>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="btn">
              <img src="assets/images/img12.png" alt="" width={70} height={60} />
            </button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav p-3">
                <a href="#Home" className="btn">Home</a>
                <a href="#AboutPlatform" className="btn">About Platform</a>
                <a href="#VisionMission" className="btn">Vision and Mission</a>
                <a href="#ContactUs" className="btn">Contact Us</a>
              </div>
              <div className="ml-auto">
                <a href="#LoginPage" className="btn">Login</a>
              </div>
            </div>
          </nav>
        </>
        
        )
    }
}
 
export default Navbar;