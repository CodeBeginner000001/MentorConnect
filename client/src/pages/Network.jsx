import { ProfileCard } from "../Components";
import { useEffect, useState } from "react";
import axios from "axios";
const Network = ({ token, networkdata, setNetworkdata }) => {
  // useState for Filtering the data based on skills, interests and roles
  let [filterskill, setFilterskill] = useState([]);
  let [filterinterest, setFilterinterest] = useState([]);
  let [filterRole, setfilterRole] = useState([]);
  // useState for filtering the network data
  const [filteredNetwork, setFilteredNetwork] = useState([]);
  const handleSkill = (e) => { // handle the skill filter
    let skill = e.target.value;
    // check if skill exists in the filterSkill array and if exists then remove
    if (filterskill.includes(skill)) {
      setFilterskill(filterskill.filter((item) => item !== skill));
    } else {
      // else then add in the filterskill
      setFilterskill([...filterskill, skill]);
    }
  };
  const handleRole = (e) => { // handle the role filter
    let role = e.target.value;
    // check if role exists in the filterRole array and if exists then remove
    if (filterRole.includes(role)) {
      setfilterRole(filterRole.filter((item) => item !== role));
    } else {
      //else then add in the filterRole
      setfilterRole([...filterRole, role]);
    }
  };
  const handleInterest = (e) => { // handle the interest filter
    let interest = e.target.value;
    // check if interest exists in the filterInterest array and if exists then remove
    if (filterinterest.includes(interest)) {
      setFilterinterest(filterinterest.filter((item) => item !== interest));
    } else {
      // else then add in the filterInterest
      setFilterinterest([...filterinterest, interest]);
    }
  };
  // skill options available that can be filtered
  const skills = [
    "JavaScript",
    "React",
    "Angular",
    "Vue.js",
    "Node.js",
    "Python",
    "Java",
    "C++",
  ];
  // interest options available that can be filtered
  const interests = [
    "Reading",
    "Swimming",
    "Lawn Tennis",
    "Travel",
    "Bike Riding",
    "Cricket",
    "Communication",
    "Mountain Climbing",
  ];
  // role options available that can be filtered
  const roles = ["Mentor", "Mentee"];
  useEffect(() => {// reload the page when the dependencies changes
    let newData = networkdata.slice(); // used to make a copy of the network data
    //  if the filterRole array length is greater than 0 then filter the network data based on the role
    if (filterRole.length > 0) {
      newData = newData.filter((item) => filterRole.includes(item.role));
    }
    // if the filterInterest array length is greater than 0 then filter the network data based on the interest
    if (filterinterest.length > 0) {
      newData = newData.filter((item) =>
        item.interests.some((interest) => filterinterest.includes(interest))
      );
    }
    // if the filterSkill array length is greater than 0 then filter the network data based on the skill
    if (filterskill.length > 0) {
      newData = newData.filter((item) =>
        item.skills.some((skill) => filterskill.includes(skill))
      );
    }
    setFilteredNetwork(newData);
  }, [networkdata, filterRole, filterinterest, filterskill]);
  return (
    <>
      <div className="container d-flex flex-column flex-sm-row">
        {/* for filter */}
        <div className="p-2 me-4 d-flex flex-column mt-5 row-gap-3 ">
          <h3>Filter</h3>
          <div className="d-flex column-gap-3 justify-content-evenly flex-sm-column row-gap-sm-3 overflow-x-scroll pb-3">
            {/* role */}
            <div className="border p-3 rounded-3">
              <h6 className="text-nowrap">Role</h6>
              <div>
                {roles.map((role) => (
                  <div className="text-nowrap" key={role}>
                    <input type="checkbox" value={role} onClick={handleRole} />
                    <label className="ms-2">{role}</label>
                  </div>
                ))}
              </div>
            </div>
            {/* skill */}
            <div className="border p-3 rounded-3">
              <h6 className="text-nowrap">Skills</h6>
              <div>
                {skills.map((skill) => (
                  <div className="text-nowrap" key={skill}>
                    <input
                      type="checkbox"
                      value={skill}
                      onClick={handleSkill}
                    />
                    <label className="ms-2">{skill}</label>
                  </div>
                ))}
              </div>
            </div>
            {/* interest */}
            <div className="border p-3 rounded-3">
              <h6 className="text-nowrap">Interest</h6>
              <div>
                {interests.map((interest) => (
                  <div className="text-nowrap" key={interest}>
                    <input
                      type="checkbox"
                      value={interest}
                      onClick={handleInterest}
                    />
                    <label className="ms-2">{interest}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* for showing the network card */}
        <div>
          <div className="d-flex justify-content-between align-items-center pt-5 pb-3 flex-wrap">
            <h2>People Around World </h2>
          </div>
          <div className="d-flex flex-wrap column-gap-4 row-gap-5 ms-3 justify-content-center">
            {filteredNetwork &&
              filteredNetwork.length > 0 &&
              filteredNetwork.map((user) => (
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
