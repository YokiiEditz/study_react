import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { AuthProvider, useAuth } from "./context/Auth";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import HomePage from "./pages/HomePage";
// import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Blogs from "./pages/Blogs";
import Recent from "./components/Recent";
import Feature from "./components/Feature";
import BlogPost from "./components/BlogPost";
import BlogDetails from "./components/BlogDetails";
import React from "react";
const LazyLogin = React.lazy(() => import("./pages/Login"));

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="login"
            element={
              <React.Suspense fallback="Loading page...">
                <LazyLogin />
              </React.Suspense>
            }
          />

          <Route path="blogs" element={<Blogs />}>
            <Route index element={<BlogPost />} />
            <Route path="recent" element={<Recent />} />
            <Route path="feature" element={<Feature />} />
            <Route path=":blogId" element={<BlogDetails />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

// export const Navbar = () => {
//   const auth = useAuth();

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>

//         <li>
//           <Link to="profile">Profile</Link>
//         </li>

//         {!auth.user && (
//           <li>
//             <Link to="login">Login</Link>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };
