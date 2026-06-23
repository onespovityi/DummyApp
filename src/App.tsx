import "./App.css";
import { Login } from "./components/Login/Login";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {
  return (
    <div className="App">
      <PrimeReactProvider>
        <Login />
      </PrimeReactProvider>
    </div>
  );
}

export default App;
