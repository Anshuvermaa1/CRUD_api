# 🚀 Fullstack CRUD App – Nx Monorepo (Django + React + GraphQL)

This project is a fullstack CRUD application built using:

- 🌐 **Backend:** Django + Strawberry GraphQL
- 💻 **Frontend:** React + TypeScript + Apollo Client
- 🧠 **GraphQL Codegen** for type safety
- ✅ **Zod** for schema validation
- 🧱 **Nx** for monorepo orchestration
- 🔔 **React Toastify** for notifications
- 🔐 No authentication for now (public CRUD)





---

## 🧰 Tech Stack

### Backend
- Python 3.10+
- Django
- Strawberry (GraphQL)
- SQLite (development)
- Nx (monorepo orchestration)

### Frontend
- React
- TypeScript
- Vite
- Apollo Client
- React Hook Form
- Zod (schema validation)
- GraphQL Code Generator
- React Toastify
- Nx (monorepo orchestration)

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js 18+
- Python 3.10+
- `pip`, `venv`
- Nx CLI:  
  ```bash
  pnpm install -g nx

# 🔁 Setup

## 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd <repo-root>
pnpm install
```

---

## 2️⃣ Backend Setup

```bash
cd apps/backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
nx run backend:migrate
```

### ▶️ Run Backend

```bash
nx serve backend
```

GraphQL Playground:  
[http://localhost:8000/graphql](http://localhost:8000/graphql)

---

## 3️⃣ Frontend Setup

```bash
nx serve frontend
```

Frontend will be available at:  
[http://localhost:4200](http://localhost:4200)

---

# ⚙️ GraphQL Code Generation

> Generates typed hooks from GraphQL schema and `.graphql` documents.


## 1. Run the codegen command

```bash
pnpm run codegen
```

---

# ✅ Nx Commands

## 🐍 Backend

| Command                             | Description             |
|-------------------------------------|-------------------------|
| `nx serve backend`                  | Run Django dev server   |
| `nx run backend:makemigrations`     | Generate DB migrations  |
| `nx run backend:migrate`            | Apply DB migrations     |
| `nx run backend:shell`              | Open Django shell       |

## ⚛️ Frontend

| Command              | Description             |
|----------------------|-------------------------|
| `nx serve frontend`  | Start Vite dev server   |
| `nx build frontend`  | Build frontend for prod |
| `nx lint frontend`   | Lint frontend code      |
| `nx test frontend`   | Run frontend tests      |