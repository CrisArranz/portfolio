import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/home';

export const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}