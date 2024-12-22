import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import {NavBar,Footer} from "./Components"
import {Registration,Login, EditProfile, ChangePassword,Home,About, Contact, Network,DeleteProfile} from "./pages"
import { useState ,useEffect} from "react"
import axios from "axios"
import ProfileDescription from "./pages/ProfileDescription";
import { ToastContainer } from 'react-toastify';
function App() {
  const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');
  const [userData,setUserData] = useState({});
  useEffect(()=>{
    localStorage.setItem('token',token);
    console.log(token);
},[token])
let [networkdata, setNetworkdata] = useState([]);
useEffect(()=>{
 const fetchData = async () =>{
   try{
     const response = await axios.get('https://mentorship-platform-9tzl.onrender.com/api/user/getUsers');
     if(response.data.success){
        setNetworkdata(response.data.results);
       console.log(response.data.results);
     }else{
       throw new Error(response.data.msg);
     }
    
   }catch(e){
     console.log(e.message);
   }
 }
 fetchData();
},[])
useEffect(()=>{
  const fetchData = async () =>{
 try{
          const response = await axios.get("https://mentorship-platform-9tzl.onrender.com/api/user/getAuthUser",{headers:{"token":token}})
          // console.log(response.data.result[0]);
          if(response.data.success){
        // console.log(response.data);
          setUserData(response.data.result[0]);
          }else{
            throw new Error(response.data.msg);
          }
    }catch(e){
           console.log(e.message);
    }
  }
  if(token != ''){
   fetchData();
  }
},[]);
  return (
    <>
    <Router>
      <ToastContainer />
    <NavBar token={token} setToken={setToken} profileImage={token && userData.image}/>
      <Routes>
        <Route path="/" element={<Home token={token} networkdata={networkdata}/>}/>
        <Route path="/user/:userId" element={<ProfileDescription />} />
        <Route path="/signup"  element={<Registration setToken={setToken} />}/>
        <Route path="/login"  element={<Login setToken={setToken} />}/>
        <Route path="/edit" element={<EditProfile token={token}/>}/>
        <Route path="/changepass" element={<ChangePassword/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/network" element={<Network token={token} networkdata={networkdata} setNetworkdata={setNetworkdata}/>}/>   
        <Route path="/deleteProfile" element={<DeleteProfile token={token} setUserData={setUserData} setToken={setToken} />} />  
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
