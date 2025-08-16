
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import LoginPage from './pages/LoginPage';
import DashboardLayout from './pages/DashboardLayout';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminDashboard from './pages/AdminDashboard';
import { Role } from './types';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

const Router: React.FC = () => {
  const { user } = useAuth();

  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
        <Route
          path="/"
          element={user ? <DashboardLayout /> : <Navigate to="/login" />}
        >
          {user?.role === Role.STUDENT && (
            <Route index element={<StudentDashboard />} />
          )}
          {user?.role === Role.TEACHER && (
            <Route index element={<TeacherDashboard />} />
          )}
          {user?.role === Role.ADMIN && (
            <Route index element={<AdminDashboard />} />
          )}
           {/* Fallback route in case of role mismatch */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
