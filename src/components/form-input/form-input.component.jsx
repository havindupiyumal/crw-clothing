import "./form-input.styles.scss";

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        }  form-input-label`}
      >
        {label}
      </label>
    </div>
  );
};
