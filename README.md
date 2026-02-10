
User CRUD Application
This is a simple React CRUD (Create, Read, Update, Delete) application that allows users to manage user records.  
The project is built as part of an assignment to demonstrate React fundamentals and CRUD functionality.

GitHub Repository:  
https://github.com/malovikas/uesr-Crud
1) Setup Instructions
Follow the steps below to run the project locally:

1. Clone the repository
   git clone https://github.com/malovikas/uesr-Crud.git
2.Navigate to the project folder
   cd uesr-Crud
3.Install dependencies
  npm install
4.Start the React application
  npm start


2) Assumptions & Design Decisions
    a.Used React for simplicity and faster setup
    b.MockAPI.io is used as a mock backend
    c.Kept UI simple and focused on functionality
    d.API base URL is kept configurable for easy backend changes

3) Mock API Setup
    a.The application uses MockAPI.io as a mock backend service
    b.User data is stored and managed remotely on MockAPI.io
    c.No local server setup is required
    d.The API supports: a.GET – fetch user list
                        b.POST – add new user
                        c.PUT – update existing user
                        d.DELETE – remove use

 4) To add a new field:
    1.Open src/config/userForm.js
    2.Add a new field object inside the userForm array (for example: name, type, required)
    3.Save the file
    The new field will automatically appear in the Add/Edit form and be included in form submission.

