import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="sticky top-0 left-0 right-0 z-10 bg-white shadow drop-shadow-sm px-4 py-3">
    <nav className="flex items-center justify-between">
      <div className="uppercase">
        <h3>QS React</h3>
      </div>
      <ul className="flex items-center justify-end gap-3">
        <li>
          <NavLink className="font-bold" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="font-bold" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
