import { useEffect, useState } from "react"
import logo from "../assets/Two People Greeting.jpg"
import axios from "axios"
import { useParams } from "react-router-dom"

const ProfileDescription = () => {
const {userId} = useParams();
const [userData,setUserData] = useState({});
  useEffect(()=>{
    const fetchData = async () =>{
              try{
                      const response = await axios.get(`https://mentorship-platform-9tzl.onrender.com/api/user/getUser/${userId}`);
                      if(response.data.success){
                        setUserData(response.data.result[0]);
                        console.log(response.data.result[0]);
                      }else{
                        throw new Error(response.data.msg);
                      }
              }catch(e){
                console.log(e.message);
              }
    }
    fetchData();
  },[])
  return (
    <>
    {userData && <div className="m-5 px-5">
    <div className="d-flex flex-column flex-md-row row-gap-4 justify-content-between align-items-center px-5">
    <img src={userData.image} className="rounded-circle" alt="..." width="300px" height="300px"/>
    <div className="d-flex flex-column">
      <h1>{userData.name}</h1>
      <span className="badge text-bg-warning align-self-end px-4 fs-6 rounded-5 text-white">{userData.role}</span>
    </div>
    </div>
    <div className="mt-5">
      <div>
          <h3>Bio</h3>
          <p>{userData.bio}</p>
      </div>
      <div className="d-flex justify-content-between mt-5 flex-column flex-md-row row-gap-5 ">
          <div className="">
              <h3>Skills</h3>
              <div className="d-flex gap-3">
                {userData.skills && userData.skills.length > 0 && userData.skills.map((skill)=>{
                  return (
                          <div key={skill}>
                          <span className="px-2 rounded-circle bg-warning me-1"></span>
                          <span>{skill}</span>
                          </div> 
                  )
                })}
                  {/* <div>
                  <span className="px-2 rounded-circle bg-warning me-1"></span>
                  <span>hello</span>
                  </div>
                  <div>
                  <span className="px-2 rounded-circle bg-warning me-1"></span>
                  <span>hello</span>
                  </div> */}
              </div>
          </div>
          <div>
              <h3>Interests</h3>
              <div className="d-flex gap-3">
              {userData.interests && userData.interests.length > 0 && userData.interests.map((interest)=>{
                return (
                          <div key={interest}>
                          <span className="px-2 rounded-circle bg-warning me-1"></span>
                          <span>{interest}</span>
                          </div> 
                )
                })}
                  {/* <div>
                  <span className="px-2 rounded-circle bg-warning me-1"></span>
                  <span>byeecjnee</span>
                  </div>
                  <div>
                  <span className="px-2 rounded-circle bg-warning me-1"></span>
                  <span>byeefcjnfcj</span>
                  </div> */}
              </div>
          </div>
      </div>
    </div>
  </div>}
    </>
   
  )
}

export default ProfileDescription