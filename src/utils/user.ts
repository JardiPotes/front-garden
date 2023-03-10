

  export const getUser = (): string | null => {
    return sessionStorage.getItem("user");
  };

  export const saveUser = (user) => {
    sessionStorage.setItem("user", user);
  };

  export const removeUser = (): void => {
    sessionStorage.removeItem("user");
  };

