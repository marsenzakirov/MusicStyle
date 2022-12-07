import NavBar from "@components/NavBar";
import Content from "@components/Content";

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(251.51deg, #180060 0%, #313373 100%)",
      }}
      className="flex"
    >
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
