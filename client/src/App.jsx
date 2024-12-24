import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Footer } from "./Components";
import {
  Registration,
  Login,
  EditProfile,
  ChangePassword,
  Home,
  About,
  Contact,
  Network,
  DeleteProfile,
} from "./pages";
import { useState, useEffect } from "react";
import axios from "axios";
import ProfileDescription from "./pages/ProfileDescription";
import { ToastContainer } from "react-toastify";
function App() {
  // fetching token from server and storing it in a useState
  const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : ""); 
  const [userData, setUserData] = useState({}); // storing user data
  let [networkdata, setNetworkdata] = useState([]); // storing the users data

  useEffect(() => {  // useEffect for token and userData
    // set the token from useState to the local storage so that it stays login in till we log out
    localStorage.setItem("token", token);
    const fetchData = async () => {
      // fetching data from server
      try {
        const response = await axios.get(
          "https://mentorconnect-server.onrender.com/api/user/getAuthUser",
          { headers: { token: token } }
        );
        if (response.data.success) {
          setUserData(response.data.result[0]);
        } else {
          throw new Error(response.data.msg);
        }
      } catch (e) {
        // console.log(e.message);
      }
    };
    //  if token is empty then it will fetch data from server
    if (token != "") {
      fetchData();
    }
  }, [token]);

  useEffect(() => {// useEffect to get the users data from server
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mentorconnect-server.onrender.com/api/user/getUsers"
        );
        if (response.data.success) {
          // if the response is success
          setNetworkdata(response.data.results);
        } else {
          throw new Error(response.data.msg); // throw error if the response is not success
        }
      } catch (e) {
        //  console.log(e.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {}, [token]);
  return (
    <>
      <Router>
        <ToastContainer />
        <NavBar token={token} setToken={setToken} profileImage={token && userData.image}/>
        <Routes>
          <Route path="/" element={<Home token={token} networkdata={networkdata} />}/>
          <Route path="/user/:userId" element={<ProfileDescription />} />
          <Route path="/signup" element={<Registration setToken={setToken} />}/>
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/edit" element={<EditProfile token={token} userData={userData} networkdata={networkdata} setUserData={setUserData} setNetworkdata={setNetworkdata} />} />
          <Route path="/changepass" element={<ChangePassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/network"element={<Network token={token} networkdata={networkdata} setNetworkdata={setNetworkdata}/>}/>
          <Route path="/deleteProfile" element={<DeleteProfile token={token} setUserData={setUserData}setToken={setToken}/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
