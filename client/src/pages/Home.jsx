import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {ProfileCard} from "/src/Components"
import profilePic from "/src/assets/Two People Greeting.jpg";
const Home = () => {
  const navigate = useNavigate();
  const handleExplore = ()=>{
    navigate("/login")
  }
  let i=0;
  let [somementor,setSomementor] = useState([]);
  let [somementee,setSomementee] = useState([]);
  let [networkdata, setNetworkdata] = useState([
      {
        name: "Adarsh Goyal",
        profilePic: profilePic,
        bio: "vcoeuwvcewcvewuvwveruyvewrcewuyvcuoevwicvewcvweicyewvcuywevuycvowevceuwcyewceribwlweewbewiewreiblewriubewir",
        role: "mentor",
      },
      {
        name: "Adarsh Goyal",
        profilePic: profilePic,
        bio: "vcoeuwvcewcvewuvwveruyvewrcewuyvcuoevwicvewcvweicyewvcuywevuycvowevceuwcyewceribwlweewbewiewreiblewriubewir",
        role: "mentor",
      },
      {
        name: "Adarsh Goyal",
        profilePic: profilePic,
        bio: "vcoeuwvcewcvewuvwveruyvewrcewuyvcuoevwicvewcvweicyewvcuywevuycvowevceuwcyewceribwlweewbewiewreiblewriubewir",
        role: "mentor",
      },
      {
        name: "Adarsh Goyal",
        profilePic: profilePic,
        bio: "vcoeuwvcewcvewuvwveruyvewrcewuyvcuoevwicvewcvweicyewvcuywevuycvowevceuwcyewceribwlweewbewiewreiblewriubewir",
        role: "mentor",
      },
    ]);
  return (
    <>
    <div className="img-fluid background w-auto d-flex flex-column align-items-center justify-content-center">
      <h1 className="text-white opacity-75 container w-auto lh-sm homeheading">Mentorship that Inspires, Empowers, and Transforms.</h1>
      <button className="btn btn-outline-warning py-2 px-5 fs-5 mt-5" onClick={handleExplore}>Explore</button>
    </div>
    <div className="container mt-5 d-flex flex-column justify-content-center align-items-center row-gap-4 ">
      <h1>Our Mentors</h1>
      <div className="d-flex  overflow-x-scroll px-3 pb-3 justify-content-xl-center" style={{width:"100vw"}} >
      <div className="d-flex flex-row gap-4">
      {networkdata.map((user) => (
              <ProfileCard
                profilePic={user.profilePic}
                name={user.name}
                bio={user.bio}
                role={user.role}
                key={i++}
              />
            ))}
      </div>
      </div>
    </div>
    <div>
      <div className="container mt-4 d-flex flex-column justify-content-center align-items-center row-gap-4">
      <h1>Our Mentee</h1>
      <div className="d-flex overflow-x-scroll px-3 pb-3 justify-content-xl-center" style={{width:"100vw"}}>
      <div className="d-flex flex-row gap-4">
      {networkdata.map((user) => (
              <ProfileCard
                profilePic={user.profilePic}
                name={user.name}
                bio={user.bio}
                role={user.role}
                key={i++}
              />
            ))}
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Home
