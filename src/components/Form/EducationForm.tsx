import useFormStore from "../../store";

function EducationForm() {
  const [
    school,
    degree,
    fieldOfStudy,
    startYear,
    endYear,
    updateSchool,
    updateDegree,
    updateFieldOfStudy,
    updateStartYear,
    updateEndYear,
  ] = useFormStore((state) => [
    state.school,
    state.degree,
    state.fieldOfStudy,
    state.startYear,
    state.endYear,
    state.updateSchool,
    state.updateDegree,
    state.updateFieldOfStudy,
    state.updateStartYear,
    state.updateEndYear,
  ]);
  return (
    <div className="flex flex-col gap-3  pb-5">
      <h3 className="text-xl font-bold tracking-tighter">Education</h3>
      <div className="flex flex-col gap-2">
        <label htmlFor="school">School</label>
        <input
          type="text"
          className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
          name="school"
          id="school"
          value={school}
          onChange={(e) => updateSchool(e.currentTarget.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="field">Field of Study</label>
          <input
            type="text"
            className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
            name="field"
            id="field"
            value={fieldOfStudy}
            onChange={(e) => updateFieldOfStudy(e.currentTarget.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="degree">Degree</label>
          <select
            name="degree"
            id="degree"
            className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
            value={degree}
            onChange={(e) => updateDegree(e.currentTarget.value)}
          >
            <option value="">--Select a degree--</option>
            <option value="High School">High School</option>
            <option value="Certificate">Certificate</option>
            <option value="Diploma">Diploma</option>
            <option value="Associate">Associate</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="Doctorate">Doctorate</option>
          </select>
        </div>
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
            onChange={(e) => updateStartYear(e.currentTarget.value)}
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
            onChange={(e) => updateEndYear(e.currentTarget.value)}
          />
        </div>
      </div>
    </div>
  );
}
export default EducationForm;
