import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Auto-fill if remember me is true
  useEffect(() => {
    const remembered = JSON.parse(localStorage.getItem("rememberedUser"));
    if (remembered) {
      setUser({
        username: remembered.username || "",
        password: remembered.password || "",
        remember: true,
      });
    }
  }, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const regUser = JSON.parse(localStorage.getItem("user"));

    if (
      regUser &&
      regUser.username === user.username &&
      regUser.password === user.password
    ) {
      if (user.remember) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("rememberedUser", JSON.stringify(user));
      } else {
        sessionStorage.setItem("loggedIn", "true");
        localStorage.removeItem("rememberedUser");
      }
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error("Invalid credentials");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        padding: "2rem",
        borderRadius: "10px",
        background: "#f9f9f9",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "1.2rem",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Login</h2>

      <input
        name="username"
        placeholder="Username"
        value={user.username}
        onChange={handleChange}
        required
        style={{
          padding: "0.75rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
        autoFocus
      />

      <div style={{ position: "relative" }}>
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            width: "100%",
          }}
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            fontSize: "0.9rem",
            color: "#007bff",
            userSelect: "none",
          }}
        >
          {showPassword ? "Hide" : "Show"}
        </span>
      </div>

      <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <input
          type="checkbox"
          name="remember"
          checked={user.remember}
          onChange={handleChange}
        />
        Remember me
      </label>

      <button
        type="submit"
        style={{
          padding: "0.75rem",
          border: "none",
          borderRadius: "6px",
          backgroundColor: "#007bff",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Login
      </button>

      <div style={{ textAlign: "center", fontSize: "0.9rem", color: "#666" }}>
        Don’t have an account?{" "}
        <a href="/register" style={{ color: "#007bff" }}>
          Register
        </a>
      </div>
    </form>
  );
}
