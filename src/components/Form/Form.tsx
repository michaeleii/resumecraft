import EducationForm from "./EducationForm";
import PersonalInfoForm from "./PersonalInfoForm";
import WorkForm from "./WorkForm";

function Form() {
  return (
    <div className="p-5">
      <form className="rounded-xl bg-white p-5 drop-shadow-lg">
        <div className="flex flex-col gap-5">
          <PersonalInfoForm />
          <EducationForm />
          <WorkForm />
        </div>
      </form>
    </div>
  );
}
export default Form;
