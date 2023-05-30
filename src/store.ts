import { create } from "zustand";

interface FormState {
  fname: string;
  lname: string;
  title: string;
  address: string;
  mobile: string;
  school: string;
  fieldOfStudy: string;
  degree: string;
  startYear: string;
  endYear: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
}
interface FormActions {
  updateFname: (fname: FormState["fname"]) => void;
  updateLname: (lname: FormState["lname"]) => void;
  updateTitle: (title: FormState["title"]) => void;
  updateAddress: (address: FormState["address"]) => void;
  updateMobile: (mobile: FormState["mobile"]) => void;
  updateSchool: (school: FormState["school"]) => void;
  updateFieldOfStudy: (fieldOfStudy: FormState["fieldOfStudy"]) => void;
  updateDegree: (degree: FormState["degree"]) => void;
  updateStartYear: (startYear: FormState["startYear"]) => void;
  updateEndYear: (endYear: FormState["endYear"]) => void;
  updateCompany: (company: FormState["company"]) => void;
  updatePosition: (position: FormState["position"]) => void;
  updateStartDate: (startDate: FormState["startDate"]) => void;
  updateEndDate: (endDate: FormState["endDate"]) => void;
}

const useFormStore = create<FormState & FormActions>()((set) => ({
  fname: "John",
  lname: "Doe",
  title: "Software Engineer",
  address: "1234 Main Street, City, State 12345",
  mobile: "604-555-5555",
  updateFname: (fname) => set({ fname }),
  updateLname: (lname) => set({ lname }),
  updateTitle: (title) => set({ title }),
  updateAddress: (address) => set({ address }),
  updateMobile: (mobile) => set({ mobile }),
  school: "University of British Columbia",
  fieldOfStudy: "Computer Science",
  degree: "",
  startYear: "2023",
  endYear: "Present",
  updateSchool: (school) => set({ school }),
  updateFieldOfStudy: (fieldOfStudy) => set({ fieldOfStudy }),
  updateDegree: (degree) => set({ degree }),
  updateStartYear: (startYear) => set({ startYear }),
  updateEndYear: (endYear) => set({ endYear }),
  company: "Google",
  position: "Software Engineer",
  startDate: "2021",
  endDate: "Present",
  updateCompany: (company) => set({ company }),
  updatePosition: (position) => set({ position }),
  updateStartDate: (startDate) => set({ startDate }),
  updateEndDate: (endDate) => set({ endDate }),
}));

export default useFormStore;
