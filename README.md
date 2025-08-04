# AI-First-Build

A modern full-stack web application that transforms website ideas into reality using AI-powered section generation. Built with Next.js, NestJS, and MongoDB.

## 🚀 Running Instructions

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud)
- Docker (optional, for MongoDB)

### Quick Start

1. **Set up MongoDB**

   ```bash
   # Using Docker
   docker run -d -p 27018:27017 --name mongodb mongo:latest
   ```

2. **Install Frontend Dependencies**

   ```bash
   cd stunning-client
   npm install
   ```

3. **Install Backend Dependencies**

   ```bash
   cd ../stunning-api
   npm install
   ```

4. **Configure Environment Variables**

   ```bash
   # In stunning-api/.env
   MONGODB_URI=mongodb://localhost:27018/stunning-api
   PORT=3001
   ```

5. **Start the Backend**

   ```bash
   cd stunning-api
   npm run start:dev
   ```

6. **Start the Frontend**

   ```bash
   cd stunning-client
   npm run dev
   ```

7. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, TailwindCSS
- **Backend**: NestJS, MongoDB, Mongoose
- **Database**: MongoDB

---

**Built with ❤️ using Next.js, NestJS, and MongoDB**
