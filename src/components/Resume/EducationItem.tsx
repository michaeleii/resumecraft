import Education from "../../interfaces/Education";

function EducationItem({
  school,
  startYear,
  endYear,
  fieldOfStudy,
  degree,
}: Education) {
  return (
    <div className="flex flex-col">
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
  );
}
export default EducationItem;
