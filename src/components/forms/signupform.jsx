import React from "react";
import PropTypes from "prop-types";
import RadioInput from "../inputfields/radio-input";
import SelectInput from "../inputfields/select-input";
import SingleCheckboxInput from "../inputfields/single-checkbox";
import TextInput from "../inputfields/text-input";

const SignupForm = (props) => {
  return (
    <form className="mt-3" onSubmit={props.handleSubmit}>
      <TextInput
        name="name"
        label="Name"
        placeholder="Please enter your name"
        value={props.values.name}
        onChange={props.handleChange}
        error={props.errors.name}
      />

      <TextInput
        name="email"
        type="email"
        label="Email"
        placeholder="Please enter your email address"
        value={props.values.email}
        onChange={props.handleChange}
        error={props.errors.email}
      />
      <TextInput
        name="password"
        type="password"
        label="Password"
        placeholder="Please enter your password"
        value={props.values.password}
        onChange={props.handleChange}
        error={props.errors.password}
      />
      <TextInput
        name="birthday"
        type="date"
        label="birthday"
        placeholder="Please enter your birthday"
        value={props.values.birthday}
        onChange={props.handleChange}
        error={props.errors.birthday}
      />

      <RadioInput
        name="gender"
        gender1="Male"
        gender2="Female"
        gender3="Other"
        label="Gender"
        onChange={props.handleChange}
        error={props.errors.gender}
      />

      <SelectInput
        name="country"
        value={props.values.country}
        label="Country"
        onChange={props.handleChange}
        error={props.errors.country}
      />
      <SingleCheckboxInput
        name="agree"
        label="I agree all the terms & conditions"
        checked={props.values.agree}
        onChange={props.handleCheckBox}
      />
      <button
        type="submit"
        className="btn btn-success"
        disabled={!props.values.agree}
      >
        Submit
      </button>
    </form>
  );
};

SignupForm.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  checked: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCheckBox: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
