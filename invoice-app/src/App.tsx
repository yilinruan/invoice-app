import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './features/authSlice'; 
import Login from './pages/Login';
import Invoices from './pages/Invoices'; 

const App: React.FC = () => {
  const user = useSelector(selectUser); // Get the logged-in user

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/invoices" element={user ? <Invoices /> : <Navigate to="/login" />} />
        <Route 
          path="/" 
          element={user ? 
            <div>
              <h1>Welcome, {user.name}!</h1>
              <Link to="/invoices">Go to Invoices</Link> 
            </div> 
            : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
