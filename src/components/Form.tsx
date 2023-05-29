import useFormStore from "../store";

function Form() {
  const [
    fname,
    lname,
    title,
    address,
    mobile,
    updateFname,
    updateLname,
    updateTitle,
    updateAddress,
    updateMobile,
  ] = useFormStore((state) => [
    state.fname,
    state.lname,
    state.title,
    state.address,
    state.mobile,
    state.updateFname,
    state.updateLname,
    state.updateTitle,
    state.updateAddress,
    state.updateMobile,
  ]);
  return (
    <div className="p-5">
      <form className="rounded-xl bg-gray-100 p-5 drop-shadow-lg">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold">Personal Information</h3>
            <div className="flex flex-col gap-2">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                name="fname"
                id="fname"
                onChange={(e) => updateFname(e.currentTarget.value)}
                value={fname}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="fname">Last Name</label>
              <input
                type="text"
                className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                name="fname"
                id="fname"
                onChange={(e) => updateLname(e.currentTarget.value)}
                value={lname}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                name="title"
                id="title"
                onChange={(e) => updateTitle(e.currentTarget.value)}
                value={title}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                name="address"
                id="address"
                onChange={(e) => updateAddress(e.currentTarget.value)}
                value={address}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="mobile">Phone Number</label>
              <input
                type="tel"
                className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                name="mobile"
                id="mobile"
                onChange={(e) => updateMobile(e.currentTarget.value)}
                value={mobile}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Form;
