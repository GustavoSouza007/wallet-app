export const Input = ({
  label,
  placeholder,
  type,
  name,
  className,
  id,
  value,
  onChange,
  error, // Exibe erro apenas se recebido
  step,
  options = [], // Para suporte a selects
}) => {
  const baseClass =
    "w-full h-12 p-2 rounded-lg text-base border-solid border-2 focus:outline-none";
  const borderClass = error ? "border-red-500" : "border-cyan-400"; // Borda vermelha só se houver erro

  return (
    <div className="flex flex-col mb-3">
      {" "}
      {/* Aplica a margem inferior aqui */}
      <label htmlFor={id} className="mb-2 font-semibold">
        {label}
      </label>
      {type === "select" ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`${baseClass} ${borderClass} ${className}`}
        >
          {options.map((option, index) => (
            <option className="rounded" key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          step={step}
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseClass} ${borderClass} ${className}`}
        />
      )}
      {/* Aplique mb-0 somente na mensagem de erro */}
      {error && <span className="text-red-500 text-sm mt-1 mb-0">{error}</span>}
    </div>
  );
};
