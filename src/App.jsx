import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppProvider } from './Context/AppContext';
import Navbar from './Components/Navbar';
import Home from './Pagess/Home';
import Listings from './Pagess/Listings';
import ItemDetail from './Pagess/ItemDetail';
import PostItem from './Pagess/PostItem';
import Profile from './Pagess/Profile';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app-container">
          <nav>
            <div className="nav-content">
              <Link to="/" className="nav-brand">Campus Exchange</Link>
              <div className="nav-links">
                <Link to="/listings">Listings</Link>
                <Link to="/post-item">Post Item</Link>
                <Link to="/profile">Profile</Link>
              </div>
            </div>
          </nav>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/listings" element={<Listings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/post-item" element={<PostItem />} />
              <Route path="/item/:id" element={<ItemDetail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;