import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Routes>
      <Route Component={HomePage} path='/' />
      <Route Component={UserPage} path='/users' />
    </Routes>
  );
}

export default App;
