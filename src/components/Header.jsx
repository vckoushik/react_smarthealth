import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setLoggedInUser, emptyUserState } from "../redux/userAuthSlice";
import { useDispatch, useSelector } from "react-redux";
import {SD_Roles} from '../Utility/StaticDetail';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setLoggedInUser({ ...emptyUserState }));
    navigate("/login");
  };

  const userData = useSelector((state) => state.userAuthStore);

  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <span>Smart Health System</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate("/")}>
                  Home{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => navigate("/about")}
                >
                  {" "}
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => navigate("/departments")}
                >
                  Departments
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => navigate("/doctors")}
                >
                  Doctors <span className="sr-only">(current)</span>{" "}
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => navigate("/medicine")}
                >
                  Medicine <span className="sr-only">(current)</span>{" "}
                </a>
              </li>
              { userData.role.toUpperCase() === SD_Roles.ADMIN ? ( <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Admin
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#" onClick={()=>navigate("/doctor-panel")}>
                    Doctor Panel
                  </a>
                  <a className="dropdown-item" href="#" onClick={()=>navigate("/medicine-panel")}>
                    Medicines Panel
                  </a>
                  <a className="dropdown-item" href="#" onClick={()=>navigate("/medicalrecords-panel")}>
                    Medicial Records Panel
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#" onClick={()=>navigate("/appointments-panel")}>
                    Appointments
                  </a>
                </div>
              </li>):(<li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  More
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#" onClick={()=>navigate("/medicalrecords")}>
                   My Medicial Records
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#" onClick={()=>navigate("/appointments")}>
                    Appointments
                  </a>
                  {userData.role.toUpperCase() === SD_Roles.DOCTOR  && <a className="dropdown-item" href="#" onClick={()=>navigate("/appointments-panel")}>
                    Appointments Panel
                  </a>}
                </div>
              </li>)
                
              }
             
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleLogout}>
                  Logout
                </a>
              </li>
              <form className="form-inline">
                <button
                  className="btn  my-2 my-sm-0 nav_search-btn"
                  type="submit"
                >
                  <i
                    className="fa fa-search"
                    onClick={() => navigate("/search")}
                    aria-hidden="true"
                  ></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
