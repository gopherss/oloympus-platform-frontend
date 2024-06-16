import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import OptionsPage from '../components/pages/OptionsPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import LoginPage from '../components/pages/LoginPage';
import Navbar from '../components/organisms/Navbar';
import RegisterPage from '../components/pages/RegisterPage';
import ProfilePage from '../components/pages/ProfilePage';
import SettingsPage from '../components/pages/SettingsPage';
import GroupsPage from '../components/pages/GroupsPage';
import ContactPage from '../components/pages/ContactPage';
import PlansPage from '../components/pages/PlansPage';
import RecoverPage from '../components/pages/RecoverPage';

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
