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
        <Route path="/mitrasoft-posts/" element={<MainPage />} />
        <Route path="/mitrasoft-posts/about" element={<About />} />
        <Route
          path="/mitrasoft-posts/users/:userId"
          element={<UserDetails />}
        />
      </Routes>
    </Router>
  );
}

export default App;
