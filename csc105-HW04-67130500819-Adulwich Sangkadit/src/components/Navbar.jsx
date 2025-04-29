import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-blue-700 text-white p-4 flex justify-center space-x-10 shadow-lg">
      <NavLink 
        to="/" 
        end 
        className="px-4 py-2 hover:bg-blue-800 rounded transition-all duration-300"
      >
        Home
      </NavLink>
      <NavLink 
        to="/fav" 
        className="px-4 py-2 hover:bg-blue-800 rounded transition-all duration-300"
      >
        Favorites
      </NavLink>
      <NavLink 
        to="/login" 
        className="px-4 py-2 hover:bg-blue-800 rounded transition-all duration-300"
      >
        Login
      </NavLink>
    </nav>
  );
}

export default Navbar;
