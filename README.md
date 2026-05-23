# NovaChat 🚀

A full-stack AI chat application built with React and Node.js, inspired by ChatGPT.

## 🌐 Live Demo
[NovaChat on Render](https://novachat-g935.onrender.com)

---

## 🛠️ Tech Stack

### Frontend
- React 19 + Vite
- Tailwind CSS
- React Icons
- React Markdown + Highlight.js

### Backend
- Node.js + Express
- MongoDB + Mongoose
- Google Gemini AI API

---

## ✨ Features

- 💬 Real-time AI chat powered by Google Gemini
- 🗂️ Multiple chat threads
- 🗑️ Delete chat threads
- 📱 Responsive design (mobile + desktop)
- 🔄 Chat history persistence
- ⌨️ Typing animation for AI responses
- 🌙 Dark mode UI

---

## 📁 Project Structure

NOVACHAT/
├── Backend/
│   ├── models/
│   ├── routes/
│   │   └── chat.js
│   ├── utils/
│   ├── .env
│   └── server.js
└── Frontend/
├── public/
└── src/
├── assets/
├── App.jsx
├── Chat.jsx
├── ChatWindow.jsx
├── MyContext.jsx
└── Sidebar.jsx

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB
- Google Gemini API Key

### Installation

**Clone the repo:**
```bash
git clone https://github.com/yourusername/novachat.git
cd novachat
```

**Backend setup:**
```bash
cd Backend
npm install
```

Create `.env` file in Backend:
```env
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
PORT=8080
```

```bash
npm run dev
```

**Frontend setup:**
```bash
cd Frontend
npm install
```

Create `.env` file in Frontend:
```env
VITE_API_URL=http://localhost:8080
```

```bash
npm run dev
```

---

## 🔧 Environment Variables

### Backend
| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB connection string |
| `GEMINI_API_KEY` | Google Gemini API key |
| `PORT` | Server port (default: 8080) |

### Frontend
| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API URL |

---

## 📸 Screenshots

> Add screenshots here

---

## 🙏 Credits

Built with ❤️ by Arya
