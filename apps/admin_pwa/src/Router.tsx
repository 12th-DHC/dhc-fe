import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path='/1' element={<p>1</p>} />
      <Route path='/2' element={<p>2</p>} />
    </Routes>
  );
}
export default Router;
