import React from "react";
import "../Styles/ServiceForm.css";

const ServiceForm = () => {
  return (
    <div className="service-request-form">
    <h4>Service Request Form</h4>
    <form>
      <div className="form-group">
        {/* <label>Service Type</label> */}
        <select>
          <option>Plumber</option>
          {/* Add other service options here */}
        </select>
      </div>
      <div className="form-group">
        {/* <label>Enter Name</label> */}
        <input type="text" placeholder="Enter Name" />
      </div>
      <div className="form-group">
        {/* <label>Enter Address</label> */}
        <input type="text" placeholder="Enter Address" />
      </div>
      <div className="form-group">
        {/* <label>Mobile Number</label> */}
        <div className="mobile-input ">
          {/* <span>+91</span> */}
          <input type="text" placeholder="Enter Mobile Number" />
        </div>
      </div>
      <div className="form-group">
        {/* <label>Date</label> */}
        <input type="date" />
      </div>
      <button  type="submit">Submit</button>
    </form>
    <p className="privacy-text"><em>100% privacy guaranteed</em></p>
  </div>
  );
};

export default ServiceForm;
