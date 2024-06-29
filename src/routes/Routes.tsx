import React from 'react';
import Navbar from '../components/organisms/Navbar';
import HomePage from '../components/pages/HomePage';
import LoginPage from '../components/pages/LoginPage';
import PlansPage from '../components/pages/PlansPage';
import GroupsPage from '../components/pages/GroupsPage';
import RecoverPage from '../components/pages/RecoverPage';
import ProfilePage from '../components/pages/ProfilePage';
import OptionsPage from '../components/pages/OptionsPage';
import ContactPage from '../components/pages/ContactPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import SettingsPage from '../components/pages/SettingsPage';
import RegisterPage from '../components/pages/RegisterPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppRoutes: React.FC = () => {
  return (
    <Router basename='/oloympus-platform-frontend/'>
      <Navbar/>
      <Routes>
        {/* Page routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/groups" element={<GroupsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/options" element={<OptionsPage />} />
        <Route path="/recover" element={<RecoverPage />} />
        <Route path="*" element={<NotFoundPage />} />
        
        {/* User routes */}
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
