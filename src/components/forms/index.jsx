import React from "react";
import TextArea from "../inputfields/text-area";
import TextInput from "../inputfields/text-input";

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
    const { name, bio, email, password, birthday, agree, skills, country } =
      this.state;
    return (
      <div>
        <form className="mt-3" onSubmit={this.handleSubmit}>
          <TextInput
            name="name"
            label="Name"
            placeholder="Please enter your name"
            value={name}
            onChange={this.handleChange}
          />
          <TextArea
            label="Bio"
            name="bio"
            value={bio}
            placeholder="Please tell us about yourself"
            onChange={this.handleChange}
          />
          <TextInput
            name="email"
            type="email"
            label="Email"
            placeholder="Please enter your email address"
            value={email}
            onChange={this.handleChange}
          />
          <TextInput
            name="password"
            type="password"
            label="Password"
            placeholder="Please enter your password"
            value={password}
            onChange={this.handleChange}
          />
          <TextInput
            name="birthday"
            type="date"
            label="birthday"
            placeholder="Please enter your birthday"
            value={birthday}
            onChange={this.handleChange}
          />
          <div>
            <label className="mb-0">Gender</label>
          </div>
          <div className="form-check form-check-inline mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="Male"
              value="Male"
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="Male">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="Female"
              value="Female"
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="Female">
              Female
            </label>
          </div>
          <div className="form-check form-check-inline mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="Other"
              value="Other"
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="Other">
              Other
            </label>
          </div>
          <div>
            <label htmlFor="skills" className="mb-0">
              Skills
            </label>
          </div>
          <div className="form-check form-check-inline mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="skills"
              id="Java"
              value="Java"
              checked={skills.includes("Java")}
              onChange={this.handleSkillChange}
            />
            <label className="form-check-label" htmlFor="Java">
              Java
            </label>
          </div>
          <div className="form-check form-check-inline mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="skills"
              id="C"
              value="C"
              checked={skills.includes("C")}
              onChange={this.handleSkillChange}
            />
            <label className="form-check-label" htmlFor="C">
              C
            </label>
          </div>
          <div className="form-check form-check-inline mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="skills"
              id="Javascript"
              value="Javascript"
              checked={skills.includes("Javascript")}
              onChange={this.handleSkillChange}
            />
            <label className="form-check-label" htmlFor="Javascript">
              Javascript
            </label>
          </div>
          <div className="form-check form-check-inline mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="skills"
              id="Python"
              value="Python"
              checked={skills.includes("Python")}
              onChange={this.handleSkillChange}
            />
            <label className="form-check-label" htmlFor="Python">
              Python
            </label>
          </div>
          <div>
            <label htmlFor={country} className="form-label">
              Country
            </label>
          </div>
          <select
            className="form-control form-control-sm mb-3"
            name="Country"
            value={country}
            onChange={this.handleChange}
          >
            <option>Select Country</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Srilanka">Srilanka</option>
            <option value="Pakistan">Pakistan</option>
            <option value="China">China</option>
          </select>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="agree"
              id="agree"
              checked={agree}
              onChange={this.handleCheckBox}
            />
            <label className="form-check-label" htmlFor="agree">
              I agree all the terms & conditions
            </label>
          </div>
          <button type="submit" className="btn btn-outline-success">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default MainForm;
