import React from "react";

const TextArea = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <textarea
        className="form-control"
        placeholder={props.placeholder}
        id={props.name}
        rows="3"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
