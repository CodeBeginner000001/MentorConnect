/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const ProfileCard = ({profilePic,name,bio,role,userId,token}) => {
  return (
    <>
      <Link to={token ? `user/${userId}` : '/login'}  className="card border border-dark-subtle" style={{width: "18rem"}}>
      <span className="position-absolute start-50 translate-middle badge rounded-pill text-bg-success" style={{top:"10px"}}>
        {role}
      </span>
        <img src={profilePic} className="card-img-top h-50" alt={profilePic} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {bio && bio.length>40? bio.slice(0,80): bio}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ProfileCard;
