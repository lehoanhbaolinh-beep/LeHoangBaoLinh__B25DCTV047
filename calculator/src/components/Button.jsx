function Button({ label, color, onClick, wide }) {
  return (
    <button
      className={wide ? "btn wide" : "btn"}
      style={{ backgroundColor: color }}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

export default Button;
