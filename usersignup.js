import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store";
import ReCAPTCHA from "react-google-recaptcha";
import config from "../config";
import {
  MDBContainer,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBBtn,
} from "mdb-react-ui-kit";
import {MDBAlert} from 'mdbreact'
 
const UserSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
 
  const [captchaValid, setCaptchaValid] = useState(false);
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState({
    email: false,
    phoneNumber: false,
    password: false,
    confirmPassword: false,
  });
 
  // Handle form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    
    switch (id) {
      case "email":
        setIsValid((prevState) => ({
          ...prevState,
          email: isValidEmail(value),
        }));
        break;
      case "phoneNumber":
        setIsValid((prevState) => ({
          ...prevState,
          phoneNumber: isValidPhoneNumber(value),
        }));
        break;
      case "password":
        setIsValid((prevState) => ({
          ...prevState,
          password: isValidPassword(value),
          confirmPassword: value === inputs.confirmPassword,
        }));
        break;
      case "confirmPassword":
        setIsValid((prevState) => ({
          ...prevState,
          confirmPassword: value === inputs.password,
        }));
        break;
      default:
        break;
    }
  };
 
  // Validation functions
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
 
  const isValidPhoneNumber = (phoneNumber) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phoneNumber);
  };
 
  const isValidPassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };
 
  // Show error messages for 3 seconds
  const showError = (message) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 3000);
  };
 
  const sendRequest = async (type = "signup") => {
    try {
      const res = await axios.post(`${config.BASE_URL}/api/users/${type}`, {
        username: inputs.username,
        email: inputs.email,
        phoneNumber: inputs.phoneNumber,
        password: inputs.password,
      });
      const data = await res.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if (!inputs.username || !inputs.email || !inputs.password || !inputs.confirmPassword) {
      showError("All fields are required.");
      return;
    }
 
    if (!isValid.email) {
      showError("Please enter a valid email address.");
      return;
    }
 
    if (!isValid.phoneNumber) {
      showError("Phone number must be 10 digits.");
      return;
    }
 
    if (!isValid.password) {
      showError("Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.");
      return;
    }
 
    if (!isValid.confirmPassword) {
      showError("Passwords do not match.");
      return;
    }
 
    if (!captchaValid) {
      showError("Please complete the captcha.");
      return;
    }
 
    const data = await sendRequest();
    if (data) {
      localStorage.setItem("userId", data.user._id);
      dispatch(authActions.login());
      navigate("/userlogin");
    }
  };
 
  return (
    <MDBContainer className="mt-5">
      <MDBCard>
        <MDBCardBody>
          <h3 className="text-center mb-4">Sign Up</h3>
 
          {error && (
            <MDBAlert color="danger" className="text-center">
              {error}
            </MDBAlert>
          )}
 
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label>Username</label>
              <MDBInput
                onChange={handleChange}
                id="username"
                type="text"
                className="form-control"
                value={inputs.username}
                style={{ backgroundColor: "#f0f8ff" }}
                required
              />
            </div>
 
            <div className="mb-4">
              <label>Email</label>
              <MDBInput
                onChange={handleChange}
                id="email"
                type="email"
                className="form-control"
                value={inputs.email}
                style={{
                  backgroundColor: "#f0f8ff",
                  border: isValid.email ? "2px solid green" : "1px solid red",
                }}
                required
                disabled={!inputs.username}
              />
            </div>
 
            <div className="mb-4">
              <label>Phone Number</label>
              <MDBInput
                onChange={handleChange}
                id="phoneNumber"
                type="text"
                className="form-control"
                value={inputs.phoneNumber}
                style={{
                  backgroundColor: "#f0f8ff",
                  border: isValid.phoneNumber ? "2px solid green" : "1px solid red",
                }}
                required
                disabled={!isValid.email}
              />
            </div>
 
            <div className="mb-4">
              <label>Password</label>
              <MDBInput
                onChange={handleChange}
                id="password"
                type="password"
                className="form-control"
                value={inputs.password}
                style={{
                  backgroundColor: "#f0f8ff",
                  border: isValid.password ? "2px solid green" : "1px solid red",
                }}
                required
                disabled={!isValid.phoneNumber}
              />
            </div>
 
            <div className="mb-4">
              <label>Confirm Password</label>
              <MDBInput
                onChange={handleChange}
                id="confirmPassword"
                type="password"
                className="form-control"
                value={inputs.confirmPassword}
                style={{
                  backgroundColor: "#f0f8ff",
                  border: isValid.confirmPassword ? "2px solid green" : "1px solid red",
                }}
                required
                disabled={!isValid.password}
              />
            </div>
 
            {/* <div className="mb-4">
              <ReCAPTCHA
                sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY"
                onChange={onCaptchaChange}
              />
            </div> */}
 
            <div className="text-center">
              <MDBBtn type="submit" color="primary" disabled={!captchaValid}>
                Sign Up
              </MDBBtn>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};
 
export default UserSignup;
 