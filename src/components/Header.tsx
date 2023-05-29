function Header() {
  return (
    <header className="flex flex-col items-center gap-5 bg-gray-900 p-10 md:flex-row md:justify-around">
      <h1 className="text-4xl font-bold tracking-tighter text-white">
        ResumeCraft
      </h1>
      <p className="text-xl text-white">
        Beautiful resumes, <br /> made simple.
      </p>
    </header>
  );
}
export default Header;
