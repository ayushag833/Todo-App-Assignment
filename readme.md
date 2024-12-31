# Todo List API

This project is a REST API service built with **Express** and **MongoDB** using **TypeScript**, following the **MVC pattern**. It allows managing a simple to-do list application with endpoints for creating, fetching, updating, and deleting tasks.

**Endpoints**:

- `POST /tasks`: Create a new task.
- `GET /tasks`: Fetch all tasks.
- `GET /tasks/:id`: Fetch a task by ID.
- `PUT /tasks/:id`: Update the status of a task.
- `DELETE /tasks/:id`: Delete a task by ID.

---

## Prerequisites

Ensure the following are installed on your system:

- Node.js (v16 or higher)
- npm (Node Package Manager)
- MongoDB (local or hosted service)

---

## Installation

**Set Up Environment Variables**:
Create a `.env.local` file in the root directory and add the following:

```env
PORT=your_port
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## Running the Application

**Run the Application**:

npm run dev

The server will start at `http://localhost:4000`.

---

### Endpoints

1. **Create Task**

   - **URL**: `POST /api/tasks`
   - **Body**:
     ```json
     {
       "title": "Sample Task",
       "description": "Task description"
     }
     ```
   - **Response**:
     ```json
     {
       "_id": "task_id",
       "title": "Sample Task",
       "description": "Task description",
       "status": "pending",
       "__v": 0
     }
     ```

2. **Fetch All Tasks**

   - **URL**: `GET /api/tasks`

3. **Fetch Task by ID**

   - **URL**: `GET /api/tasks/:id`

4. **Update Task Status**

   - **URL**: `PUT /api/tasks/:id`
   - **Body**:
     ```json
     {
       "status": "in-progress"
     }
     ```

5. **Delete Task**
   - **URL**: `DELETE /api/tasks/:id`
