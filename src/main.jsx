import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import OtherProfile from './pages/OtherProfile.jsx'
import ProfileCard from './pages/ProfileCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/me" element={<ProfileCard />} />
        <Route path="/other" element={<OtherProfile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
