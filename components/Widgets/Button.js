const Button = ({ className, children, isColorInverse, onClick, type = "button" }) => {
  return (
    <button
      className={`${
        isColorInverse
          ? "bg-primary-400 text-white hover:border-primary-400 hover:bg-transparent  hover:text-primary-400"
          : "bg-white  text-primary-400 hover:bg-primary-400 hover:text-white"
      } rounded-full border border-transparent py-3 px-6 font-semibold transition-all  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
