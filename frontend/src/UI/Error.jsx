import React, { useEffect } from "react";
import "@/css/Error.css";
import { useMain } from "../context/MainProvider";
export default function Error({ message }) {
  const { error, setError }=useMain();
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
       setError("")
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);
  if (!message) return null;

  return (
    <div className="error-popup">
      <div className="error-box">
        <span className="error-msg">{error}</span>
        <button className="close-btn" onClick={() => setError("")}>✖</button>
      </div>
    </div>
  );
}
