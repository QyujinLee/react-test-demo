import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1>REACT-TEST-DEMO</h1>
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </nav>
  );
}
