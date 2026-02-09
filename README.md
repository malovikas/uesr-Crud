User CRUD Application
This is a simple React CRUD (Create, Read, Update, Delete) pplication that allows users to manage user records.  
The project is built as part of an assignment to demonstrate React fundamentals and CRUD functionality.

GitHub Repository:  
https://github.com/malovikas/user-Crud

1) Setup Instructions

Follow the steps below to run the project locally:
1. Clone the repository
   git clone https://github.com/malovikas/user-Crud.git
2.Navigate to the project folder
   cd user-Crud
3.Install dependencies
  npm install
4.Start the React application
  npm start


2) Assumptions & Design Decisions
    a.Used React for simplicity and faster setup
    b.Used JSON Server as a mock backend instead of a real API
    c.Kept UI simple and focused on functionality
    d.No authentication implemented as it was not required
    e.API base URL is kept configurable for easy backend changes

3) Mock API Setup
    a.Mock API is created using JSON Server
    b.Data is stored in db.json
    c.Run the mock API (JSON Server)
        npx json-server --watch db.json --port 3001


