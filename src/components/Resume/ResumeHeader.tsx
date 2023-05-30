import { shallow } from "zustand/shallow";
import useFormStore from "../../store";

function ResumeHeader() {
  const [fname, lname, title, address, mobile] = useFormStore(
    (state) => [
      state.fname,
      state.lname,
      state.title,
      state.address,
      state.mobile,
    ],
    shallow
  );
  return (
    <header className="flex flex-col gap-2 border-b-2 border-black pb-2">
      <h1 className="text-3xl font-bold tracking-tighter">
        {fname} {lname}
      </h1>

      <p className="text-xl tracking-tighter">{title}</p>

      <p className="text-lg">{address}</p>

      <p>{mobile}</p>
    </header>
  );
}
export default ResumeHeader;
