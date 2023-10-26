import { Link } from "react-router-dom";
import navCSS from '../cssModules/nav.module.css';

const Navbar = () => {
  return (
    <nav className={navCSS["navbar"]}>
      <h1>Shift Scheduler</h1>
      <div className={navCSS["links"]}>
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#7591ab',
          borderRadius: '8px' 
        }}>Create Shift</Link>
      </div>
    </nav>
  );
}
export default Navbar;