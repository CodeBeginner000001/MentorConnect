import { useEffect, useRef,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const EditProfile = ({token}) => {
  const navigate = useNavigate();
  let [uploadprofileImage,setUploadprofileImage]=useState();
    const [value, setValue] = useState('');
    const [height, setHeight] = useState('auto');
    const uploadElement = useRef();
    const [userData,setUserData] = useState({});
    useEffect(()=>{
      const fetchData = async () =>{
     try{
              const response = await axios.get("https://mentorship-platform-9tzl.onrender.com/api/user/getAuthUser",{headers:{"token":token}})
              // console.log(response.data.result[0]);
              if(response.data.success){
                setUserData(response.data.result[0]);
              }else{
                            throw new Error(response.data.msg);
              }
        }catch(e){
               console.log(e.message);
        }
      }
      fetchData();
    },[]);
    useEffect(()=>{
      setSkills(userData.skills || []);
      setInterests(userData.interests || []);
    },[userData])
    const handleupload = ()=>{
        uploadElement.current.click();
    }
    const handleImageChange = (e)=>{
        setUploadprofileImage(e.target.files[0]);
    }

    const handleOnChange = (e) => {
        setValue(e.target.value);
        const newHeight = 1 + e.target.scrollHeight;
        setHeight(`${newHeight}px`);
       setUserData((prev) => ({ ...prev, bio: e.target.value }))
      };

  const [skills, setSkills] = useState([]);
  const [skillOptions, setSkillOptions] = useState([
    'JavaScript',
    'React',
    'Angular',
    'Vue.js',
    'Node.js',
    'Python',
    'Java',
    'C++',
  ]);
  const handleAddSkill = (skill) => {
    if(skill !== "")
    {
        setSkills([...skills, skill]);
    }
  };

  const handleRemoveSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const [interests, setInterests] = useState([]);
  const [interestOptions, setInterestOptions] = useState([
    'Reading',
    'Swimming',
    'Lawn Tennis',
    'Travel',
    'Bike Riding',
    'Cricket',
    'Communication',
    'Mountain Climbing',
  ]);
  const handleAddInterest = (interest) => {
    if(interest !== "")
    {
        setInterests([...interests, interest]);
    }
  };

  const [roleOptions, setRoleOptions] = useState([
    'Mentor',
    'Mentee'
  ]);

  const handleRemoveInterest = (interest) => {
    setInterests(interests.filter((s) => s !== interest));
  };
 
  const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        
        const formData = new FormData();
        
        // Append user data to FormData
        formData.append('name', userData.name);
        formData.append('email', userData.email);
        formData.append('bio', userData.bio);
        formData.append('role', userData.role);
        formData.append('password', userData.password);
        // Append skills and interests as well
        formData.append('skills', JSON.stringify(skills));
        formData.append('interests', JSON.stringify(interests));
        
        // Append the uploaded image if it exists
        if (uploadprofileImage) {
            formData.append('image', uploadprofileImage);
        }
        for (const [key, value] of formData.entries()) {
          console.log(key, value); // This will log each key-value pair in the FormData
      }
        const response = await axios.put("https://mentorship-platform-9tzl.onrender.com/api/user/updateUser", formData, {
            headers: {
                "Content-Type": 'multipart/form-data',
                "token": token
            }
        });
        if(response.data.success)
        {
          console.log(response.data);
              setUserData(response.data.updatedUser);
              toast.success("User Updated Successfully");
          navigate("/");
        }
        // console.log(response);
    } catch (e) {
        console.log(e.message);
    }
}

  return (
    <div className="container mt-4 mb-4">
      <h1 className="mb-4">Edit Your Profile</h1>
      <form onSubmit={handleSubmit}>
        {/* Uploaded File */}
        <div className="d-flex flex-column">
          <img src={uploadprofileImage? URL.createObjectURL(uploadprofileImage):userData.image} alt="" className="border border-dark-subtle rounded-circle mb-4 align-self-center object-fit-cover" width="180px" height="180px" onClick={handleupload}/>
       </div>

        {/* for Username*/}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username :</label>
          <input type="text" className="form-control" id="username" name="username" value={userData.name}  onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))} placeholder="Enter your username"/>
        </div>

        {/* for email id */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address :</label>
          <input type="email" className="form-control" id="email" name="email" value={userData.email} placeholder="Enter your Email Address" disabled/>
        </div>

        {/* Bio */}
        <div className="mb-3">
          <label htmlFor="divbio" className="form-label">Bio :</label>
          <textarea className="form-control" id="bio" placeholder="Write a Bio" onChange={handleOnChange} value={userData.bio} style={{height}}/>
          {/* <textarea  style="overflow:hidden"></textarea> */}
        </div>

        {/* Upload image */}
        <div className="mb-3">
          <label htmlFor="profileImage" className="form-label">Upload your image :</label>
          <input className="form-control form-control-sm" id="profileImage" name="profileImage" type="file" accept="image/png,image/jpeg,image/jpg" onChange={handleImageChange} ref={uploadElement}/>
        </div>

        {/* For Skills */}
        <div className="mb-1">
          <label htmlFor="skills" className="form-label">Skills :</label>
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
          <div className="mt-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="badge bg-dark me-2 mb-2"
                style={{ cursor: 'pointer' }}
              >
                {skill}
                <i
                  className="fa-solid fa-xmark ms-2"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleRemoveSkill(skill)}
                ></i>
              </span>
            ))}
          </div>
        </div>

        {/* For Interest */}
        <div className="mb-1">
          <label htmlFor="interest" className="form-label">Interests :</label>
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
          <div className="mt-3">
            {interests.map((interest, index) => (
              <span
                key={index}
                className="badge bg-dark me-2 mb-2"
                style={{ cursor: 'pointer' }}
              >
                {interest}
                <i
                  className="fa-solid fa-xmark ms-2"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleRemoveInterest(interest)}
                ></i>
              </span>
            ))}
          </div>
        </div>

        {/* Role */}
<div className="mb-3">
    <label htmlFor="role" className="form-label">Role:</label>
    <select name="role" id="role" className="form-select">
        <option value={userData.role}>{userData.role}</option>
        {roleOptions
            .filter(role => role !== userData.role) // Filter out the current role
            .map(role => ( // Map over the filtered roles
                <option key={role} value={role}>{role}</option>
            ))}
    </select>
</div>

        {/* submit button */}
        <button type="submit" className="btn btn-warning">
          Update
        </button>
      </form>
      
    </div>
  );
};

export default EditProfile;
