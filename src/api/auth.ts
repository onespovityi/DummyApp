type LoginPayload = {
  username: string;
  password: string;
};

export const loginUser = async ({
  username,
  password,
}: LoginPayload) => {
  const response = await fetch(
    "https://dummyjson.com/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 30,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Ошибка авторизации");
  }

  return response.json();
};

export const refreshSession = async () => {
  const response = await fetch("https://dummyjson.com/auth/refresh", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ expiresInMins: 30 }),
  });

  if (!response.ok) {
    throw new Error("Сессия не найдена");
  }

  return response.json();
};

export const getCurrentUser = async (accessToken: string) => {

  if (!accessToken) {
    throw new Error("Не авторизован");
  }

  const response = await fetch("https://dummyjson.com/auth/me", {
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Не авторизован");
  }

  return response.json();
};