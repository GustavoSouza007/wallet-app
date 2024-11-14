export const Input = ({ label, placeholder, type, name, className }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`${className} w-full h-12 p-2 rounded-lg text-base border-solid border-2 border-cyan-400 text-black focus:outline-none`}
      />
    </div>
  );
};
