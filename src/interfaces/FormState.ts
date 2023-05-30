import Education from "./Education";
import Work from "./Work";

interface FormState {
  fname: string;
  lname: string;
  title: string;
  address: string;
  mobile: string;
  education: Education[];
  work: Work[];
}

export default FormState;
