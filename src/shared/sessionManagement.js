import axios from "axios";
import jwt_decode from "jwt-decode";

export function isTokenExpired() {
  const tokenExp = localStorage.getItem("tokenExpiration");

  return tokenExp <= Math.floor(Date.now() / 1000);
}

function isTokenNearToExpire() {
  const tokenExp = localStorage.getItem("tokenExpiration");

  return Math.floor(Date.now() / 1000) - tokenExp <= 300;
}

export function isTokenAvailable() {
  const token = localStorage.getItem("userToken");

  return token ? true : false;
}

async function requestNewToken() {
  const { data } = await axios.get(
    `${process.env.REACT_APP_LOCALHOST}/clasificados/token/refresh`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );

  return data.auth;
}

export async function keepSessionActive() {
  if (isTokenAvailable()) {
    if (isTokenNearToExpire()) {
      const token = await requestNewToken();

      const userInfo = jwt_decode(token);

      localStorage.setItem("userToken", token);

      localStorage.setItem("tokenExpiration", userInfo.exp);
    }
  }
}

export function clearCurrentSession() {
  localStorage.clear();
}
