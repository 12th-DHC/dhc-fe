import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';

const Router = () => {
  return (
    <Routes>
      <Route path='/main' element={<Main />} />
      <Route path='/2' element={<p>2</p>} />
    </Routes>
  );
}
export default Router;
