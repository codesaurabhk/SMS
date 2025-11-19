import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "../../src/components/Menu";
import Sidebar from "../../src/components/Sidebar/Sidebar";
import Dashboard from "../page/Dashboard/Dashboard";
import CampusSetup from "../page/Campus-Setup/CampusSetup";
import UserManagement from "../page/User-Management/UserManagement";
import Students from "../page/Students/Students";
import Teachers from "../page/Teachers/Teachers";
import AcademicSetup from "../page/Academic-Setup/AcademicSetup";
import LeadManagementSystem from "../page/Lead-Management-System/LeadManagementSystem";
import HRManagement from "../page/HR-Management/HRManagement";
import AccountManagement from "../page/Account-Management/AccountManagement";
import AcademicManagement from "../page/Academic-Management/AcademicManagement";
import Library from "../page/Library/Library";
import Dormitory from "../page/Dormitory/Dormitory";
import Transportation from "../page/Transportation/Transportation";
import AcademicHistory from "../page/Academic-History/AcademicHistory";
import AdminModule from "../page/Admic-Module/AdmicModule";
import Settings from "../page/Settings/Settings";
import Reports from "../page/Reports/Reports";
import AddStudent from "../page/Students/AddStudent";
import StudentTable from "../page/Students/StudentTable";
import StudentProfile from "../page/Students/StudentProfile";
import BlockSetup from "../page/Campus-Setup/BlockSetup";
import BuildingSetup from "../page/Campus-Setup/BuildingSetup";
import AddGround from "../page/Campus-Setup/AddGround";




function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="" element={<Dashboard />} />

          <Route path="campus-setup" element={<CampusSetup/>} />
            <Route path="block-setup" element={<BlockSetup/>} />            
            <Route path="building-setup" element={<BuildingSetup/>} />  
            <Route path="ground" element={<AddGround/>} />         


          <Route path="user-management-system" element={<UserManagement/>} />
          <Route path="students" element={<Students />} />
          <Route path="studentTable" element={<StudentTable />} />
          <Route path="studentProfile/:id" element={<StudentProfile />} />

          <Route path="addstudents" element={<AddStudent/>} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="academic-setup" element={<AcademicSetup />} />
          <Route path="lead-management-system" element={<LeadManagementSystem />} />
          <Route path="hr-management" element={<HRManagement />} />
          <Route path="account-management" element={<AccountManagement />} />
          <Route path="academic-management" element={<AcademicManagement />} />
          <Route path="library" element={<Library />} />
          <Route path="dormitory" element={<Dormitory />} />
          <Route path="transportation" element={<Transportation />} />
          <Route path="academic-history" element={<AcademicHistory />} />
          <Route path="admin-module" element={<AdminModule />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;
