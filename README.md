
# 📰 Copilot 24 React Blog Site

A modern and responsive blog platform built with **React + Vite**. This project includes simple authentication, dynamic pages, and a clean UI.

---

##
This project also utilizes an open source API from GitHub to fetch and display blog data, demonstrating integration with external data sources.

---

## ✨ Features

- ⚛️ **React + Vite Setup** – Fast and modern development tooling
- 🔐 **Login & Register with LocalStorage Authentication**
  - Password visibility toggle
  - "Remember Me" feature with autofill on revisit
  - Toast notifications for success & error
- 📬 **Contact Form** with styled input handling
- 🖼 **Responsive Design** – Works well on mobile, tablet, and desktop
- 📁 Modular Component-Based Structure

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run locally:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📄 Pages

| Route         | Description             |
| ------------- | ----------------------- |
| `/`           | Home (Blog List View)   |
| `/login`      | Login page              |
| `/register`   | Registration page       |
| `/contact`    | Contact form            |

---

## 🔐 Authentication Enhancements

### ✅ Login Page

- Password visibility toggle (`👁 Show/Hide`)
- "Remember Me" checkbox – auto-fills saved credentials
- Toast notifications using `react-toastify`
- Client-side form validation
- Modern and responsive UI

### 🆕 Register Page

- Stores new user credentials in localStorage
- Clean UI with validation
- Alerts user upon successful registration

---

## 📬 Contact Page

- Responsive and modern form
- Captures user name, email, and message
- Validates inputs before submission
- Demo-only: shows a confirmation alert

---

## 📷 Preview

> Add a screenshot below showing the app’s UI (Login, Register, Home, etc.)

```
🖼 ![Preview Image](preview.png)
```
![Preview of Copilot 24 React Blog Site](../react/src/assets/image/ChatGPT%20Image%20Jun%2025,%202025,%2009_02_33%20PM.png)



---

## ⬆️ Upload to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

---

## 🔧 Tech Stack

- React (Hooks: `useState`, `useEffect`, `useNavigate`)
- Vite
- LocalStorage for demo-auth
- React Toastify
- Inline styling (can be refactored to Tailwind or CSS modules)

---

## 📌 Future Enhancements

- 🔑 Backend integration (Firebase/Auth, Supabase, Node.js)
- 🔒 Secure token-based authentication (JWT)
- 📧 Email verification & password reset
- 🧪 Form validation with libraries like `Formik` or `React Hook Form`
- 🌈 Use Tailwind CSS for scalable styling

---

## 👨‍💻 Author

Built by [Your Name](https://github.com/NwogboPrince)

---

## 🪪 License

MIT
