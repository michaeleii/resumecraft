import Education from "./Education";
import FormState from "./FormState";
import Work from "./Work";

interface FormActions {
  updateFname: (fname: FormState["fname"]) => void;
  updateLname: (lname: FormState["lname"]) => void;
  updateTitle: (title: FormState["title"]) => void;
  updateAddress: (address: FormState["address"]) => void;
  updateMobile: (mobile: FormState["mobile"]) => void;
  updateEducation: (education: FormState["education"]) => void;
  updateEducationSchool: (school: Education["school"], index: number) => void;
  updateEducationFieldOfStudy: (
    fieldOfStudy: Education["fieldOfStudy"],
    index: number
  ) => void;
  updateEducationDegree: (degree: Education["degree"], index: number) => void;
  updateEducationStartYear: (
    startYear: Education["startYear"],
    index: number
  ) => void;
  updateEducationEndYear: (
    endYear: Education["endYear"],
    index: number
  ) => void;
  deleteEducation: (index: number) => void;
  updateWork: (work: FormState["work"]) => void;
  updateWorkCompany: (company: Work["company"], index: number) => void;
  updateWorkPosition: (position: Work["position"], index: number) => void;
  updateWorkStartYear: (startYear: Work["startYear"], index: number) => void;
  updateWorkEndYear: (endYear: Work["endYear"], index: number) => void;
  deleteWork: (index: number) => void;
}

export default FormActions;
