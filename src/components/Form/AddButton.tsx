import { MouseEventHandler } from "react";

function AddButton() {
  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
  };
  return (
    <button
      className="mt-5 w-32 self-center rounded-lg bg-black py-2 text-white"
      onClick={handleClick}
    >
      Add
    </button>
  );
}
export default AddButton;
