import { PageProvider } from "./Components/Header/Header";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Teacher from "./Pages/Teachers/Teacher";
import Finance from "./Pages/Finance/Finance";
import Event from "./Pages/Event/Event";
import Chat from "./Pages/Chat/Chat";
import User from "./Pages/User/User";
import Food from "./Pages/Food/Food";
import LatestActivity from "./Pages/LatestActivity/LatestActivity";
import Student from "./Pages/student/Student";

function App() {
  return (
    <>
      <PageProvider>
        <div className="app-container">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/student" element={<Student/>} />
              <Route path="/teacher" element={<Teacher />} />
              <Route path="/event" element={<Event />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/food" element={<Food />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/user" element={<User />} />
              <Route path="/latestActivity" element={<LatestActivity />} />
            </Routes>
          </main>
        </div>
      </PageProvider>
    </>
  );
}

export default App;
