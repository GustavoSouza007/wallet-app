export const Button = ({ children, variant, className, type }) => {
  const primary = `${className} w-full h-14 rounded-xl font-bold text-base border-2 border-solid text-slate-50 border-violet-700 bg-violet-700`;
  const smallButton =
    "w-24 h-9 rounded-lg font-bold text-sm text-black border-2 border-solid text-slate-50 border-violet-700 bg-slate-50";
  return (
    <button
      type={type}
      className={variant === "smallButton" ? smallButton : primary}
    >
      {variant === "smallButton" ? "Adicionar" : children}
    </button>
  );
};
