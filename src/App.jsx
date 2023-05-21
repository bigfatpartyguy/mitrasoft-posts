import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import UserDetails from './components/UserDetails';
import About from './components/About';
import NavBarComponent from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBarComponent />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
