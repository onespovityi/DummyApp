import { useState } from "react";
import styles from "./Login.module.css";
import { loginUser } from "../../api/auth";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Checkbox, type CheckboxChangeEvent } from "primereact/checkbox";
import { useAppDispatch, useAppSelector } from "../../store/app/hooks";
import { setToken } from "../../store/auth/authSlice";

export const Login = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const isOpen = !token;
  const [email, setEmail] = useState<string>("emilys");
  const [password, setPassword] = useState<string>("emilyspass");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await loginUser({
        username: email,
        password,
      });

      const storageKey = rememberMe ? localStorage : sessionStorage;
      storageKey.setItem("accessToken", data.accessToken);

      dispatch(setToken(data.accessToken));
    } catch (error) {
      console.log(error);
    }
  };

  const onRememberMeChange = (e: CheckboxChangeEvent): void => {
    setRememberMe(!!e.checked);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={styles.modalTitle}>Авторизация</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
              <InputText
                placeholder="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                toggleMask
              />
              <div className={styles.checkboxLabel}>
                <Checkbox
                  inputId="rememberMe"
                  name="rememberMe"
                  value="rememberMe"
                  onChange={onRememberMeChange}
                  checked={rememberMe}
                />
                <label htmlFor="rememberMe" className="ml-2">
                  Запомнить меня
                </label>
              </div>

              <Button
                disabled={!email || !password}
                label="Войти"
                className={styles.submitButton}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};
