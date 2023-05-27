import Dashboard from "../Pages/Dashboard";
import Users from "../Pages/Users";
import AdminProperties from "../Pages/AdminProperties";
import { Route, Routes } from "react-router";
function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/admindashboard" element={<Dashboard />} />
        <Route path="/Adminproperties" element={<AdminProperties />} />

        <Route path="/adminusers" element={<Users />} />
      </Routes>
    </div>
  );
}

export default Routes;
