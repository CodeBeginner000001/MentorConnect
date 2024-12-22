/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const EditProfile = ({ token }) => {
  const navigate = useNavigate();
  let [uploadprofileImage, setUploadprofileImage] = useState(); // using useState for user to upload new image
  const uploadElement = useRef(); // using useRef to get the file input element
  const [value, setValue] = useState(""); // using useState for bio
  const [height, setHeight] = useState("auto"); // using useState to adjust the bio input field height
  const [userData, setUserData] = useState({}); // get the logged in user data

  const [skills, setSkills] = useState([]); // using useState to store the user's skills
  const [skillOptions, setSkillOptions] = useState([ // using useState to store the available skills
    "JavaScript",
    "React",
    "Angular",
    "Vue.js",
    "Node.js",
    "Python",
    "Java",
    "C++",
  ]);
  const [interests, setInterests] = useState([]); // using useState to store the user's interests
  const [interestOptions, setInterestOptions] = useState([ // using useState to store the available interests
    "Reading",
    "Swimming",
    "Lawn Tennis",
    "Travel",
    "Bike Riding",
    "Cricket",
    "Communication",
    "Mountain Climbing",
  ]);

  const [roleOptions, setRoleOptions] = useState(["Mentor", "Mentee"]); // using useState to store the available roles
  useEffect(() => { // to get the logged in user data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mentorship-platform-server-2522.onrender.com/api/user/getAuthUser",
          { headers: { token: token } }
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

  useEffect(() => { // to update the Skills and interest after fetching skills and interest from the server
    setSkills(userData.skills || []);
    setInterests(userData.interests || []);
  }, [userData]);


/* Note: The code in the handleupload and handleImageChange are same the difference is handleupload function allow
 us to use useRef and make refer to the html tag from where we can upload image and handleImageChange is used. 
 handleImageChange function allow us to use useState to set the UploadprofileImage
*/
  const handleupload = () => { // used for useref to upload the profile picture when clicked in the upload field
    uploadElement.current.click();
  };

  const handleImageChange = (e) => { // used to handle the change of the profile picture
    setUploadprofileImage(e.target.files[0]);
  };

  const handleOnChange = (e) => { // used to handle the bio input field and adjust height accordingly
    setValue(e.target.value);
    const newHeight = 1 + e.target.scrollHeight;
    setHeight(`${newHeight}px`);
    setUserData((prev) => ({ ...prev, bio: e.target.value }));
  };

  const handleAddSkill = (skill) => { // used to add the new skill to the skills array useState
    if (skill !== "") {
      setSkills([...skills, skill]);
    }
  };

  const handleRemoveSkill = (skill) => { // used to remove the skill from the skills array useState
    setSkills(skills.filter((s) => s !== skill));
  };
  
  const handleAddInterest = (interest) => { // used to add the new interest to the interests array useState
    if (interest !== "") {
      setInterests([...interests, interest]);
    }
  };

  const handleRemoveInterest = (interest) => { // used to remove the interest from the interests array useState
    setInterests(interests.filter((s) => s !== interest));
  };

  const handleSubmit = async (e) => { // used to handle the form submission
    try {
      e.preventDefault();

      const formData = new FormData(); // used to create a new form data object
      // Append user data to FormData
      formData.append("name", userData.name);
      formData.append("email", userData.email);
      formData.append("bio", userData.bio);
      formData.append("role", userData.role);
      formData.append("password", userData.password);
      // Append skills and interests as well
      formData.append("skills", JSON.stringify(skills));
      formData.append("interests", JSON.stringify(interests));

      // Append the uploaded image if it exists
      if (uploadprofileImage) {
        formData.append("image", uploadprofileImage);
      }
      /* console the object data with key and value */
      // for (const [key, value] of formData.entries()) {
      //   console.log(key, value); // This will log each key-value pair in the FormData
      // }
      const response = await axios.put( // used to send a put request to the server
        "https://mentorship-platform-server-2522.onrender.com/api/user/updateUser",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: token,
          },
        }
      );
      if (response.data.success) {
        setUserData(response.data.updatedUser);
        toast.success("User Updated Successfully");
        navigate("/");
      }
    } catch (e) {
      throw new Error(e.message);
    }
  };

  return (
    <div className="container mt-4 mb-4">
      <h1 className="mb-4">Edit Your Profile</h1>
      <form onSubmit={handleSubmit}>
        {/* Upload File  it is the reference to the file upload input field down below in the code*/}
        <div className="d-flex flex-column">
          <img
            src={
              uploadprofileImage
                ? URL.createObjectURL(uploadprofileImage)
                : userData.image
            }
            alt=""
            className="border border-dark-subtle rounded-circle mb-4 align-self-center object-fit-cover"
            width="180px"
            height="180px"
            onClick={handleupload}
          />
        </div>

        {/* for Username*/}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username :
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={userData.name || ""}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="Enter your username"
          />
        </div>

        {/* for email id */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address :
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={userData.email || ""}
            placeholder="Enter your Email Address"
            disabled
          />
        </div>

        {/* Bio */}
        <div className="mb-3">
          <label htmlFor="divbio" className="form-label">
            Bio :
          </label>
          <textarea
            className="form-control"
            id="bio"
            placeholder="Write a Bio"
            onChange={handleOnChange}
            value={userData.bio || ""}
            style={{ height }}
          />
          {/* <textarea  style="overflow:hidden"></textarea> */}
        </div>

        {/* Upload image */}
        <div className="mb-3">
          <label htmlFor="profileImage" className="form-label">
            Upload your image :
          </label>
          <input
            className="form-control form-control-sm"
            id="profileImage"
            name="profileImage"
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            onChange={handleImageChange}
            ref={uploadElement} // the upload file is refered here
          />
        </div>

        {/* For Skills */}
        <div className="mb-1">
          <label htmlFor="skills" className="form-label">
            Skills :
          </label>
          {/* using handleAddSkill */}
          <select
            className="form-select"
            id="skills"
            onChange={(e) => handleAddSkill(e.target.value)}
          >
            <option value="">Select a skill</option>
            {skillOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {/* using handleRemoveSkill */}
          <div className="mt-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="badge bg-dark me-2 mb-2"
                style={{ cursor: "pointer" }}
              >
                {skill}
                <i
                  className="fa-solid fa-xmark ms-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRemoveSkill(skill)}
                ></i>
              </span>
            ))}
          </div>
        </div>

        {/* For Interest */}
        <div className="mb-1">
          <label htmlFor="interest" className="form-label">
            Interests :
          </label>
          {/* using handleAddSkill */}
          <select
            className="form-select"
            id="interest"
            onChange={(e) => handleAddInterest(e.target.value)}
          >
            <option value="">Select an Interest </option>
            {interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {/* using handleRemoveSkill */}
          <div className="mt-3">
            {interests.map((interest, index) => (
              <span
                key={index}
                className="badge bg-dark me-2 mb-2"
                style={{ cursor: "pointer" }}
              >
                {interest}
                <i
                  className="fa-solid fa-xmark ms-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRemoveInterest(interest)}
                ></i>
              </span>
            ))}
          </div>
        </div>

        {/* Role */}
        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Role:
          </label>
          <select name="role" id="role" className="form-select">
            <option value={userData.role}>{userData.role}</option>
            {roleOptions
              .filter((role) => role !== userData.role) // Filter out the current role
              .map(
                (
                  role // Map over the filtered roles
                ) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                )
              )}
          </select>
        </div>

        {/* submit button */}
        <button type="submit" className="btn btn-warning"> Update </button>
      </form>
    </div>
  );
};

export default EditProfile;
