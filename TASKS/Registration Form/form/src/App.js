import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom hook for form validation
const useValidation = (initialState, validations) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validations(values));
    setIsSubmitting(true);
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};

// Validation rules
const validate = (values) => {
  let errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = 'First Name is required';
  } else if (values.firstName.length > 4) {
    errors.firstName = 'First Name must be 4 characters or less';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  }

  // Add validations for other fields...

  return errors;
};

const RegistrationForm = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    address: '',
    town: '',
    region: '',
    postcode: '',
    county: '',
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useValidation(
    initialState,
    validate
  );

  // Alert message on successful submission
  const showSuccessAlert = () => {
    alert('Registration Successful!');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit}>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {isSubmitting && errors.email && <p className="text-danger">{errors.email}</p>}
        </div>


        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>


        {/* Confirm Password */}
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
          />
        </div>


        {/* First Name */}
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          {isSubmitting && errors.firstName && <p className="text-danger">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </div>


        {/* Phone Number */}
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number:
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
          />
          {isSubmitting && errors.phoneNumber && <p className="text-danger">{errors.phoneNumber}</p>}
        </div>

        {/* Address */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            rows="3"
            value={values.address}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Town */}
        <div className="mb-3">
          <label htmlFor="town" className="form-label">
            Town:
          </label>
          <input
            type="text"
            className="form-control"
            id="town"
            name="town"
            value={values.town}
            onChange={handleChange}
          />
          {isSubmitting && errors.town && <p className="text-danger">{errors.town}</p>}
        </div>



        {/* Region */}
        <div className="mb-3">
          <label htmlFor="region" className="form-label">
            Region:
          </label>
          <input
            type="text"
            className="form-control"
            id="region"
            name="region"
            value={values.region}
            onChange={handleChange}
          />
          {isSubmitting && errors.region && <p className="text-danger">{errors.region}</p>}
        </div>

        {/* Postcode/ZIP */}
        <div className="mb-3">
          <label htmlFor="postcode" className="form-label">
            Postcode/ZIP:
          </label>
          <input
            type="text"
            className="form-control"
            id="postcode"
            name="postcode"
            value={values.postcode}
            onChange={handleChange}
          />
          {isSubmitting && errors.postcode && <p className="text-danger">{errors.postcode}</p>}
        </div>

        {/* Country */}
        <div className="mb-3">
          <label htmlFor="county" className="form-label">
            Country:
          </label>
          <input
            type="text"
            className="form-control"
            id="county"
            name="county"
            value={values.county}
            onChange={handleChange}
          />
          {isSubmitting && errors.county && <p className="text-danger">{errors.county}</p>}
        </div>


        {/* Register Button */}
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
