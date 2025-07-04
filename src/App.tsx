import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NexusAILanding from './components/NexusAILanding';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NexusAILanding />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
