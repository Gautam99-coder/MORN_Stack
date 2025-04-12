# **Todo List App - Full Stack (TypeScript + React + Node.js)**

A **full-stack Todo List application** built with:  
✅ **Frontend**: React + TypeScript + Tailwind CSS  
✅ **Backend**: Node.js + Express + TypeScript  
✅ **Database**: MongoDB  

---

## **🚀 Quick Start**

### **Prerequisites**
- Node.js (v16+)  
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas/database))  
- Yarn or npm  

---

## **⚙️ Setup & Run**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/todo-list-app.git
cd todo-list-app
```

### **2. Set Up Backend**
```bash
cd server
npm install                   # Install dependencies
npm run dev                  # Start dev server (http://localhost:5000)
```
**Backend runs on:** `http://localhost:5000`  
**API Endpoint:** `http://localhost:5000/api/todos`  

*(Ensure MongoDB is running locally or update `MONGO_URI` in `server/src/server.ts`)*  

---

### **3. Set Up Frontend**
```bash
cd ../client
npm install                   # Install dependencies
npm start                    # Start React app (http://localhost:3000)
```
**Frontend runs on:** `http://localhost:3000`  

---

## **📂 Project Structure**
```
todo-list-app/
├── client/                  # React Frontend
│   ├── src/
│   │   ├── components/      # Todo UI components
│   │   ├── types/           # TypeScript interfaces
│   │   ├── App.tsx          # Main component
│   └── package.json
├── server/                  # Node.js Backend
│   ├── src/
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API endpoints
│   │   ├── app.ts           # Express config
│   └── package.json
```

---

## **🔧 Tech Stack**
| **Frontend**       | **Backend**        |
|--------------------|--------------------|
| React + TypeScript | Node.js + Express  |
| Tailwind CSS       | MongoDB (Mongoose) |
| Axios (HTTP)       | TypeScript         |
| Vite (Optional)    | CORS middleware    |

---

## **🌐 API Endpoints**
| Method | Endpoint          | Description            |
|--------|-------------------|------------------------|
| `GET`  | `/api/todos`      | Fetch all todos        |
| `POST` | `/api/todos`      | Add a new todo         |

---

## **🛠 Troubleshooting**
1. **MongoDB Connection Error**  
   - Ensure MongoDB is running (`mongod`).  
   - Update `MONGO_URI` in `server/src/server.ts` if using a remote DB.  

2. **CORS Issues**  
   - Backend already has `cors()` middleware. If issues persist, whitelist `http://localhost:3000`.  

3. **TypeScript Errors**  
   - Run `npm install` in both `/client` and `/server`.  
   - Ensure VS Code uses the workspace TypeScript version (`Ctrl+Shift+P` > "Select TypeScript Version").  

---

## **📜 License**
MIT © [Gautam99_coder]  

---

**🎉 Happy Coding!**  
Let me know if you need enhancements or run into issues! 🚀
