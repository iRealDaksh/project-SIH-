import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tracking from './pages/Tracking';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  const isAuthenticated = localStorage.getItem('authToken'); // Check if user is logged in

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/tracking" 
          element={isAuthenticated ? <Tracking /> : <Navigate to="/login" />} // Redirect to login if not authenticated
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
