import { useRef,useState } from "react";
import Upload_Image_logo from "/src/assets/Upload Image.png"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Registration = ({setToken}) => {
    let [uploadprofileImage,setUploadprofileImage]=useState()
    const [value, setValue] = useState('');
    const [height, setHeight] = useState('auto');
    const uploadElement = useRef();
    const navigate = useNavigate();
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
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [confirmpassword,setconfirmpassword] = useState('');
// const []
const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Create a FormData object to hold the form data
  const formData = new FormData();
  if(password !== confirmpassword){
    console.log(password);
    console.log(confirmpassword);
    return toast.error("Your password does not match with the confirmed password");
  }
  // Append the values from the form fields
  formData.append('name', e.target.name.value);
  formData.append('email', e.target.email.value);
  formData.append('bio', e.target.bio.value); // Using the state value for bio
  formData.append('image', uploadprofileImage); // The uploaded image
  formData.append('skills', JSON.stringify(skills)); // Skills as a JSON string
  formData.append('interests', JSON.stringify(interests)); // Interests as a JSON string
  formData.append('password', e.target.password.value);
  // formData.append('cpassword', e.target.cpassword.value);
  formData.append('role', e.target.role.value);

  // Log the FormData entries to the console
  for (let [key, value] of formData.entries()) {
      console.log(`${key}`, value);
  }

  try {
      const response = await axios.post("https://mentorship-platform-server-2522.onrender.com/api/user/register", formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      });
      if(response.data.success){
        // console.log(response.data.token);
        // console.log(typeof setToken);
        toast.success("Account Created Successfully");
            setToken(response.data.token);
            navigate('/');
      }else{
        throw new Error(response.data.msg);
      }
      console.log(response);
  } catch (error) {
    toast.error(error.message);
      console.log(error);
  }
};
  return (
    <div className="container mt-4 mb-4">
      <h1 className="mb-2">Create Your Profile</h1>
      <form onSubmit={handleSubmit}>
        {/* Uploaded File */}
        <div className="d-flex flex-column">
          <img src={uploadprofileImage? URL.createObjectURL(uploadprofileImage):Upload_Image_logo} alt="" className="border border-dark-subtle rounded-circle mb-4 align-self-center object-fit-cover" width="180px" height="180px" onClick={handleupload}/>
       </div>

        {/* for Username*/}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username :</label>
          <input type="text" className="form-control" id="username" name="name" required placeholder="Enter your username"/>
        </div>

        {/* for email id */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address :</label>
          <input type="email" className="form-control" id="email" name="email" required placeholder="Enter your Email Address"/>
        </div>

        {/* Bio */}
        <div className="mb-3">
          <label htmlFor="divbio" className="form-label">Bio :</label>
          <textarea className="form-control" id="bio" name="bio" placeholder="Write a Bio" required onChange={handleOnChange} style={{height}} />
          {/* <textarea  style="overflow:hidden"></textarea> */}
        </div>

        {/* Upload image */}
        <div className="mb-3">
          <label htmlFor="profileImage" className="form-label">Upload your image :</label>
          <input className="form-control form-control-sm" id="profileImage" name="image" type="file" accept="image/png,image/jpeg,image/jpg" onChange={handleImageChange} ref={uploadElement}/>
        </div>

        {/* For Skills */}
        <div className="mb-1">
          <label htmlFor="skills" className="form-label">Skills :</label>
          <select
            className="form-select"
            id="skills" required
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
            id="interest" required
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

        {/* for password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password :</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required name= "password" placeholder="Enter your Password"/>
        </div>

        {/* for confirm password */}
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password :</label>
          <input type="password" className="form-control" id="cpassword" required value={confirmpassword} onChange={(e)=>{setconfirmpassword(e.target.value)}} placeholder="Enter your Password"/>
        </div>

        {/* Role */}
        <div className="mb-3">
            <label htmlFor="role" className="form-label">Role:</label>
            <select name="role" required id="role" className="form-select">
              <option value="">Select your role</option>
              {roleOptions.map((role)=>(
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
        </div>
        
        {/* Checkbox for agreement */}
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
          <label className="form-check-label" htmlFor="exampleCheck1">I have agreed to the terms and conditions</label>
        </div>

        {/* submit button */}
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
      
    </div>
  );
};

export default Registration;
