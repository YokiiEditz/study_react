import { Link, Outlet } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <br />
      <input type="text" />
      <br />
      <p>This is Blog Post Page!</p>

      <nav className="navbar">
        <Link to="recent">Recent posts</Link>
        <Link to="feature">feature posts</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Blogs;
