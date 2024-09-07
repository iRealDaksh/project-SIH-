// // src/App.js
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Tracking from './pages/Tracking';
// import Dashboard from './pages/Dashboard';
// // import Reports from './pages/Reports';
// // import Contact from './pages/Contact';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/tracking" element={<Tracking />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         {/* <Route path="/reports" element={<Reports />} />
//         <Route path="/contact" element={<Contact />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tracking from './pages/Tracking';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';  // Importing Login component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />  {/* Login Route */}
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
