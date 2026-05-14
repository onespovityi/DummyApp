import { useState } from "react";
import styles from "./Login.module.css";
import { loginUser } from "../../api/auth";

export const Login = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const data = await loginUser({
        username: email,
        password,
      });

      console.log(data);

      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeModal}
            >
              ×
            </button>

            <h2 className={styles.modalTitle}>Авторизация</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                placeholder="username"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={styles.input}
              />

              <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={styles.input}
              />

              <button type="submit" className={styles.submitButton}>
                Войти
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
