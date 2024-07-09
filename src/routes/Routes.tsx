import React from 'react';
import Navbar from '../components/organisms/Navbar';
import HomePage from '../components/pages/HomePage';
import LoginPage from '../components/pages/LoginPage';
import PeoplePage from '../components/pages/PeoplePage';
import CommunityPage from '../components/pages/CommunityPage';
import RecoverPage from '../components/pages/RecoverPage';
import ProfilePage from '../components/pages/ProfilePage';
import SearchPage from '../components/pages/SearchPage';
import OlympusPage from '../components/pages/OlympusPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import SettingsPage from '../components/pages/SettingsPage';
import RegisterPage from '../components/pages/RegisterPage';
import PremiumPage from '../components/pages/PremiumPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactPage from '../components/pages/ContactPage';

const AppRoutes: React.FC = () => {
  return (
    <Router basename='/oloympus-platform-frontend/'>
      <Navbar />
      <Routes>
        {/* Page routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/olympus" element={<OlympusPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="/contact" element={<ContactPage />} />


        <Route path="/recover" element={<RecoverPage />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* User routes */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
