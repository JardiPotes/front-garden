export const getUser = (): Record<string, unknown> | null => {
  const user: string | null = sessionStorage.getItem("user");
  return user ? (JSON.parse(user) as Record<string, unknown>) : null;
};

export const saveUser = (user: Record<string, unknown>): void => {
  console.log(user);
  sessionStorage.setItem("user", JSON.stringify(user));
};

export const removeUser = (): void => {
  sessionStorage.removeItem("user");
};
