import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import AboutPage from '../components/pages/AboutPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import LoginPage from '../components/pages/LoginPage';
import Navbar from '../components/organisms/Navbar';
import RegisterPage from '../components/pages/RegisterPage';
import ProfilePage from '../components/pages/ProfilePage';
import SettingsPage from '../components/pages/SettingsPage';
import GroupsPage from '../components/pages/GroupsPage';
import MembersPage from '../components/pages/MembersPage';
import SocialNetworksPage from '../components/pages/SocialNetworksPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* Page routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/groups" element={<GroupsPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/social-networks" element={<SocialNetworksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        
        {/* User routes */}
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
