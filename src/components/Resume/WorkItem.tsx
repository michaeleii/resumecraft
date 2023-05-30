import Work from "../../interfaces/Work";

function WorkItem({ company, position, startYear, endYear }: Work) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h4 className="text-lg tracking-tighter">{company}</h4>
        <p>
          {startYear} - {endYear}
        </p>
      </div>
      <p className="text-sm">{position}</p>
    </div>
  );
}
export default WorkItem;
