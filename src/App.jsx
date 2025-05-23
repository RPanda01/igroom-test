import './css/App.css'
import { Link } from 'react-router-dom'
import ProfileCard from './pages/ProfileCard'

export default function App() {
  return (
    <>
      <nav style={{ display: 'flex', gap: '12px', padding: '12px' }}>
        <Link to="/me">Мой профиль</Link>
        <Link to="/other">Чужой профиль</Link>
      </nav>
    </>
  )
}