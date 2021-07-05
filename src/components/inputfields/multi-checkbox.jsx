import React from "react";

const MultiCheckboxInput = (props) => {
  return (
    <>
      <div>
        <label htmlFor={props.name} className="mb-0">
          {props.label}
        </label>
      </div>
      <div className="form-check form-check-inline mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          name={props.name}
          id={props.option1}
          value={props.option1}
          checked={props.checked.includes(props.option1)}
          onChange={props.onChange}
        />
        <label className="form-check-label" htmlFor={props.option1}>
          {props.option1}
        </label>
      </div>
      <div className="form-check form-check-inline mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          name={props.name}
          id={props.option2}
          value={props.option2}
          checked={props.checked.includes(props.option2)}
          onChange={props.onChange}
        />
        <label className="form-check-label" htmlFor={props.option2}>
          {props.option2}
        </label>
      </div>
      <div className="form-check form-check-inline mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          name={props.name}
          id={props.option3}
          value={props.option3}
          checked={props.checked.includes(props.option3)}
          onChange={props.onChange}
        />
        <label className="form-check-label" htmlFor={props.option3}>
          {props.option3}
        </label>
      </div>
      <div className="form-check form-check-inline mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          name={props.name}
          id={props.option4}
          value={props.option4}
          checked={props.checked.includes(props.option4)}
          onChange={props.onChange}
        />
        <label className="form-check-label" htmlFor={props.option4}>
          {props.option4}
        </label>
      </div>
    </>
  );
};

export default MultiCheckboxInput;
