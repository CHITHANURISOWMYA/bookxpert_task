import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/login/protectedRoute';
import Login from './components/login/login';
import Dashboard from './components/Dashboard/dashboard';

function App() {

  const isLoggedIn = localStorage.getItem("isLoggedIn");



  return (
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
  path="/dashboard"
  element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
