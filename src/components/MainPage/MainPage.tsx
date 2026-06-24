import { Button } from "primereact/button";
import styles from "./MainPage.module.css";
import { useAppDispatch, useAppSelector } from "../../store/app/hooks";
import { logout } from "../../store/auth/authSlice";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    sessionStorage.removeItem("accessToken");

    dispatch(logout());
  };

  return (
    <div className={styles.mainPage}>
      {token && <Button label="Выйти" onClick={logoutHandler} />}
    </div>
  );
};
