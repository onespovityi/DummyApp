import "./App.css";
import { Login } from "./components/Login/Login";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import { MainPage } from "./components/MainPage/MainPage";
import { useAppSelector } from "./store/app/hooks";
import { ToastProvider } from "./components/ui/Toast/Toast";

function App() {
  const token = useAppSelector((state) => state.auth.token);

  return (
    <div className="App">
      <PrimeReactProvider>
        <ToastProvider>{token ? <MainPage /> : <Login />}</ToastProvider>
      </PrimeReactProvider>
    </div>
  );
}

export default App;
