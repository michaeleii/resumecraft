import Form from "./Form";
import Resume from "./Resume";

function MainContainer() {
  return (
    <main className="grid grid-cols-2">
      <Form />
      <Resume />
    </main>
  );
}
export default MainContainer;
