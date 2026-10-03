import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Attendance() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const [room, setRoom] = useState("A-101");

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Arun Kumar",
      registerNo: "23ECE101",
      room: "A-101",
      status: "Present",
    },
    {
      id: 2,
      name: "Rahul",
      registerNo: "23ECE102",
      room: "A-101",
      status: "Absent",
    },
    {
      id: 3,
      name: "Karthik",
      registerNo: "23ECE103",
      room: "A-101",
      status: "Present",
    },
    {
      id: 4,
      name: "Vijay",
      registerNo: "23ECE104",
      room: "A-101",
      status: "Present",
    },
  ]);

  const changeStatus = (id, status) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, status } : student,
      ),
    );
  };

  const presentCount = students.filter(
    (student) => student.status === "Present",
  ).length;

  const absentCount = students.filter(
    (student) => student.status === "Absent",
  ).length;

  const saveAttendance = () => {
    alert(`Attendance saved successfully!\n\nDate: ${date}\nRoom: ${room}`);
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        {/* TOP BAR */}

        <header className="topbar">
          <div>
            <h2>Attendance</h2>
            <p>Daily hostel attendance</p>
          </div>

          <div className="admin">
            👤 <strong>Admin</strong>
          </div>
        </header>

        {/* PAGE HEADER */}

        <section className="page-header">
          <div>
            <h1>Mark Attendance 📝</h1>

            <p>Record today's hostel attendance.</p>
          </div>
        </section>

        {/* FILTER */}

        <div className="attendance-filter">
          <div>
            <label>Date</label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label>Room</label>

            <select value={room} onChange={(e) => setRoom(e.target.value)}>
              <option>A-101</option>
              <option>A-102</option>
              <option>A-103</option>
              <option>B-201</option>
              <option>B-202</option>
            </select>
          </div>
        </div>

        {/* SUMMARY */}

        <div className="attendance-summary">
          <div className="summary-card">
            <span>👨‍🎓</span>
            <div>
              <h3>{students.length}</h3>
              <p>Total Students</p>
            </div>
          </div>

          <div className="summary-card present-summary">
            <span>✅</span>
            <div>
              <h3>{presentCount}</h3>
              <p>Present</p>
            </div>
          </div>

          <div className="summary-card absent-summary">
            <span>❌</span>
            <div>
              <h3>{absentCount}</h3>
              <p>Absent</p>
            </div>
          </div>
        </div>

        {/* ATTENDANCE TABLE */}

        <div className="attendance-card">
          <div className="attendance-title">
            <div>
              <h2>Student Attendance</h2>

              <p>
                Room: <strong>{room}</strong>
              </p>
            </div>

            <span className="date-display">📅 {date}</span>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Student</th>
                  <th>Register No</th>
                  <th>Room</th>
                  <th>Attendance</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td>

                    <td>
                      <strong>{student.name}</strong>
                    </td>

                    <td>{student.registerNo}</td>

                    <td>🛏️ {student.room}</td>

                    <td>
                      <div className="attendance-buttons">
                        <button
                          className={
                            student.status === "Present"
                              ? "status-btn present-active"
                              : "status-btn"
                          }
                          onClick={() => changeStatus(student.id, "Present")}
                        >
                          ✓ Present
                        </button>

                        <button
                          className={
                            student.status === "Absent"
                              ? "status-btn absent-active"
                              : "status-btn"
                          }
                          onClick={() => changeStatus(student.id, "Absent")}
                        >
                          ✕ Absent
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="save-attendance">
            <button className="save-btn" onClick={saveAttendance}>
              ✓ Save Attendance
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Attendance;
