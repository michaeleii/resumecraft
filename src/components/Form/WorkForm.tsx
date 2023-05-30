import useFormStore from "../../store";

function WorkForm() {
  const [
    company,
    position,
    startDate,
    endDate,
    updateCompany,
    updatePosition,
    updateStartDate,
    updateEndDate,
  ] = useFormStore((state) => [
    state.company,
    state.position,
    state.startDate,
    state.endDate,
    state.updateCompany,
    state.updatePosition,
    state.updateStartDate,
    state.updateEndDate,
  ]);
  return (
    <div className="flex flex-col gap-3  pb-5">
      <h3 className="text-xl font-bold tracking-tighter">Work Experience</h3>
      <div className="flex flex-col gap-2">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
          name="company"
          id="company"
          value={company}
          onChange={(e) => updateCompany(e.currentTarget.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="position">Position</label>
        <input
          type="text"
          className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
          name="position"
          id="position"
          value={position}
          onChange={(e) => updatePosition(e.currentTarget.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="startDate">Start Year</label>
          <input
            type="text"
            className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
            name="startDate"
            id="startDate"
            value={startDate}
            onChange={(e) => updateStartDate(e.currentTarget.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="endDate">End Year</label>
          <input
            type="text"
            className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
            name="endDate"
            id="endDate"
            value={endDate}
            onChange={(e) => updateEndDate(e.currentTarget.value)}
          />
        </div>
      </div>
    </div>
  );
}
export default WorkForm;
