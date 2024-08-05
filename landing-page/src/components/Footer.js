import React from 'react';

const Footer = () => {
  return (
    <footer id="ContactUs" className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Our Platform</h5>
            <p>
              This platform is designed to enhance the educational experience for students, parents, and teachers by providing comprehensive tools and resources.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#Home" className="text-dark">Home</a>
              </li>
              <li>
                <a href="#AboutPlatform" className="text-dark">About Platform</a>
              </li>
              <li>
                <a href="#VisionMission" className="text-dark">Vision and Mission</a>
              </li>
              <li>
                <a href="#ContactUs" className="text-dark">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <p className="text-dark">1234 School St., Education City, ED 56789</p>
              </li>
              <li>
                <p className="text-dark">Email: contact@ourschoolplatform.com</p>
              </li>
              <li>
                <p className="text-dark">Phone: +1 234 567 890</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Our Platform. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
