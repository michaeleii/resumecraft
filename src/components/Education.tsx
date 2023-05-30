import useFormStore from "../store";

function Education() {
  const [school, degree, fieldOfStudy, startYear, endYear] = useFormStore(
    (state) => [
      state.school,
      state.degree,
      state.fieldOfStudy,
      state.startYear,
      state.endYear,
    ]
  );
  return (
    <div className="mt-2 flex flex-col  gap-3 border-b-2 border-black pb-5">
      <h3 className="text-xl font-bold tracking-tighter">Education</h3>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h4 className="text-lg tracking-tighter">{school}</h4>
          <p>
            {startYear} - {endYear}
          </p>
        </div>
        <p className="text-sm">
          {fieldOfStudy}, {degree ? `${degree} Degree` : "N/A"}
        </p>
      </div>
    </div>
  );
}
export default Education;
