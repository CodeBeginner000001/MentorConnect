import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const handlesubmit = async (e) => { // handle the submit button
    e.preventDefault();
    try {
      const formData = new FormData(); // create a new form data object
      // append the data in the form data object
      formData.append("email", e.target.email.value); // Use e.target.email.value
      formData.append("password", e.target.password.value); // Use e.target.password.value

      // // Log form data
      // for (let [key, value] of formData.entries()) {
      //   console.log(`${key}`, value);
      // }

      const response = await axios.post( // send a post request to the server
        "https://mentorconnect-server.onrender.com/api/user/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        setToken(response.data.token);
        toast.success("Login Successfull");
        navigate("/");
      } else {
        throw new Error(response.data.msg);
      }
    } catch (err) {
      toast.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Login Your Account</h1>
      <form onSubmit={handlesubmit}>
        {/* Email input field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
          />
        </div>
        {/* Password input field */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        {/* Create an Account */}
        <div className="mb-3">
          <p>
            {" "}
            Create an Account ? <Link to="/signup">Sign up</Link>
          </p>
        </div>
        {/* Submit button */}
        <button type="submit" className="btn btn-warning">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
