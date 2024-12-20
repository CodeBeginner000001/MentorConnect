import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import {NavBar,Footer} from "./Components"
import {Registration,Login, EditProfile, ChangePassword,Home,About, Contact, Network} from "./pages"
import { useState ,useEffect} from "react"
import axios from "axios"
import ProfileDescription from "./pages/ProfileDescription"
function App() {
  const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');
  const [userData,setUserData] = useState({});
  useEffect(()=>{
    localStorage.setItem('token',token);
    console.log(token);
},[token])
useEffect(()=>{
  const fetchData = async () =>{
 try{
          const response = await axios.get("http://localhost:3000/api/user/getUser",{headers:{"token":token}})
          // console.log(response.data.result[0]);
          setUserData(response.data.result[0]);
    }catch(e){
           console.log(e.message);
    }
  }
  fetchData();
},[]);
  return (
    <>
    <Router>
      <NavBar token={token} setToken={setToken} profileImage={userData.image}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/network/user/:userId" element={<ProfileDescription />} />
        <Route path="/signup"  element={<Registration setToken={setToken} />}/>
        <Route path="/login"  element={<Login setToken={setToken} />}/>
        <Route path="/edit" element={<EditProfile token={token}/>}/>
        <Route path="/changepass" element={<ChangePassword/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/network" element={<Network token={token}/>}/>     
        <Route/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
