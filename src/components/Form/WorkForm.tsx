import useFormStore from "../../store";
import AddButton from "./AddButton";
import WorkFormItem from "./WorkFormItem";

function WorkForm() {
  const [work] = useFormStore((state) => [state.work]);

  return (
    <div className="flex flex-col gap-3  pb-5">
      <h3 className="text-xl font-bold tracking-tighter">Work Experience</h3>
      {work.map((w, i) => {
        const props = {
          ...w,
          i,
        };
        return <WorkFormItem {...props} />;
      })}
    </div>
  );
}
export default WorkForm;
