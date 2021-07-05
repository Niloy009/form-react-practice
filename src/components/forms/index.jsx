import React from "react";
import Forms from "./forms";

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
    });
  };
  render() {
    return (
      <div>
        <Forms
          values={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleCheckBox={this.handleCheckBox}
          handleSkillChange={this.handleSkillChange}
          checked={this.state}
        />
      </div>
    );
  }
}

export default MainForm;
