const Button = ({ text, onClick }) => {
  const operator = [
    "+",
    "-",
    "*",
    "/",
    "=",
  ];

  const special = [
    "C",
    "⌫",
    "%",
    "√",
  ];

  return (
    <button
      onClick={() => onClick(text)}
      className={`
        h-11
        rounded-2xl
        font-semibold
        text-xl
        transition-all
        active:scale-95

      ${
  operator.includes(text)
    ? "bg-orange-500 hover:bg-orange-600 text-white"
    : special.includes(text)
    ? "bg-slate-600 hover:bg-slate-500 text-white"
    : "bg-slate-800 hover:bg-slate-700 text-white"
}
      `}
    >
      {text}
    </button>
  );
};

export default Button;