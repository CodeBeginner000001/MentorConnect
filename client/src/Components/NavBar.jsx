import { useState, useEffect } from "react";
import logo from "/src/assets/logo.png";
import defaults from "/src/assets/default image.jpg";
import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";
const NavBar = ({token,setToken,profileImage}) => {
  const navigate = useNavigate();
  const handleNavigatetosigup = ()=>{
    navigate("/signup")
  }

  let [loginState, setLoginState] = useState(false);
  let [showprofile, setShowprofile] = useState(false);
  let [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const handleClick = () => { 
    setShowprofile(!showprofile);
  };

  const handleloginClick = () => {
    // if(token){
    //   setLoginState(!loginState);
    // }
    // if(showprofile)
    // {
    //   setShowprofile(!showprofile);
    // }
    navigate("/login")
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 992);
  };

  const handleEditprofile = ()=>{
    setShowprofile(!showprofile);
    navigate("/edit")
  }
  const handleDeleteProfile = ()=>{
    setShowprofile(!showprofile);
    navigate("/deleteProfile");
  }
  const handleLogout=()=>{
    // setLoginState(!loginState);
    setShowprofile(!showprofile);
    // localStorage.removeItem('token');
    setToken('');
    toast.success("Logout Successfull");
    navigate("/");
  }
  const handleChangepass = ()=>{
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
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              width="34"
              height="32"
              className="d-inline-block align-text-top me-4"
            />
            Bootstrap
          </a>
          <div className="d-flex">
          <div className={isMobile ? "d-flex" : "d-none"}>
              <img
                src={profileImage ? profileImage :defaults}
                alt=""
                className={`border border-dark-subtle rounded-circle align-self-center object-fit-cover ${
                  token ? "d-flex me-4" : "d-none"
                }`}
                width="40px"
                height="40px"
                onClick={handleClick}
              />
              <div className={`d-flex flex-column gap-2 p-3 position-absolute showprofile text-white ${showprofile ? 'd-flex' : 'd-none'}`}>
                <p className="mb-0 text-center" type="button" onClick={handleEditprofile}>Edit Profile</p>
                <p className="mb-0 text-center" type="button" onClick={handleDeleteProfile}>Delete Profile</p>
                <p className="mb-0" type="button" onClick={handleChangepass}>Change password</p>
                <hr className="m-0 opacity-5" />
                <p className="mb-0" type="button" onClick={handleLogout}>Logout</p>
              </div>
            </div>
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/network">
                  Network
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex gap-3">
              <button
                type="button"
                className={`btn btn-warning ${token ? "d-none" : "d-flex"}`}
                onClick={handleNavigatetosigup}
              >
                Create Account
              </button>
              <button
                type="button"
                className={`btn btn-warning ${token ? "d-none" : "d-flex"}`}
                onClick={handleloginClick}
              >
                Login
              </button>
              <div className={token ? "d-flex" : "d-none"}>
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