import React, { useState } from "react";
import '@/css/EmployeeForm.css'
import useEmployeeForm from "@/hooks/useEmployeeForm";
import Error from "../UI/Error";
import { useMain } from "../context/MainProvider";
const EmployeeForm = () => {
  const { state, setState, employees, setEmployees, count, setcount, formData, setFormData, handleChange, handleSubmit,btntext,setbtntext } = useEmployeeForm()
  const { error, setError } = useMain();
  return (
    <>
      {error && <Error message={error} />}
      <div className="form-container">
        <h2>Employee Entry Form</h2>
        <div className="form-row">
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label>Mobile:</label>
          <input
            name="mobile"
            type="number"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label>Date of Birth:</label>
          <input
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label>Joining Date:</label>
          <input
            name="joiningDate"
            type="date"
            value={formData.joiningDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-row">
          <label>Pincode:</label>
          <input
            name="pincode"
            type="number"
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>
        <button className="add-btn" onClick={handleSubmit}>
          {btntext}
        </button>
      </div>
    </>
  );
};

export default EmployeeForm;
