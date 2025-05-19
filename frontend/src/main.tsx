import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.tsx'
import { Home } from './Home.tsx'
import { About } from './About.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Add more routes here as needed */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
