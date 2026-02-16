import React, { useState } from "react";

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  card: {
    width: "90%",
    maxWidth: "400px",
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    position: "relative",
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
    animation: "fadeIn 0.3s ease",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "12px",
    border: "none",
    background: "transparent",
    fontSize: "18px",
    cursor: "pointer",
  },
  input: {
    width: "100%",
    marginTop: "10px",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
  },
  submitBtn: {
    width: "100%",
    marginTop: "15px",
    padding: "12px",
    background: "#2a63f6",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  switchText: {
    marginTop: "15px",
    textAlign: "center",
  },
  switchSpan: {
    color: "#2a63f6",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default function AuthPopup({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <button style={styles.closeBtn} onClick={onClose}>✖</button>

        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        <form>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              style={styles.input}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            required
          />

          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            required
          />

          <button type="submit" style={styles.submitBtn}>
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p style={styles.switchText}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            style={styles.switchSpan}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
