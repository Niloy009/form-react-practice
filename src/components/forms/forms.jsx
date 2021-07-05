import React from "react";
import PropTypes from "prop-types";
import MultiCheckboxInput from "../inputfields/multi-checkbox";
import RadioInput from "../inputfields/radio-input";
import SelectInput from "../inputfields/select-input";
import SingleCheckboxInput from "../inputfields/single-checkbox";
import TextArea from "../inputfields/text-area";
import TextInput from "../inputfields/text-input";

const Forms = (props) => {
  return (
    <form className="mt-3" onSubmit={props.handleSubmit}>
      <TextInput
        name="name"
        label="Name"
        placeholder="Please enter your name"
        value={props.values.name}
        onChange={props.handleChange}
      />
      <TextArea
        label="Bio"
        name="bio"
        value={props.values.bio}
        placeholder="Please tell us about yourself"
        onChange={props.handleChange}
      />
      <TextInput
        name="email"
        type="email"
        label="Email"
        placeholder="Please enter your email address"
        value={props.values.email}
        onChange={props.handleChange}
      />
      <TextInput
        name="password"
        type="password"
        label="Password"
        placeholder="Please enter your password"
        value={props.values.password}
        onChange={props.handleChange}
      />
      <TextInput
        name="birthday"
        type="date"
        label="birthday"
        placeholder="Please enter your birthday"
        value={props.values.birthday}
        onChange={props.handleChange}
      />

      <RadioInput
        name="gender"
        gender1="Male"
        gender2="Female"
        gender3="Other"
        label="Gender"
        onChange={props.handleChange}
      />

      <MultiCheckboxInput
        name="skills"
        label="Skills"
        option1="Java"
        option2="C"
        option3="Javascript"
        option4="Python"
        onChange={props.handleSkillChange}
        checked={props.values.skills}
      />

      <SelectInput
        name="country"
        value={props.values.country}
        label="Country"
        onChange={props.handleChange}
      />
      <SingleCheckboxInput
        name="agree"
        label="I agree all the terms & conditions"
        checked={props.values.agree}
        onChange={props.handleCheckBox}
      />
      <button type="submit" className="btn btn-outline-success">
        Submit
      </button>
    </form>
  );
};

Forms.propTypes = {
  values: PropTypes.object.isRequired,
  checked: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCheckBox: PropTypes.func.isRequired,
  handleSkillChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Forms;
