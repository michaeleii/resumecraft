import useFormStore from "../../store";
import EducationItem from "./EducationItem";

function Education() {
  const [education] = useFormStore((state) => [state.education]);
  return (
    <div className="mt-2 flex flex-col  gap-3 border-b-2 border-black pb-5">
      <h3 className="text-xl font-bold tracking-tighter">Education</h3>
      {education.map((e) => (
        <EducationItem {...e} />
      ))}
    </div>
  );
}
export default Education;
