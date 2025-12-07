import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function AddFeedback() {


  const location=useLocation();

  const course = location.state?.course;


  if (course) {
    
  } else {
    console.log("No course data received.");
  }


  const [formData, setFormData] = useState({
    courseName: "",
    comments: "",
    rating: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    alert("Feedback submitted!");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add Feedback</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        
        {/* Course Name */}
        <div style={styles.field}>
          <label style={styles.label}>Course Name</label>
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter course name"
            required
          />
        </div>

        {/* Comments */}
        <div style={styles.field}>
          <label style={styles.label}>Feedback Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            style={{ ...styles.input, height: "90px" }}
            placeholder="Write your feedback..."
            required
          ></textarea>
        </div>

        {/* Rating */}
        <div style={styles.field}>
          <label style={styles.label}>Rating</label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select rating</option>
            <option value="1">⭐ 1</option>
            <option value="2">⭐ 2</option>
            <option value="3">⭐ 3</option>
            <option value="4">⭐ 4</option>
            <option value="5">⭐ 5</option>
          </select>
        </div>

        <button type="submit" style={styles.button}>Submit Feedback</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "450px",
    margin: "40px auto",
    background: "#f8fafc",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#0f172a",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "600",
    color: "#334155",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
  },
  button: {
    padding: "12px",
    border: "none",
    background: "#0f172a",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },
};
