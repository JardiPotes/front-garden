export type User = {
  id: number;
  nickname: string;
  bio: string | null;
  gardens: Record<string, unknown>[];
  profile_image: string;
  experience: number;
};

export const getUser = (): User | null => {
  const user: string | null = sessionStorage.getItem('user');
  return user ? (JSON.parse(user) as User) : null;
};

export const saveUser = (user: User): void => {
  sessionStorage.setItem('user', JSON.stringify(user));
};

export const removeUser = (): void => {
  sessionStorage.removeItem('user');
};
