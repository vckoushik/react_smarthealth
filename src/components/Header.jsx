import React from 'react'
import { useNavigate } from "react-router-dom";
import { setLoggedInUser, emptyUserState} from '../redux/userAuthSlice';
import { useDispatch } from 'react-redux';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setLoggedInUser({ ...emptyUserState }));
    navigate("/login");
  };

  return (
   


    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <span>
              Smart Health System
            </span>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate("/")}>Home </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate("/about")}> About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate("/departments")}>Departments</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#" onClick={() => navigate("/doctors")}>Doctors <span className="sr-only">(current)</span> </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#" onClick={() => navigate("/medicine")}>Medicine <span className="sr-only">(current)</span> </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleLogout}>Logout</a>
              </li>
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" onClick={() => navigate("/search")} aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>

  )
}

export default Header