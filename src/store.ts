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
  updateEducationSchool: (school, i) => {
    const education = [...useFormStore.getState().education];
    education[i].school = school;
    set({ education });
  },
  updateEducationFieldOfStudy: (fieldOfStudy, i) => {
    const education = [...useFormStore.getState().education];
    education[i].fieldOfStudy = fieldOfStudy;
    set({ education });
  },
  updateEducationDegree: (degree, i) => {
    const education = [...useFormStore.getState().education];
    education[i].degree = degree;
    set({ education });
  },
  updateEducationStartYear: (startYear, i) => {
    const education = [...useFormStore.getState().education];
    education[i].startYear = startYear;
    set({ education });
  },
  updateEducationEndYear: (endYear, i) => {
    const education = [...useFormStore.getState().education];
    education[i].endYear = endYear;
    set({ education });
  },
  deleteEducation: (i: number) => {
    const education = [...useFormStore.getState().education];
    education.splice(i, 1);
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
  updateWorkCompany: (company, i) => {
    const work = [...useFormStore.getState().work];
    work[i].company = company;
    set({ work });
  },
  updateWorkPosition: (position, i) => {
    const work = [...useFormStore.getState().work];
    work[i].position = position;
    set({ work });
  },
  updateWorkStartYear: (startYear, i) => {
    const work = [...useFormStore.getState().work];
    work[i].startYear = startYear;
    set({ work });
  },
  updateWorkEndYear: (endYear, i) => {
    const work = [...useFormStore.getState().work];
    work[i].endYear = endYear;
    set({ work });
  },
  deleteWork: (i: number) => {
    const work = [...useFormStore.getState().work];
    work.splice(i, 1);
    set({ work });
  },
}));

export default useFormStore;
