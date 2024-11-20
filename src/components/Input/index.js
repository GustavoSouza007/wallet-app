export const Input = ({
  label,
  placeholder,
  type,
  name,
  className,
  id,
  value,
  onChange,
  error,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        error={error}
        onChange={onChange}
        id={id}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`${className} w-full h-12 p-2 rounded-lg text-base border-solid border-2 border-cyan-400  focus:outline-none`}
      />
    </div>
  );
};
