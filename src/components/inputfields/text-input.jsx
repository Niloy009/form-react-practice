import React from "react";
import PropTypes from "prop-types";

const TextInput = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        className="form-control form-control-sm"
        placeholder={props.placeholder}
        id={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
};

export default TextInput;
