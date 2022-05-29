import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ProviderAuth } from './context/authContext';
import { ProtectedRoute } from './routers/ProtectedRoute';
import Login from './views/login/Login';
import {PrivateRoutes} from './routers/router';
import { Suspense } from 'react';

function App() {
  return (
    <ProviderAuth>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<h1>index page</h1>} />
          <Route path='/register' element={<h1>Register</h1>} />
          <Route path='/login' element={<Login />} />
          <Route path='/fran' element={<h1>cual es ?</h1>} />

          <Route  element={<ProtectedRoute />}>
              <Route path='*' element={<PrivateRoutes/>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </ProviderAuth>
  );
}

export default App;
