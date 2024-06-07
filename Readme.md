### Title
Task management

## Features

- Create tasks with a title and description.
- View a list of all tasks.
- Mark tasks as completed.
- Edit task details.
- Delete tasks.

### Install the dependencies
npm install

### Create a .env file
CONNECTION_URL = your mongodb conncetion URL
PORT = your server on which port will be running

### Routes
1. POST /api/tasks: Create a new task.
2. PUT /api/tasks/:id: Update a task.
3. DELETE /api/tasks/:id: Delete a task.
4. GET /api/tasks: Retrieve all tasks in descending order of timestamp.

5. If any other request will hit then it will throught Route not found with status code of 404

### To start the server
npm start =  it will start serevr with nodemon