import { Route, Routes } from 'react-router';
import LandingPage from './pages/LandingPage';
import SamplePage from './pages/SamplePage';

function App() {
  return (
    <Routes>
      <Route Component={LandingPage} path='/' />
      <Route Component={SamplePage} path='/sample' />
    </Routes>
  );
}

export default App;
