// components/Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/" className="navbar-link">Counter</Link></li>
        <li><Link to="/goingout" className="navbar-link">Going Out</Link></li>
        <li><Link to="/addArray" className="navbar-link">Add Array</Link></li>
        <li><Link to="/parent" className="navbar-link">Display State Parent</Link></li>
        <li><Link to="/email" className="navbar-link">Email</Link></li>
        <li><Link to="/test" className='navbar-link'>Test</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
