function Form() {
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
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="fname">Last Name</label>
              <input
                type="text"
                className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                name="fname"
                id="fname"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                name="title"
                id="title"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                name="address"
                id="address"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Form;
