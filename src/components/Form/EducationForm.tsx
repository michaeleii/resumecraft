import useFormStore from "../../store";
import AddButton from "./AddButton";
import EducationFormItem from "./EducationFormItem";

function EducationForm() {
  const [education] = useFormStore((state) => [state.education]);

  return (
    <div className="flex flex-col gap-3  pb-5">
      <h3 className="text-xl font-bold tracking-tighter">Education</h3>
      {education.map((e, i) => {
        const props = { ...e, i };
        return <EducationFormItem {...props} />;
      })}

      <AddButton add={"Education"} />
    </div>
  );
}
export default EducationForm;
