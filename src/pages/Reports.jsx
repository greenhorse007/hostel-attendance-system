import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Reports() {
  const [search, setSearch] = useState("");

  const students = [
    {
      id: 1,
      name: "Arun Kumar",
      registerNo: "23ECE101",
      department: "ECE",
      present: 24,
      total: 26,
    },
    {
      id: 2,
      name: "Rahul",
      registerNo: "23ECE102",
      department: "CSE",
      present: 21,
      total: 26,
    },
    {
      id: 3,
      name: "Karthik",
      registerNo: "23ECE103",
      department: "ECE",
      present: 25,
      total: 26,
    },
    {
      id: 4,
      name: "Vijay",
      registerNo: "23ECE104",
      department: "EEE",
      present: 20,
      total: 26,
    },
  ];

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.registerNo.toLowerCase().includes(search.toLowerCase()),
  );

  const totalStudents = students.length;

  const totalPresent = students.reduce(
    (sum, student) => sum + student.present,
    0,
  );

  const totalAttendance = students.reduce(
    (sum, student) => sum + student.total,
    0,
  );

  const attendancePercentage = Math.round(
    (totalPresent / totalAttendance) * 100,
  );

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        {/* TOP BAR */}

        <header className="topbar">
          <div>
            <h2>Reports</h2>
            <p>Attendance analysis and reports</p>
          </div>

          <div className="admin">
            👤 <strong>Admin</strong>
          </div>
        </header>

        {/* PAGE HEADER */}

        <section className="page-header">
          <div>
            <h1>Attendance Reports 📈</h1>

            <p>View and analyse student attendance.</p>
          </div>
        </section>

        {/* REPORT SUMMARY */}

        <section className="report-summary">
          <div className="report-card">
            <div className="report-icon">👨‍🎓</div>

            <div>
              <h3>{totalStudents}</h3>

              <p>Total Students</p>
            </div>
          </div>

          <div className="report-card">
            <div className="report-icon">✅</div>

            <div>
              <h3>{totalPresent}</h3>

              <p>Total Present</p>
            </div>
          </div>

          <div className="report-card">
            <div className="report-icon">📊</div>

            <div>
              <h3>{attendancePercentage}%</h3>

              <p>Overall Attendance</p>
            </div>
          </div>
        </section>

        {/* FILTER */}

        <div className="report-filter">
          <div className="report-search">
            🔍
            <input
              type="text"
              placeholder="Search student..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select>
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Semester</option>
          </select>
        </div>

        {/* STUDENT REPORT */}

        <div className="report-table-card">
          <h2>Student Attendance Report</h2>

          <p className="report-description">
            Attendance performance of each student.
          </p>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>#</th>

                  <th>Student</th>

                  <th>Register No</th>

                  <th>Department</th>

                  <th>Present</th>

                  <th>Total Days</th>

                  <th>Attendance</th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.map((student, index) => {
                  const percentage = Math.round(
                    (student.present / student.total) * 100,
                  );

                  return (
                    <tr key={student.id}>
                      <td>{index + 1}</td>

                      <td>
                        <strong>{student.name}</strong>
                      </td>

                      <td>{student.registerNo}</td>

                      <td>
                        <span className="department">{student.department}</span>
                      </td>

                      <td>{student.present}</td>

                      <td>{student.total}</td>

                      <td>
                        <div className="percentage-container">
                          <span>{percentage}%</span>

                          <div className="progress">
                            <div
                              className="progress-bar"
                              style={{
                                width: `${percentage}%`,
                              }}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Reports;
