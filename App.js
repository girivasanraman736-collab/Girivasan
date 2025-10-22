
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", rollNo: "", department: "", year: "" });

  useEffect(() => {
    axios.get("http://localhost:5000/api/students").then(res => setStudents(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/students", form).then(res => {
      setStudents([...students, res.data]);
    });
  };

  return (
    <div className="App">
      <h1>IBM-N-J Student Grading System</h1>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })}/>
        <input placeholder="Roll No" onChange={e => setForm({ ...form, rollNo: e.target.value })}/>
        <input placeholder="Department" onChange={e => setForm({ ...form, department: e.target.value })}/>
        <input placeholder="Year" type="number" onChange={e => setForm({ ...form, year: e.target.value })}/>
        <button type="submit">Add Student</button>
      </form>

      <h3>Student List</h3>
      <ul>
        {students.map((s) => (
          <li key={s._id}>{s.name} ({s.rollNo}) - {s.department}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
