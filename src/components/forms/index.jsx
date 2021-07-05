import React from "react";
// import Forms from "./forms";
import SignupForm from "./signupform";

class MainForm extends React.Component {
  state = {
    name: "",
    bio: "",
    email: "",
    password: "",
    birthday: "",
    country: "",
    agree: false,
    gender: "",
    skills: [],
    errors: {},
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleCheckBox = (event) => {
    this.setState({
      agree: event.target.checked,
    });
  };

  handleSkillChange = (event) => {
    if (event.target.checked) {
      this.setState({
        skills: [...this.state.skills, event.target.value],
      });
    } else {
      const skills = this.state.skills.filter(
        (skill) => skill !== event.target.value
      );
      this.setState({ skills });
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();

    const { errors, isValid } = this.validate();

    if (isValid) {
      console.log(this.state);
      event.target.reset();
      this.setState({
        name: "",
        bio: "",
        email: "",
        password: "",
        birthday: "",
        country: "",
        agree: false,
        gender: "",
        skills: [],
        errors: {},
      });
    } else {
      this.setState({ errors });
    }
  };

  validate = () => {
    const errors = {};
    const { name, email, password, birthday, country, gender } = this.state;

    if (!name) {
      errors.name = "Please provide your name";
    }
    if (!email) {
      errors.email = "Please provide your email";
    }
    if (!password) {
      errors.password = "Please provide your password";
    }
    if (!birthday) {
      errors.birthday = "Please provide your birthday";
    }
    if (!gender) {
      errors.gender = "Please select your gender";
    }
    if (!country) {
      errors.country = "Please select your country";
    }

    return { errors, isValid: Object.keys(errors) === 0 };
  };

  render() {
    return (
      <div>
        {/* <Forms
          values={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleCheckBox={this.handleCheckBox}
          handleSkillChange={this.handleSkillChange}
          checked={this.state}
        /> */}
        <SignupForm
          values={this.state}
          errors={this.state.errors}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleCheckBox={this.handleCheckBox}
          checked={this.state}
        />
      </div>
    );
  }
}

export default MainForm;
