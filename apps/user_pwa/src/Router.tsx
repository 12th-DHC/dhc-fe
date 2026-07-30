import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import StatisticsPage from './pages/Statistics';
import HomePage from './pages/home';
import SettingPage from './pages/Setting';

const Router = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/statistics' element={<StatisticsPage />} />
      <Route path='/setting' element={<SettingPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/' element={<LoginPage />} />
    </Routes>
  );
}
export default Router;
