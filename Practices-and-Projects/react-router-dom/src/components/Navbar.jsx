import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      textTransform: isActive ? "uppercase" : "none",
    };
  };

  return (
    <div className="navbar">
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/blogs">
        Blogs
      </NavLink>
      <NavLink style={navLinkStyles} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default Navbar;
