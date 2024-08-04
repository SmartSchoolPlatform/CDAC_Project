import React from 'react';

const HomeRenderGif1 = () => {
    return (
        <>
            <style>
                {`
          /* Style for the section with background GIF */
          #section1 {
              background-image: url('assets/images/img21.png'); /* Replace 'assets/gif/gif6.gif' with your actual GIF path */
                background-size: cover; /* Adjust to 'cover' or 'contain' based on your preference */
              background-repeat: no-repeat;
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
              /* Additional styles for dark and transparent overlay */
              background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity (last value) as needed */
         
          }

          #section1 h2 {
              font-size: 2rem; /* Example font size */
              
          }

          #section1 p {
              font-size: 1.2rem; /* Example font size */
             
          }
              #section1 div {
              
              background-color:  rgba(135, 140, 145, 0.8);"
          }
        `}
            </style>

            <div id="section1">
                <div>
                    <h2>Personalized Learning Paths</h2>
                    <p>
                        Our platform offers a range of interactive tools and resources that make learning engaging and effective for
                        students. From multimedia lessons to interactive quizzes, we provide everything needed to enhance the
                        learning experience.
                    </p>
                </div>

            </div>
        </>
    );
}

export default HomeRenderGif1;