import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Students() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Arun Kumar",
      registerNo: "23ECE101",
      department: "ECE",
      year: "2nd Year",
      room: "A-101",
      block: "Block A",
    },
    {
      id: 2,
      name: "Rahul",
      registerNo: "23ECE102",
      department: "CSE",
      year: "2nd Year",
      room: "A-102",
      block: "Block A",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.registerNo.toLowerCase().includes(search.toLowerCase()),
  );

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <header className="topbar">
          <div>
            <h2>Students</h2>
            <p>Manage hostel students</p>
          </div>

          <div className="admin">
            👤 <strong>Admin</strong>
          </div>
        </header>

        <section className="page-header">
          <div>
            <h1>Student Management 👨‍🎓</h1>

            <p>Add, search and manage hostel students.</p>
          </div>

          <a href="/add-student" className="add-btn">
            + Add Student
          </a>
        </section>

        <div className="student-card">
          <div className="search-box">
            🔍
            <input
              type="text"
              placeholder="Search by name or register number..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="student-count">
            Total Students:
            <strong> {filteredStudents.length}</strong>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Register No</th>
                  <th>Department</th>
                  <th>Year</th>
                  <th>Room</th>
                  <th>Block</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>
                      <strong>{student.name}</strong>
                    </td>

                    <td>{student.registerNo}</td>

                    <td>
                      <span className="department">{student.department}</span>
                    </td>

                    <td>{student.year}</td>

                    <td>🛏️ {student.room}</td>

                    <td>{student.block}</td>

                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => deleteStudent(student.id)}
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Students;
