import useFormStore from "../../store";

function Work() {
  const [company, position, startDate, endDate] = useFormStore((state) => [
    state.company,
    state.position,
    state.startDate,
    state.endDate,
  ]);
  return (
    <div className="mt-2 flex flex-col  gap-3 pb-5">
      <h3 className="text-xl font-bold tracking-tighter">Work Experience</h3>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h4 className="text-lg tracking-tighter">{company}</h4>
          <p>
            {startDate} - {endDate}
          </p>
        </div>
        <p className="text-sm">{position}</p>
      </div>
    </div>
  );
}
export default Work;
