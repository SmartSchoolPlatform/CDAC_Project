import React from 'react'

export default function AboutPlatform() {
  return (
    <div>
    <div id="AboutPlatform" className="container" style={{ backgroundColor: 'rgb(194, 237, 248)', borderRadius: '3%', margin: '2% auto', padding: '5%', maxWidth: '90%' }}>
      <h1 className="text-center">About Platform</h1>
  
      <p>
        Welcome to our innovative smart school platform, designed to revolutionize the educational experience for
        students, parents, and teachers. Our platform leverages advanced technology to create a seamless and engaging
        learning environment that caters to the diverse needs of the educational community.
      </p>
  
      {/* Row 1 */}
      <div className="row align-items-center my-4">
        
        <div className="col d-flex flex-column align-items-center">
          <h3>For Students:</h3>
          <p>
            <b>Exam and Event Information:</b> Students can stay informed about upcoming exams and events, just like checking a school notice board. This feature helps them stay organized and prepared for their academic schedule.<br />
            <b>Assignment Tracking:</b> Students can easily check and manage their assignments. Our platform provides all the details they need to stay on top of their homework and projects.<br />
            <b>Attendance Tracking:</b> Students can track their attendance records, ensuring they are aware of their presence in classes and any missed days.<br />
            <b>Grade and Performance Tracking:</b> Students can monitor their academic performance through detailed grade reports. This feature helps them understand their strengths and areas for improvement.
          </p>
        </div>
        <div className="col d-flex justify-content-center p-1">
          <img src="assets/gif/gif5.gif" alt="Student Image" className="img-fluid" style={{ maxWidth: '100%', height: '100%', borderRadius: '10%' }} />
        </div>
      </div>
      <br />
      {/* Row 2 */}
      <div className="row align-items-center my-4">
        <div className="col d-flex justify-content-center p-1" style={{ backgroundColor: 'whitesmoke', borderRadius: '10%' }}>
          <img src="assets/gif/gif6.gif" alt="Student Image" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div className="col d-flex flex-column align-items-center">
          <h3>For Parents:</h3>
          <p>
            <b>Performance Monitoring:</b> Parents can access their child's academic performance and progress. This includes grades, attendance records, and assignment submissions, allowing them to stay involved in their child's education.<br />
            <b>Communication with Teachers:</b> Our platform facilitates direct communication between parents and teachers. Parents can reach out to teachers for updates, concerns, or general inquiries about their child's academic journey.<br />
            <b>Event and Exam Notifications:</b> Parents receive notifications about upcoming exams and school events, ensuring they are well-informed and can support their child's preparation and participation.
          </p>
        </div>
      </div>
      <br />
      {/* Row 3 */}
      <div className="row align-items-center my-4">
        <div className="col d-flex flex-column align-items-center">
          <h3>For Teachers:</h3>
          <p>
            <b>Assignment and Exam Information:</b> Teachers can provide students with detailed information about upcoming exams and assignments. This includes due dates, guidelines, and any additional resources needed for preparation.<br />
            <b>Attendance Management:</b> Teachers can efficiently manage and record student attendance, ensuring accurate and up-to-date records.<br />
            <b>Performance Feedback:</b> Teachers can offer constructive feedback on student performance, helping students understand their strengths and areas for improvement. This feature supports a continuous learning and improvement process.
          </p>
        </div>
        <div className="col d-flex justify-content-center p-1" style={{ backgroundColor: 'whitesmoke', borderRadius: '10%' }}>
          <img src="assets/gif/gif8.gif" alt="Student Image" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  </div>
  
  )
}
