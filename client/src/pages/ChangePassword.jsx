const ChangePassword = () => {
  return (
    <div className="mx-auto p-2 container" style={{ marginTop: "50px" }}>
      <h1 className="mb-5">Change Password</h1>
      <form className="" style={{ marginTop: "80px" }}>
        <div className="row g-3 align-items-center mb-3">
          <div className="col-auto">
            <label htmlFor="inputPassword6" className="col-form-label">
             Current Password :  
            </label>
          </div>
          <div className="col-auto">
            <input
              type="password"
              id="current"
              className="form-control"
              aria-describedby="passwordHelpInline"
            />
          </div>
        </div>
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
            />
          </div>
          <div className="col-auto">
            <span id="passwordHelpInline" className="form-text">
              Must be 8-20 characters long.
            </span>
          </div>
        </div>
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
            />
          </div>
        </div>
        <button type="submit" className="btn btn-warning" id="confirm">
          Change password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
