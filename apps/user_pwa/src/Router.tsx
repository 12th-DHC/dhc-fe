import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';

const Router = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/2' element={<p>2</p>} />
    </Routes>
  );
}
export default Router;
