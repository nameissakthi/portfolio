import './Sidebar.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="menulinks">
        <ul>
          <li>
            <button>
              <Link to="/">Home</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/About">About</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/Projects">Projects</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/Contact">Contact</Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar