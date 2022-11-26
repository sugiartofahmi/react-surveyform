const Button = ({ text, type, padding }) => {
  return (
    <button
      type={type}
      className={`bg-blue-400 text-white font-sans border-2 border-white text-base hover:bg-white hover:border-blue-400 hover:text-blue-400 ${padding} rounded-md`}
    >
      {text}
    </button>
  );
};
export default Button;
