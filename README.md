# ChatApp

A full-stack real-time chat application built with modern web technologies.

---

## 🚀 Frameworks & Libraries Used

### Frontend
- **React** (v19)
- **Vite** (v6)
- **React Router DOM** (v7)
- **Zustand** (state management)
- **Socket.io-client** (real-time communication)
- **Tailwind CSS** (utility-first CSS framework)
- **daisyUI** (Tailwind CSS component library)
- **React Hot Toast** (notifications)
- **React Icons** (icon library)

### Backend
- **Express.js** (v4)
- **Socket.io** (real-time communication)
- **Mongoose** (MongoDB ODM)
- **MongoDB** (database)
- **bcryptjs** (password hashing)
- **jsonwebtoken** (JWT authentication)
- **dotenv** (environment variables)
- **cookie-parser** (cookie handling)

---

## 📦 Setup

1. **Clone the project:**
   ```sh
   git clone <repo-url>
   cd chatApp
   ```
2. **Install backend and frontend dependencies:**
   ```sh
   npm install
   npm install --prefix frontend
   ```
3. **Create a .env file and add your MongoDB connection string:**
   ```env
   MONGO_DB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret
   ```
4. **Start in development mode:**
   - Backend: `npm run server`
   - Frontend: `npm run dev --prefix frontend`

5. **For production build:**
   ```sh
   npm run build
   npm start
   ```

---

## 📝 Notes
- Real-time messaging is powered by Socket.io.
- User authentication is handled with JWT and cookies.
- The background image and effects are defined in `frontend/src/index.css`.
- All styles are written with Tailwind CSS and daisyUI.

---

## 📄 License
MIT 