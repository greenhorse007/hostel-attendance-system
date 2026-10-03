import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        🏫
        <div>
          <h3>HOSTEL</h3>
          <span>ATTENDANCE</span>
        </div>
      </div>

      <nav>
        <NavLink to="/dashboard">📊 Dashboard</NavLink>

        <NavLink to="/students">👨‍🎓 Students</NavLink>

        <NavLink to="/add-student">➕ Add Student</NavLink>

        <NavLink to="/attendance">📝 Attendance</NavLink>

        <NavLink to="/reports">📈 Reports</NavLink>
      </nav>

      <div className="sidebar-bottom">
        <NavLink to="/">🚪 Logout</NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
