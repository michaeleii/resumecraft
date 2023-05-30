import useFormStore from "../../store";
import WorkItem from "./WorkItem";

function Work() {
  const [work] = useFormStore((state) => [state.work]);
  return (
    <div className="mt-2 flex flex-col  gap-3 pb-5">
      <h3 className="text-xl font-bold tracking-tighter">Work Experience</h3>
      {work.map((w) => (
        <WorkItem {...w} />
      ))}
    </div>
  );
}
export default Work;
