const TOKEN_KEY = process.env.TOKEN;

const getToken = () => {
  const data = JSON.parse(localStorage.getItem(TOKEN_KEY));
  if (data && data.token) return data.token;
  return false;
};

const getUser = () => {
  const data = JSON.parse(localStorage.getItem(TOKEN_KEY));
  if (data && data.user) return data.user;
  return false;
};

const isAuthenticated = () => {
  return getToken() !== false;
};

const removeToken = () => localStorage.removeItem(TOKEN_KEY);

const saveAuth = data => localStorage.setItem(TOKEN_KEY, JSON.stringify(data));

export { saveAuth, getToken, getUser, isAuthenticated, removeToken };
