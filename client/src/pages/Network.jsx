import { ProfileCard } from "../Components";
import { useEffect, useState } from "react";
import axios from "axios";
const Network = ({token,networkdata,setNetworkdata}) => {
  let i=0;
  let [filterskill,setFilterskill]= useState([])
  let [filterinterest,setFilterinterest]= useState([])
  let [filterRole,setfilterRole] = useState([])
  const handleSkill = (e)=>{
    let skill=e.target.value;
    if(filterskill.includes(skill))
    {
      setFilterskill(filterskill.filter((item)=>item!==skill))
    }else
    {
      setFilterskill([...filterskill,skill]);
    }
  }
  const handleRole = (e)=>{
    let role=e.target.value;
    if(filterRole.includes(role))
    {
      setfilterRole(filterRole.filter((item)=>item!==role))
    }else
    {
      setfilterRole([...filterRole,role]);
    }
  }
  const handleInterest = (e)=>{
    let interest=e.target.value;
    if(filterinterest.includes(interest))
    {
      setFilterinterest(filterinterest.filter((item)=>item!==interest))
    }else
    {
      setFilterinterest([...filterinterest,interest]);
    }
  }
  const skills = [
    'JavaScript',
    'React',
    'Angular',
    'Vue.js',
    'Node.js',
    'Python',
    'Java',
    'C++']

  const interests = [
    'Reading',
    'Swimming',
    'Lawn Tennis',
    'Travel',
    'Bike Riding',
    'Cricket',
    'Communication',
    'Mountain Climbing',
  ];

  const roles = [
    "Mentor",
    "Mentee",
  ]
  const [filteredNetwork,setFilteredNetwork] = useState([]);
  useEffect(()=>{
         let newData = networkdata.slice();
         console.log(filterRole);
         console.log(filterskill);
         console.log(filterinterest);
         if(filterRole.length > 0){
          newData = newData.filter((item) => filterRole.includes(item.role));
         }
         if(filterinterest.length > 0){
          newData = newData.filter((item) =>  item.interests.some((interest) => filterinterest.includes(interest)));
         }
         if(filterskill.length > 0){
          console.log("skills section")
            console.log(newData);
            console.log(filterskill)
          newData = newData.filter((item) =>  item.skills.some((skill) => filterskill.includes(skill)));
          console.log(newData);
         }
         setFilteredNetwork(newData);
  },[networkdata,filterRole,filterinterest,filterskill])
  return (
    <>
      <div className="container d-flex flex-column flex-sm-row" >
        <div className="p-2 me-4 d-flex flex-column mt-5 row-gap-3 ">
          <h3>Filter</h3>
         <div className="d-flex column-gap-3 justify-content-evenly flex-sm-column row-gap-sm-3 overflow-x-scroll pb-3">
           {/* role */}
           <div className="border p-3 rounded-3">
            <h6 className="text-nowrap">Role</h6>
            <div>
              {
                roles.map((role)=>(
                  <div className="text-nowrap" key={role}>
                    <input type="checkbox" value={role} onClick={handleRole}/>
                    <label className="ms-2">{role}</label>
                  </div>
                ))
              }
            </div>
          </div>
          {/* skill */}
          <div className="border p-3 rounded-3">
            <h6 className="text-nowrap">Skills</h6>
            <div>
              {skills.map((skill)=>(
                <div className="text-nowrap" key={skill}>
                  <input type="checkbox" value={skill} onClick={handleSkill}/>
                  <label className="ms-2">{skill}</label>
                 </div>
              ))}
            </div>
          </div>
          {/* interest */}
          <div className="border p-3 rounded-3">
            <h6 className="text-nowrap">Interest</h6>
            <div>
              {
                interests.map((interest)=>(
                  <div className="text-nowrap" key={interest}>
                  <input type="checkbox" value={interest} onClick={handleInterest}/>
                  <label className="ms-2">{interest}</label>
                 </div>
                ))
              }
            </div>
          </div>
         </div>
        </div>
        <div>
          <div className="d-flex justify-content-between align-items-center pt-5 pb-3 flex-wrap">
            <h2>People Around World </h2>
          </div>
          <div className="d-flex flex-wrap column-gap-4 row-gap-5 ms-3 justify-content-center">
            {filteredNetwork && filteredNetwork.length > 0 && filteredNetwork.map((user) => (
              <ProfileCard
                profilePic={user.image}
                name={user.name}
                bio={user.bio}
                role={user.role}
                key={user.id}
                userId={user.id}
                token={token}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Network;
