// import React from 'react'

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const DeleteProfile = ({token,setUserData,setToken}) => {
    const navigate = useNavigate();
    const handleDelete = async () =>{
        try{
            const response = await axios.delete('https://mentorship-platform-server-2522.onrender.com/api/user/deleteUser',{headers:{"token":token}});
            if(response.data.success){
                toast.success("User deleted successfully");
                setToken('');
                setUserData({});
                     navigate('/signup');
            }else{
                throw new Error(response.data.msg);
            }
        }catch(e){
            toast.error(e.message);
        }
    }
  return (
    <>
    <div className="container d-flex flex-column justify-content-center align-items-center gap-4" style={{height:"70vh",width:"100vw",margin:'auto'}}>
    <h1 className="fs-4">Are you sure you want to delete this profile?</h1>
    <div className="d-flex gap-3">
    <button className="btn btn-warning" onClick={handleDelete}>Yes</button>
    <button className="btn btn-dark" onClick={()=>{navigate('/')}}>No</button>
    </div>
    </div>
    </>
  )
}

export default DeleteProfile;