const Button = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="py-2 px-4 bg-green-100 hover:bg-green-200 text-green-500 rounded-xl"
    >
      {text}
    </button>
  );
};

export { Button };
