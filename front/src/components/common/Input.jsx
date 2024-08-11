const Input = ({ name, value, label, placeholder, handleChange }) => {
  return (
    <div>
      {label ? <p>{label}</p> : null}
      <input
        type="text"
        autoComplete="off"
        name={name}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className="p-2 border border-zinc-300 rounded-xl"
      />
    </div>
  );
};

export { Input };
