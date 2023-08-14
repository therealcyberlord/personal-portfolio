import Home from "./pages/Home";
import Navbar from "./components/Nav";

function App() {
  return (
    <>
      <Navbar />

      <div className="flex">
        <Home />
      </div>
    </>
  );
}

export default App;
