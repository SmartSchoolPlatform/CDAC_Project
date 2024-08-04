import React from 'react';

const HomeRenderGif3 = () => {
  return (
    <>
      <style>
        {`
          /* Style for the section with background GIF */
          #section3 {
              background-image: url('assets/images/img24.jfif'); /* Replace 'gif/gif1.gif' with your actual GIF path */
              background-size: cover;
                background-position: center;
                height: 400px; /* Adjust height as needed */
                position: relative;
                overflow: hidden;
                color: #fff; /* Text color for content */
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: flex-end; /* Align content to bottom */
                padding: 20px; /* Padding for content */
          }

          #section3 h2 {
              font-size: 2rem; /* Example font size */
          }

          #section3 p {
              font-size: 1.2rem; /* Example font size */
          }
              #section3 div {
              
              background-color: rgba(135, 140, 145, 0.8);"
          }
        `}
      </style>

      <div id="section3">
      <div>
                    <h2>
                    Comprehensive Progress Tracking
                    </h2>
                    <p>
                    Our platform offers comprehensive tools for tracking academic progress and 
                    performance. Students and parents can access detailed reports on grades, 
                    attendance, and assignments. Teachers can monitor class performance, identify 
                    areas for improvement, and provide targeted support. With our intuitive dashboard, 
                    staying on top of academic progress has never been easier.
                    </p>
                </div>
      </div>
    </>
  );
}

export default HomeRenderGif3;