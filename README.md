# salary-management

Employees Salary Management Systems

#  Salary Management System

A full-stack Salary Management System built with **Node.js, Express, Prisma, PostgreSQL, and React (Vite)**.
Designed with a **scalable architecture, Docker support, and DevOps-ready practices**.

---

##  Features

* Employee CRUD APIs
* Salary insights (min, max, avg by country)
* Prisma ORM with PostgreSQL
* RESTful API design
* React frontend with Axios
* Dockerized setup (backend + database)
* Seed script for bulk data (10,000 records)
* Basic API testing with Jest & Supertest

---

## Tech Stack

### Backend

* Node.js
* Express.js
* Prisma ORM
* PostgreSQL

### Frontend

* React (Vite)
* Axios

### DevOps

* Docker
* Docker Compose

---

##  Project Structure

```
salary-management/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── app.js
│   │   └── server.js
│   ├── prisma/
│   ├── tests/
│   └── .env
├── frontend/
└── docker-compose.yml
```

---

## Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-url>
cd salary-management
```

---

### 2. Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/salary_db"
```

Run migrations:

```
npx prisma migrate dev --name init
```

Run backend:

```
node src/server.js
```

---

### 3. Frontend Setup

```
cd ../frontend
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

##  Docker Setup (Recommended)

```
docker-compose up --build
```

Services:

* Backend → http://localhost:3000
* Database → PostgreSQL

---

##  Seed Database

```
node prisma/seed.js
```

---

##  API Endpoints

### Employees

* `GET /employees` → Get all employees
* `POST /employees` → Create employee
* `PUT /employees/:id` → Update employee
* `DELETE /employees/:id` → Delete employee

### Insights

* `GET /insights` → Salary stats by country

---

##  Testing

```
npm test
```

---

##  Architecture

* **Routes** → API endpoints
* **Controllers** → Request handling
* **Services** → Business logic
* **Prisma** → Database layer

---

##  Environment Variables

| Variable     | Description               |
| ------------ | ------------------------- |
| DATABASE_URL | PostgreSQL connection URL |

---

##  Future Improvements

* Authentication (JWT)
* Role-based access control
* Pagination & filtering
* CI/CD pipeline (GitHub Actions / Jenkins)
* Deployment on AWS EKS
* Monitoring (Prometheus + Grafana)

---

## Developer Notes

* Used Prisma aggregation for insights
* Optimized bulk insert using `createMany`
* Designed for containerized environments

---
Author

**Gulshan Soni**
DevOps Engineer | AWS | Kubernetes | CI/CD

--- 
