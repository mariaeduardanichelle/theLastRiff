import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Guitarras from './pages/Guitarras';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Guitarras />} />
      </Routes>
    </Router>
  );
}

export default App;
