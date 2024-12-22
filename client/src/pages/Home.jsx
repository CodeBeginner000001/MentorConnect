/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileCard } from "/src/Components";
const Home = ({ networkdata, token }) => {
  const navigate = useNavigate();
let i = 0;
  const handleExplore = () => {
    // used for the Explore Button
    if (token === "") {
      navigate("/login");
    } else {
      navigate("/network");
    }
  };
  // useState for Mentor and Mentee
  let [mentor, setMentor] = useState([]);
  let [mentee, setMentee] = useState([]);

  useEffect(() => {
    //filter the network data and setting the useState depending upon the role
    let response = networkdata.filter((el) => {
      return el.role == "Mentor";
    });
    setMentor(response.slice(0, 6));
    let response1 = networkdata.filter((el) => {
      return el.role == "Mentee";
    });
    setMentee(response1.slice(0, 6));
  }, [networkdata]);

  return (
    <>
      <div className="img-fluid background w-auto d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-white opacity-100 container w-auto lh-sm homeheading">
          Mentorship that Inspires, Empowers, and Transforms.
        </h1>
        {/* Explore button */}
        <button
          className="btn btn-outline-warning py-2 px-5 fs-5 mt-5"
          onClick={handleExplore}
        >
          Explore
        </button>
      </div>
      {/* for Mentor */}
      <div className="container mt-5 d-flex flex-column justify-content-center align-items-center row-gap-4 ">
        <h1>Our Mentors</h1>
        <div
          className="d-flex  overflow-x-scroll px-3 pb-3 justify-content-xl-center"
          style={{ width: "100vw" }}
        >
          {/* show the mentor cards using the mentor data */}
          <div className="d-flex flex-row gap-4">
            {mentor.map((user) => (
              <ProfileCard
                profilePic={user.image}
                name={user.name}
                bio={user.bio}
                role={user.role}
                key={i++}
                userId={user.id}
                token={token}
              />
            ))}
          </div>
        </div>
      </div>
      {/* For Mentee */}
      <div>
        <div className="container mt-4 d-flex flex-column justify-content-center align-items-center row-gap-4">
        <h1>Our Mentee</h1>
          {/* show the mentor cards using the mentor data */}
          <div
            className="d-flex overflow-x-scroll px-3 pb-3 justify-content-xl-center"
            style={{ width: "100vw" }}
          >
            <div className="d-flex flex-row gap-4">
              {mentee.map((user) => (
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
      </div>
    </>
  );
};

export default Home;
