import { create } from "zustand";

interface FormState {
  fname: string;
  lname: string;
  title: string;
  address: string;
  mobile: string;
}
interface FormActions {
  updateFname: (fname: FormState["fname"]) => void;
  updateLname: (lname: FormState["lname"]) => void;
  updateTitle: (title: FormState["title"]) => void;
  updateAddress: (address: FormState["address"]) => void;
  updateMobile: (mobile: FormState["mobile"]) => void;
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
}));

export default useFormStore;