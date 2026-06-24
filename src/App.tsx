import "./App.css";
import { Login } from "./components/Login/Login";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import { MainPage } from "./components/MainPage/MainPage";
import { useAppDispatch, useAppSelector } from "./store/app/hooks";
import { useEffect } from "react";
import { setToken } from "./store/auth/authSlice";

function App() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    const token =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken");

    if (token) {
      dispatch(setToken(token));
    }
  }, []);

  return (
    <div className="App">
      <PrimeReactProvider>
        {token ? <MainPage /> : <Login />}
      </PrimeReactProvider>
    </div>
  );
}

export default App;
