import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';

const Router = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<LoginPage />} />
    </Routes>
  );
}
export default Router;
