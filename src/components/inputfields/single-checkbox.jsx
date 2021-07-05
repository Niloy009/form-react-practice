import React from "react";

const SingleCheckboxInput = (props) => {
  return (
    <div className="form-group">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          name={props.name}
          id={props.name}
          checked={props.checked}
          onChange={props.onChange}
        />
        <label className="form-check-label" htmlFor={props.name}>
          {props.label}
        </label>
      </div>
    </div>
  );
};

export default SingleCheckboxInput;
