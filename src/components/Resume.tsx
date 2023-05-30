import ResumeHeader from "./ResumeHeader";
import Education from "./Education";
import Work from "./Work";

function Resume() {
  return (
    <div className="p-5">
      <div className="rounded-xl bg-white p-5 drop-shadow-lg">
        <ResumeHeader />
        <Education />
        <Work />
      </div>
    </div>
  );
}
export default Resume;
