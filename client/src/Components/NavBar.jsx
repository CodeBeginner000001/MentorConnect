import { useState, useEffect } from "react";
import logo from "/src/assets/logo.png";
import defaultImage from "/src/assets/default image.jpg";
import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";
const NavBar = ({token,setToken,profileImage}) => {
  const navigate = useNavigate(); // navigation to other pages
  const handleNavigatetosigup = ()=>{ // naviate to signup page when signup button is clicked
    navigate("/signup")
  }

  let [showprofile, setShowprofile] = useState(false); // userDashboard 
  let [isMobile, setIsMobile] = useState(window.innerWidth < 992);
 
  const handleClick = () => {  // show the profile image and drop down
    setShowprofile(!showprofile);
  };

  const handleloginClick = () => { // naviagte to login
    navigate("/login")
  };

  const handleResize = () => { // check the window size if the window size is less than 992px then set the isMobile to true
    setIsMobile(window.innerWidth < 992);
  };

  const handleEditprofile = ()=>{ // handle click when clicked on edit button
    setShowprofile(!showprofile);
    navigate("/edit")
  }

  const handleDeleteProfile = ()=>{ // handle click when clicked on delete button
    setShowprofile(!showprofile);
    navigate("/deleteProfile");
  }

  const handleLogout=()=>{ // handle click when clicked on logout button
    setShowprofile(!showprofile);
    setToken('');
    toast.success("Logout Successfull");
    navigate("/");
  }

  const handleChangepass = ()=>{ // handle click when clicked on change password button
    setShowprofile(!showprofile);
    navigate("/changepass",{ state: { token }})
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark pb-3" data-bs-theme="dark">
        <div className="container-fluid mx-4">
          {/* navbars profile logo and name */}
          <a className="navbar-brand d-flex justify-content-center align-items-center" href="/" > 
            <img src={logo} alt="Logo" width="34" height="32" className="d-inline-block align-text-top me-3"/>
            MentorConnect
          </a>
          {/* for mobile view */}
          <div className="d-flex">
            {/* User Dashboard when in mobile view */}
            <div className={isMobile ? "d-flex" : "d-none"}>
              {/* profile image */}
              <img
                src={profileImage ? profileImage :defaultImage}
                alt=""
                className={`border border-dark-subtle rounded-circle align-self-center object-fit-cover ${
                  token ? "d-flex me-4" : "d-none"
                }`}
                width="40px"
                height="40px"
                onClick={handleClick}
              />
              {/* for profile dropdown */}
              <div className={`d-flex flex-column gap-2 p-3 position-absolute showprofile text-white ${showprofile ? 'd-flex' : 'd-none'}`}>
                <p className="mb-0 text-center" type="button" onClick={handleEditprofile}>Edit Profile</p>
                <p className="mb-0 text-center" type="button" onClick={handleDeleteProfile}>Delete Profile</p>
                <p className="mb-0" type="button" onClick={handleChangepass}>Change password</p>
                <hr className="m-0 opacity-5" />
                <p className="mb-0" type="button" onClick={handleLogout}>Logout</p>
              </div>
            </div>
            {/* for menu button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          {/* for Windows view */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* navbar menu */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {/* Home */}
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/"> Home </Link>
              </li>
              {/* Network */}
              <li className="nav-item">
                <Link className="nav-link " to="/network"> Network </Link>
              </li>
              {/* abotut */}
              <li className="nav-item">
                <Link className="nav-link " to="/about"> About </Link>
              </li>
              {/* Contact */}
              <li className="nav-item"> 
                <Link className="nav-link " to="/contact"> Contact </Link>
              </li>
            </ul>
            {/* Showing button and if logined in the userDashboard */}
            <div className="d-flex gap-3">
              {/* create account button*/}
              <button
                type="button"
                className={`btn btn-warning ${token ? "d-none" : "d-flex"}`}
                onClick={handleNavigatetosigup}
              >
                Create Account
              </button>
              {/* Login button */}
              <button
                type="button"
                className={`btn btn-warning ${token ? "d-none" : "d-flex"}`}
                onClick={handleloginClick}
              >
                Login
              </button>
              {/* once logged in */}
              <div className={token ? "d-flex" : "d-none"}>
                {/* user image */}
              <img
                src={profileImage}
                alt=""
                className={`border border-dark-subtle rounded-circle align-self-center object-fit-cover cursor1 ${
                  isMobile ? token ? "d-none" : "d-flex":"d-flex"
                }`}
                width="40px"
                height="40px"
                onClick={handleClick}
              />
              {/* userDashboard menu */}
              <div className={`d-flex z-1 flex-column gap-2 p-3 position-absolute showprofile text-white ${showprofile ? 'd-flex' : 'd-none'}`}>
                <p className="mb-0 text-center" type="button" onClick={handleEditprofile}>Edit Profile</p>
                <p className="mb-0 text-center" type="button" onClick={handleDeleteProfile}>Delete Profile</p>
                <p className="mb-0" type="button" onClick={handleChangepass}>Change password</p>
                <hr className="m-0 opacity-5" />
                <p className="mb-0" type="button" onClick={handleLogout}>Logout</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;