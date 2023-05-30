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
      <form className="rounded-xl bg-white p-5 drop-shadow-lg">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3  pb-5">
            <h3 className="text-xl font-bold tracking-tighter">
              Personal Information
            </h3>
            <div className="grid grid-cols-2 gap-5">
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
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
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
          <div className="flex flex-col gap-3  pb-5">
            <h3 className="text-xl font-bold tracking-tighter">Education</h3>
            <div className="flex flex-col gap-2">
              <label htmlFor="school">School</label>
              <input
                type="text"
                className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                name="school"
                id="school"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="field">Field of Study</label>
                <input
                  type="text"
                  className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                  name="field"
                  id="field"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="degree">Degree</label>
                <select
                  name="degree"
                  id="degree"
                  className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                >
                  <option value="">--Select a degree--</option>
                  <option value="highschool">High School</option>
                  <option value="certificate">Certificate</option>
                  <option value="diploma">Diploma</option>
                  <option value="associate">Associate</option>
                  <option value="bachelor">Bachelor</option>
                  <option value="master">Master</option>
                  <option value="doctorate">Doctorate</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="startDate">Start Year</label>
                <input
                  type="month"
                  className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                  name="startDate"
                  id="startDate"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="endDate">End Year</label>
                <input
                  type="month"
                  className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                  name="endDate"
                  id="endDate"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3  pb-5">
            <h3 className="text-xl font-bold tracking-tighter">
              Work Experience
            </h3>
            <div className="flex flex-col gap-2">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                name="company"
                id="company"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="position">Position</label>
              <input
                type="text"
                className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                name="position"
                id="position"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="startDate">Start Year</label>
                <input
                  type="month"
                  className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                  name="startDate"
                  id="startDate"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="endDate">End Year</label>
                <input
                  type="month"
                  className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                  name="endDate"
                  id="endDate"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Form;
