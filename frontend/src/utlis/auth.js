export function setAuth({ token, username }) {
  localStorage.setItem("token", token);
  localStorage.setItem("username", username);
}
export function getAuth() {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  if (username && token) return { token, username };
  return null;
}

export function getJWT() {
  const token = localStorage.getItem("token");
  return token;
}

export function isLoggedIn() {
  const auth = getAuth();

  return auth !== null;
}

export function clearAuth() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
}
