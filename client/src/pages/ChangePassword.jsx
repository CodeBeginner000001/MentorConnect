import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const ChangePassword = () => {
  // useStates for passwords
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = async (e) => { //handle the change password button action 
    e.preventDefault();
    try {
      if (currentPassword == "" || newPassword == "" || confirmpassword == "") {
        return toast.error("Please enter all the fields");
      }
      if (currentPassword == newPassword) {
        return toast.error(
          "Your new password should not be same as your current password"
        );
      }
      if (confirmpassword != newPassword) {
        return toast.error(
          "Your new password does not match with your confirmed password"
        );
      }
      const token = location.state?.token; // Check if token is available
      const response = await axios.put( // for updating the newpassword in the server
        "https://mentorconnect-server.onrender.com/api/user/updatePassword",
        { newPassword: newPassword },
        { headers: { token: token } }
      );
      if (response.data.success) { // if the password is updated successfully
        toast.success("Password Updated");
        navigate("/");
      } else {
        throw new Error(response.data.msg);
      }
    } catch (e) {
      toast.error(e.message);
    }
  };
  return (
    <div className="mx-auto p-2 container" style={{ marginTop: "50px" }}>
      <h1 className="mb-5">Change Password</h1>
      <form className="" style={{ marginTop: "80px" }}>
        {/* Current password input field */}
        <div className="row g-3 align-items-center mb-3">
          <div className="col-auto">
            <label htmlFor="inputPassword6" className="col-form-label">
              Current Password :
            </label>
            <input
              type="password"
              id="current"
              className="form-control"
              aria-describedby="passwordHelpInline"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
        </div>
        {/* new password input field */}
        <div className="row g-3 align-items-center mb-3">
          <div className="col-auto">
            <label htmlFor="inputPassword6" className="col-form-label">
              New Password :
            </label>
          </div>
          <div className="col-auto ms-4">
            <input
              type="password"
              id="new"
              className="form-control"
              aria-describedby="passwordHelpInline"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <span id="passwordHelpInline" className="form-text">
              Must be 8-20 characters long.
            </span>
          </div>
        </div>
        {/* confirm password input field */}
        <div className="row g-3 align-items-center mb-3" id="new">
          <div className="col-auto">
            <label htmlFor="inputPassword6" className="col-form-label">
              Confirm Password :
            </label>
          </div>
          <div className="col-auto">
            <input
              type="password"
              id="confirmpassword"
              className="form-control"
              aria-describedby="passwordHelpInline"
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
            />
          </div>
        </div>
        {/* change password button */}
        <button
          type="submit"
          className="btn btn-warning"
          onClick={handleClick}
          id="confirm"
        >
          Change password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
