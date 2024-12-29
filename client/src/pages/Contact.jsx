import phone from "/src/assets/phone.png";
import mail from "/src/assets/Mail.png";
const Contact = () => {
  return (
    <div className="img-fluid background">
      <div className="px-3 about">
        <div className=" container mx-auto card bg-white text-wrap px-5 py-2 d-flex rounded-5 bg-opacity-50">
          <h1 className="align-self-center mb-4 aboutheading ">Contact Us</h1>
          <p className="aboutpara">
            Contact us to connect with mentors and mentees on our platform.
            Whether youre seeking guidance or looking to share your expertise,
            our platform makes it easy to reach out and start meaningful
            conversations that lead to personal and professional growth.
          </p>
          <div className="d-flex justify-content-between mb-3 mb-sm-5 px-3 px-sm-5 flex-column flex-md-row">
            <div className="d-flex align-items-center mb-3">
              <img src={phone} alt="phone" />
              <p className="mt-3 ms-2">85270XXXXX</p>
            </div>
            <div className="d-flex align-items-center">
              <img src={mail} alt="mail" />
              <p className="mt-3 ms-2">snehagupta7385@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
