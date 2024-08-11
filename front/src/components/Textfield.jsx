const Textfield = ({ value, handleChange }) => {
  return (
    <textarea
      className="p-2 border border-zinc-300 rounded-xl"
      rows="5"
      onChange={(e) => handleChange(e.target.value)}
    >
      {value}
    </textarea>
  );
};

export { Textfield };
