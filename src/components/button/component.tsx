const Button = () => {
  const handleButtonClick = () => {
    alert("Button Clicked!");
  };
  return <button onClick={handleButtonClick} className="p-2 cursor-pointer px-3 bg-blue-500 text-white rounded hover:bg-blue-600 m-1">Hello Button</button>;
};

export default Button;
