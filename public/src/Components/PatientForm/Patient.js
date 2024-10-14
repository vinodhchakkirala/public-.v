import React, { useState } from 'react';
import './Patient.css';

function PatientForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    email: '',
    weight: '',
    temperature: '',
    dob: '',
    phone: '',
    altPhone: '',
    bloodGroup: '',
    address: '',
    Signature:'',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      gender: '',
      age: '',
      email: '',
      weight: '',
      temperature: '',
      dob: '',
      phone: '',
      altPhone: '',
      bloodGroup: '',
      address: '',
      Signature:'',
    });
  };

  return (
    <div className="patient-form">
      <h2>Patient Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>First Name *</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter Firstname" required />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter Lastname" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Gender *</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Age *</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Enter Age" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" required />
          </div>
          <div className="form-group">
            <label>Weight (kg) *</label>
            <input type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="Enter Weight" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Temperature (°C) *</label>
            <input type="number" name="temperature" value={formData.temperature} onChange={handleChange} placeholder="Enter Temperature" required />
          </div>
          <div className="form-group">
            <label>Date of Birth *</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone Number *</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Phone Number" required />
          </div>
          <div className="form-group">
            <label>Alternate Phone Number</label>
            <input type="tel" name="altPhone" value={formData.altPhone} onChange={handleChange} placeholder="Enter Alternate Phone" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Blood Group *</label>
            <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Address *</label>
          <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Enter Address" required />
        </div>
        <div className="form-group">
          <label>Signature *</label>
          <input type="text"name="Signature" value={formData.Signature} onChange={handleChange} placeholder="Enter Signature" required />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
        </div>
      
      </form>
    </div>
  );
}

export default PatientForm;
