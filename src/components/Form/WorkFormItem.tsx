import Work from "../../interfaces/Work";
import useFormStore from "../../store";

function WorkFormItem({
  company,
  position,
  startYear,
  endYear,
  i,
}: Work & { i: number }) {
  const [updateCompany, updatePosition, updateStartYear, updateEndYear] =
    useFormStore((state) => [
      state.updateWorkCompany,
      state.updateWorkPosition,
      state.updateWorkStartYear,
      state.updateWorkEndYear,
    ]);
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
          name="company"
          id="company"
          value={company}
          onChange={(e) => updateCompany(e.currentTarget.value, i)}
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
          onChange={(e) => updatePosition(e.currentTarget.value, i)}
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="startYear">Start Year</label>
          <input
            type="text"
            className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
            name="startYear"
            id="startYear"
            value={startYear}
            onChange={(e) => updateStartYear(e.currentTarget.value, i)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="endYear">End Year</label>
          <input
            type="text"
            className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
            name="endYear"
            id="endYear"
            value={endYear}
            onChange={(e) => updateEndYear(e.currentTarget.value, i)}
          />
        </div>
      </div>
    </>
  );
}
export default WorkFormItem;
