const Input = ({
  label,
  id,
  placeholder,
  name,
  value,
  onChange,
  className,
  type,
  max,
  min
}) => {
  return (
    <div className="input__container">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        max={max}
        min={min}
      />
    </div>
  );
};

export default Input;
