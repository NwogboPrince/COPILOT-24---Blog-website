import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Message sent! (Demo only)");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "500px",
        margin: "3rem auto",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        background: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#1976d2" }}>Contact Us</h2>

      <label style={{ display: "flex", flexDirection: "column", fontWeight: "bold" }}>
        Name
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem",
            marginTop: "0.5rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </label>

      <label style={{ display: "flex", flexDirection: "column", fontWeight: "bold" }}>
        Email
        <input
          name="email"
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem",
            marginTop: "0.5rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </label>

      <label style={{ display: "flex", flexDirection: "column", fontWeight: "bold" }}>
        Message
        <textarea
          name="message"
          placeholder="Write your message here..."
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          style={{
            padding: "0.75rem",
            marginTop: "0.5rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            resize: "vertical",
          }}
        />
      </label>

      <button
        type="submit"
        style={{
          padding: "0.75rem",
          borderRadius: "6px",
          border: "none",
          background: "#1976d2",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.background = "#135ba1")}
        onMouseOut={(e) => (e.target.style.background = "#1976d2")}
      >
        Send Message
      </button>
    </form>
  );
}
