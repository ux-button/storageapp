const Textfield = ({ value }) => {
  return (
    <textarea className="p-2 border border-zinc-300 rounded-xl" rows="5">
      {value}
    </textarea>
  );
};

export { Textfield };
