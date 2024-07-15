import { NavLink } from 'react-router-dom'
import './styles.scss'

export default function BarraDeNavegacao() {
  return (
    <nav className='p-4 d-flex justify-content-between align-items-center'>
      <img src="/images/logo.png" alt="Logo Aluraflix" />
      <ul className='nav gap-4'>
        <li className='nav-item'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              [
                "btn px-5 text-uppercase fw-bold",
                isActive ? "navlink-active" : "btn-outline-light",
              ].join(' ').trim()
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
          to='/novo-video'
          className={({ isActive }) =>
            [
              "btn px-4 text-uppercase fw-bold",
              isActive ? "navlink-active" : "btn-outline-light",
            ].join(' ').trim()
          }
        >
          Novo vídeo
        </NavLink>
        </li>
      </ul>
    </nav>
  )
}