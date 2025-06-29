import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Onboard from './pages/Onboard';
import Signup from './pages/Signup';
import Login from './pages/Login';
import DashboardLayout from './component/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import JobList from './pages/JobList';
import JobDetails from './pages/JobDetail';
import Inbox from './pages/Inbox';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="jobs" element={<JobList />} />
        <Route path="jobs/:id" element={<JobDetails />} />
        <Route path="inbox" element={<Inbox />} />
      </Route>

    </Routes>
  );
}

export default App;
