import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ProviderAuth } from './context/authContext';
import { ProtectedRoute } from './routers/ProtectedRoute';
import Login from './views/login/Login';
import {PrivateRoutes, Router} from './routers/router';
import { Suspense } from 'react';

function App() {
  return (
    <ProviderAuth>
      <Suspense fallback={<h1>Loading...</h1>}>
          <Router />
      </Suspense>
    </ProviderAuth>
  );
}

export default App;
