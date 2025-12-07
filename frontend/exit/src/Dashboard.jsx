import React, { useEffect, useState } from 'react';
import { Star, TrendingUp, Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import "./home.css"
import Navbar from './Navbar';
import axios from 'axios';


const CourseFeedbackDashboard = () => {

    const navigate = useNavigate(); 

  const [courses,setcourses]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:4500/api/rate").then((res)=>{

     
      setcourses(res.data);
    }).catch((err)=>{
      console.error(err);
    })
  },[])  ; 


 
  const updater=(course) => {
    navigate('/feedback', { state: { course } });

    
    
  }
 




  return (


    <div>
        <Navbar/>

      <div className="dashboard-container">
      <div className="dashboard-content">

        <div className="dashboard-header">
          <h1 className="dashboard-title">Course Feedback Dashboard</h1>
          <p className="dashboard-subtitle">Monitor and analyze course performance metrics</p>
        </div>

        

        {/* Course Cards */}
        <div className="courses-grid">
          {courses.map((course) => (
            <div 
              key={course.id}
              className={`course-card ${course.overallFeedbackRating}`}
            >
              <div className="course-header">
                <div>
                  <p className="course-id">{course.courseId}</p>
                  <h3 className="course-name">{course.courseName}</h3>
                </div>
              </div>

              <div className="course-duration">
                <Clock className="duration-icon" />
                <span className="duration-text">{course.courseDuration}</span>
              </div>

              <div className="course-footer">
                <div className="rating-section">
                 <h3>Rating</h3>
                  <span className={`rating-value ${course.overallFeedbackRating}`}>
                    {course.overallFeedbackRating}
                  /5</span>
                </div>
               
              </div>
               <div>
            <button className='update' onClick={()=>{updater(course)}} >update</button>
            <button className=' delete'>delete</button>
          </div>
            </div>
          ))}

         
        </div>

       
      </div>
    </div>

    </div>
    
  );
};

export default CourseFeedbackDashboard;