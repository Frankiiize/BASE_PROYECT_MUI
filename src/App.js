import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { RouteComponent } from './routers/RouteComponent';

function App() {
  return (
   <Routes>
      <Route path='*' element={<RouteComponent/>}></Route>
   </Routes>
  );
}

export default App;
