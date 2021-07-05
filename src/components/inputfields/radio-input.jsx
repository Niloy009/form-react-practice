import React from "react";

const RadioInput = (props) => {
  return (
    <>
      <div>
        <label className="mb-0">{props.label}</label>
      </div>
      <div
        className={
          props.error
            ? "form-check form-check-inline"
            : "form-check form-check-inline mb-3"
        }
      >
        <input
          className="form-check-input"
          type="radio"
          name={props.name}
          id={props.gender1}
          value={props.gender1}
          onChange={props.onChange}
        />
        <label className="form-check-label" htmlFor={props.gender1}>
          {props.gender1}
        </label>
      </div>
      <div
        className={
          props.error
            ? "form-check form-check-inline"
            : "form-check form-check-inline mb-3"
        }
      >
        <input
          className="form-check-input"
          type="radio"
          name={props.name}
          id={props.gender2}
          value={props.gender2}
          onChange={props.onChange}
        />
        <label className="form-check-label" htmlFor={props.gender2}>
          {props.gender2}
        </label>
      </div>
      <div
        className={
          props.error
            ? "form-check form-check-inline"
            : "form-check form-check-inline mb-3"
        }
      >
        <input
          className="form-check-input"
          type="radio"
          name={props.name}
          id={props.gender3}
          value={props.gender3}
          onChange={props.onChange}
        />
        <label className="form-check-label" htmlFor={props.gender3}>
          {props.gender3}
        </label>
      </div>
      {props.error && (
        <div className="invalid-feedback d-block mb-3">{props.error}</div>
      )}
    </>
  );
};

export default RadioInput;
