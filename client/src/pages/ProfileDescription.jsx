import { useEffect, useState } from "react";
import defaultImage from "/src/assets/default image.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";
const ProfileDescription = () => {
  // useParams to get the id from the url
  const { userId } = useParams();
  // useState to store the user Data from the url
  const [userData, setUserData] = useState({});
  useEffect(() => {// get the user data from the server based on the id
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://mentorconnect-server.onrender.com/api/user/getUser/${userId}`
        );
        if (response.data.success) {
          setUserData(response.data.result[0]);
        } else {
          throw new Error(response.data.msg);
        }
      } catch (e) {
        throw new Error(e.message);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {userData && (
        <div className="m-5 px-5">
          {/* used for img, name and role */}
          <div className="d-flex flex-column flex-md-row row-gap-4 justify-content-between align-items-center px-5">
            <img
              src={userData.image ? userData.image : defaultImage}
              className="rounded-circle"
              alt="..."
              width="300px"
              height="300px"
            />
            <div className="d-flex flex-column">
              <h1>{userData.name}</h1>
              <span className="badge text-bg-warning align-self-end px-4 fs-6 rounded-5 text-white">
                {userData.role}
              </span>
            </div>
          </div>
          {/* used for bio, skills and interest */}
          <div className="mt-5">
            {/* Bio */}
            <div>
              <h3>Bio</h3>
              <p>{userData.bio}</p>
            </div>
            <div className="d-flex justify-content-between mt-5 flex-column flex-md-row row-gap-5 ">
              {/* for Skills */}
              <div>
                <h3>Skills</h3>
                <div className="d-flex gap-3">
                  {userData.skills &&
                    userData.skills.length > 0 &&
                    userData.skills.map((skill) => {
                      return (
                        <li
                          key={skill}
                          className="me-2"
                          style={{ color: "#ffc107" }}
                        >
                          <span
                            style={{ marginLeft: "-8px", color: "black" }}
                            className="text-nowrap"
                          >
                            {skill}
                          </span>
                        </li>
                      );
                    })}
                </div>
              </div>
              {/* for Interest */}
              <div>
                <h3>Interests</h3>
                <div className="d-flex gap-3">
                  {userData.interests &&
                    userData.interests.length > 0 &&
                    userData.interests.map((interest) => {
                      return (
                        <li
                          key={interest}
                          className="me-2"
                          style={{ color: "#ffc107" }}
                        >
                          <span
                            style={{ marginLeft: "-8px", color: "black" }}
                            className="text-nowrap"
                          >
                            {interest}
                          </span>
                        </li>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDescription;
