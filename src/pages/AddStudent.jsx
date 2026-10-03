import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function AddStudent() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    registerNo: "",
    department: "",
    year: "",
    room: "",
    block: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Student added successfully! 🎉");

    navigate("/students");
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <header className="topbar">
          <div>
            <h2>Add Student</h2>
            <p>Register a new hostel student</p>
          </div>

          <div className="admin">
            👤 <strong>Admin</strong>
          </div>
        </header>

        <section className="page-header">
          <div>
            <h1>Add New Student ➕</h1>

            <p>Enter student details below.</p>
          </div>
        </section>

        <div className="form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div>
                <label>Student Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter student name"
                  value={student.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Register Number</label>

                <input
                  type="text"
                  name="registerNo"
                  placeholder="Example: 23ECE101"
                  value={student.registerNo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Department</label>

                <select
                  name="department"
                  value={student.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Department</option>

                  <option value="ECE">ECE</option>

                  <option value="CSE">CSE</option>

                  <option value="EEE">EEE</option>

                  <option value="MECH">MECH</option>

                  <option value="CIVIL">CIVIL</option>
                </select>
              </div>

              <div>
                <label>Year</label>

                <select
                  name="year"
                  value={student.year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>

                  <option value="1st Year">1st Year</option>

                  <option value="2nd Year">2nd Year</option>

                  <option value="3rd Year">3rd Year</option>

                  <option value="4th Year">4th Year</option>
                </select>
              </div>

              <div>
                <label>Room Number</label>

                <input
                  type="text"
                  name="room"
                  placeholder="Example: A-101"
                  value={student.room}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Hostel Block</label>

                <select
                  name="block"
                  value={student.block}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Block</option>

                  <option value="Block A">Block A</option>

                  <option value="Block B">Block B</option>

                  <option value="Block C">Block C</option>
                </select>
              </div>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => navigate("/students")}
              >
                Cancel
              </button>

              <button type="submit" className="save-btn">
                ✓ Save Student
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AddStudent;
