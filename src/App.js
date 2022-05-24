import "./App.css";
import { Navbar } from "./frontend/components/Navbar/Navbar";
import { Routing } from "./frontend/Routes/Routing";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
