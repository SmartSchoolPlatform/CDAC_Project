import React from 'react';

const HomeRenderGif2 = () => {
    return (
        <>
            <style>
                {`
          /* Style for the section with background GIF */
          #section2 {
                background-image: url('assets/images/img22.jpg'); /* Replace 'gif/gif1.gif' with your actual GIF path */
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

          #section2 h2 {
              font-size: 2rem; /* Example font size */
          }

          #section2 p {
              font-size: 1.2rem; /* Example font size */
          }
               #section2 div {
              
              background-color: rgba(135, 140, 145, 0.8);"
          }
        `}
            </style>

            <div id="section2">
                <div>
                    <h2>
                        Real-Time Communication
                    </h2>
                    <p>
                        Effective communication is key to a successful educational experience.
                        Our platform facilitates real-time communication between students, parents,
                        and teachers. With instant messaging, notifications, and updates, everyone stays
                        informed and engaged. Parents can easily track their child's academic performance
                        and attendance, while teachers can provide timely feedback and support.
                    </p>
                </div>

            </div>
        </>
    );
}

export default HomeRenderGif2;