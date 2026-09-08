import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/home.css';
import './styles/auth.css';
import './styles/onboarding.css';
import './styles/student.css';
import './styles/academia.css';
import './styles/industry.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
