import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <header className="topbar">
          <div>
            <h2>Dashboard</h2>
            <p>Hostel Attendance Management</p>
          </div>

          <div className="admin">
            👤 <strong>Admin</strong>
          </div>
        </header>

        <section className="welcome">
          <h1>Good Morning, Admin! 👋</h1>
          <p>Here's what's happening in your hostel today.</p>
        </section>

        <section className="stats">
          <div className="stat-card">
            <div className="stat-icon">👨‍🎓</div>
            <div>
              <h3>120</h3>
              <p>Total Students</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div>
              <h3>108</h3>
              <p>Present Today</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">❌</div>
            <div>
              <h3>12</h3>
              <p>Absent Today</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🛏️</div>
            <div>
              <h3>40</h3>
              <p>Total Rooms</p>
            </div>
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="recent-card">
            <h2>Recent Attendance</h2>

            <table>
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Room</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Arun Kumar</td>
                  <td>A-101</td>
                  <td>
                    <span className="present">Present</span>
                  </td>
                </tr>

                <tr>
                  <td>Rahul</td>
                  <td>A-102</td>
                  <td>
                    <span className="absent">Absent</span>
                  </td>
                </tr>

                <tr>
                  <td>Karthik</td>
                  <td>B-201</td>
                  <td>
                    <span className="present">Present</span>
                  </td>
                </tr>

                <tr>
                  <td>Vijay</td>
                  <td>B-203</td>
                  <td>
                    <span className="present">Present</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="quick-card">
            <h2>Quick Actions</h2>

            <button>➕ Add Student</button>

            <button>📝 Mark Attendance</button>

            <button>📈 View Reports</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
