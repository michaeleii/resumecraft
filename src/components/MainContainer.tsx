import Form from "./Form";
import Resume from "./Resume";

function MainContainer() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2">
      <Form />
      <Resume />
    </main>
  );
}
export default MainContainer;
