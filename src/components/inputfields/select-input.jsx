import React from "react";

const SelectInput = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">
        {props.label}
      </label>

      <select
        className={
          props.error
            ? "form-control form-control-sm is-invalid"
            : "form-control form-control-sm"
        }
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        id={props.name}
      >
        <option>Select Country</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="India">India</option>
        <option value="Srilanka">Srilanka</option>
        <option value="Pakistan">Pakistan</option>
        <option value="China">China</option>
      </select>
      {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
  );
};

export default SelectInput;
