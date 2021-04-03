export const TOKEN_KEY = "@api-Token";
export const USER_DATA = "@user-data";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const getUser = () => JSON.parse(localStorage.getItem(USER_DATA));

export const login = (token, user) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_DATA, JSON.stringify(user));
};

export const setUser = (user) => {
  localStorage.setItem(USER_DATA, JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_DATA);
};
