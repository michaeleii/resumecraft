import { create } from "zustand";
import FormActions from "./interfaces/FormActions";
import FormState from "./interfaces/FormState";

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
  education: [
    {
      school: "University of British Columbia",
      fieldOfStudy: "Computer Science",
      degree: "",
      startYear: "2023",
      endYear: "Present",
    },
  ],
  updateEducation: (education) => set({ education }),
  updateEducationSchool: (school, index) => {
    const education = [...useFormStore.getState().education];
    education[index].school = school;
    set({ education });
  },
  updateEducationFieldOfStudy: (fieldOfStudy, index) => {
    const education = [...useFormStore.getState().education];
    education[index].fieldOfStudy = fieldOfStudy;
    set({ education });
  },
  updateEducationDegree: (degree, index) => {
    const education = [...useFormStore.getState().education];
    education[index].degree = degree;
    set({ education });
  },
  updateEducationStartYear: (startYear, index) => {
    const education = [...useFormStore.getState().education];
    education[index].startYear = startYear;
    set({ education });
  },
  updateEducationEndYear: (endYear, index) => {
    const education = [...useFormStore.getState().education];
    education[index].endYear = endYear;
    set({ education });
  },
  work: [
    {
      company: "Google",
      position: "Software Engineer",
      startYear: "2024",
      endYear: "2050",
    },
  ],
  updateWork: (work) => set({ work }),
  updateWorkCompany: (company, index) => {
    const work = [...useFormStore.getState().work];
    work[index].company = company;
    set({ work });
  },
  updateWorkPosition: (position, index) => {
    const work = [...useFormStore.getState().work];
    work[index].position = position;
    set({ work });
  },
  updateWorkStartYear: (startYear, index) => {
    const work = [...useFormStore.getState().work];
    work[index].startYear = startYear;
    set({ work });
  },
  updateWorkEndYear: (endYear, index) => {
    const work = [...useFormStore.getState().work];
    work[index].endYear = endYear;
    set({ work });
  },
}));

export default useFormStore;
