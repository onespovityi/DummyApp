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