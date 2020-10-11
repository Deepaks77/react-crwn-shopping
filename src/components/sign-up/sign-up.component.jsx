import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";
import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password did not match");
      return;
    }
    signUpStart(userCredentials);
    setUserCredentials({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className="sign-out">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          required
          onChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          required
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          required
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          required
          onChange={handleChange}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userDetails) => dispatch(signUpStart(userDetails)),
});
export default connect(null, mapDispatchToProps)(SignUp);
