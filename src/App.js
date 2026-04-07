import './App.css'
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotesPage from './pages/NotesPage';
import CategoriesPage from './pages/CategoriesPage';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/" element={<NotesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
