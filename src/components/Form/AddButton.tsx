import { MouseEventHandler } from "react";
import useFormStore from "../../store";

function AddButton({ add }: { add: "Work" | "Education" }) {
  const [work, education, updateEducation, updateWork] = useFormStore(
    (state) => [
      state.work,
      state.education,
      state.updateEducation,
      state.updateWork,
    ]
  );
  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    switch (add) {
      case "Work": {
        const newWork = [
          ...work,
          { company: "", position: "", startYear: "", endYear: "" },
        ];
        updateWork(newWork);
        break;
      }

      case "Education": {
        const newEducation = [
          ...education,
          {
            school: "",
            fieldOfStudy: "",
            degree: "",
            startYear: "",
            endYear: "",
          },
        ];
        updateEducation(newEducation);
        break;
      }

      default:
        break;
    }
  };
  return (
    <button
      className="w-32 self-center rounded-lg bg-black py-2 text-white"
      onClick={handleClick}
    >
      Add
    </button>
  );
}
export default AddButton;
