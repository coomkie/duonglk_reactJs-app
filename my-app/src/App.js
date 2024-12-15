import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/layouts';
import Home from './pages/homePage';
import Service from './pages/servicesPage';
import Store from './pages/shopPage';
import Les9 from './lessons/les9';
import LoginPage from './pages/loginPage';
import AdminPage from './pages/adminPage';

function App() {
  //javascript here
  //variables

  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/service' element={<Service />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/shop' element={<Store />} />
      </Routes>
    </Layout>
    <Les9/>
  </BrowserRouter>
  );
}

export default App;

