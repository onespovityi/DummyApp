import "./App.css";
import { Login } from "./components/Login/Login";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import { MainPage } from "./components/MainPage/MainPage";
import { useAppSelector } from "./store/app/hooks";

function App() {
  const token = useAppSelector((state) => state.auth.token);

  return (
    <div className="App">
      <PrimeReactProvider>
        {token ? <MainPage /> : <Login />}
      </PrimeReactProvider>
    </div>
  );
}

export default App;
