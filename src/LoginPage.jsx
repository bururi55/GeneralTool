// src/LoginPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./LoginPage.css"; // Убедитесь, что стили подключены

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get("attemptedAccess")) {
      alert("ДУМОЛ НАЕБАТЬ СИСТЕМУ? СОСАЛ?");
    }
  }, [location]);

  const handleLogin = () => {
    const validLogin = import.meta.env.VITE_LOGIN;
    const validPassword = import.meta.env.VITE_PASSWORD;

    if (login === validLogin && password === validPassword) {
      sessionStorage.setItem("isAuthenticated", "true");
      navigate("/S4SInstrument/mm");
    } else {
      alert("Неверный логин или пароль. ЗАКРУЛ СТРАНИЦУ ТЦУКА!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="input-group">
          <input
            type="text"
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Парольчик"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
