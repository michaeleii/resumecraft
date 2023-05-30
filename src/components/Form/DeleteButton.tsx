import { MouseEventHandler } from "react";
import useFormStore from "../../store";

function DeleteButton({ del, i }: { del: "Work" | "Education"; i: number }) {
  const [deleteEducation, deleteWork] = useFormStore((state) => [
    state.deleteWork,
    state.deleteWork,
  ]);
  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    switch (del) {
      case "Work": {
        deleteWork(i);
        break;
      }

      case "Education": {
        deleteEducation(i);
        break;
      }

      default:
        break;
    }
  };
  return (
    <button
      className="self-end rounded-lg  text-black"
      onClick={handleClick}
    ></button>
  );
}
export default DeleteButton;
