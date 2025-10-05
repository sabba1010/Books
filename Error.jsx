// Error.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <motion.h1
        style={styles.code}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        404
      </motion.h1>
      <motion.h2
        style={styles.title}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Oops! Page Not Found
      </motion.h2>
      <motion.p
        style={styles.desc}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        Sorry, the page you are looking for does not exist.
      </motion.p>
      <motion.button
        style={styles.button}
        whileHover={{ scale: 1.1, backgroundColor: "#ff4757" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
      >
        Go Back Home
      </motion.button>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1e1e2f, #2a2a3e)",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  },
  code: {
    fontSize: "10rem",
    fontWeight: "bold",
    margin: 0,
    color: "#ff6b6b",
  },
  title: {
    fontSize: "2.5rem",
    margin: "10px 0",
  },
  desc: {
    fontSize: "1.2rem",
    marginBottom: "25px",
    color: "#ccc",
  },
  button: {
    padding: "15px 35px",
    fontSize: "1.1rem",
    background: "#ff6b6b",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  },
};

export default Error;
