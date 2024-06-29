import { useState } from "react";
import axios from "axios";
import { ACCESS_TOKEN_KEY } from "../../constant/token";

export const useLogin = () => {
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    try {
      const accessToken = ""; // DAuth 액세스 토큰
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      return accessToken;
    } catch (error) {
      setError(error.message);
      return null;
    }
  };

  return { login, error };
};

export default useLogin;
