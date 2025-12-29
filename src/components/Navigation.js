import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Blog
        </Link>
        <ul className="nav-menu">
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={location.pathname.startsWith('/blog') ? 'active' : ''}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={location.pathname.startsWith('/projects') ? 'active' : ''}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className={location.pathname === '/resume' ? 'active' : ''}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

