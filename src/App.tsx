import { Router } from '@/routes/Router';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
