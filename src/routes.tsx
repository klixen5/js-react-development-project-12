import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Root from './pages/Root';
import Login from './pages/Login';
import NotFound from './pages/NotFount';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes