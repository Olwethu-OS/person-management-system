# Person Management System

## About the Project

The Person Management System is a web application that allows users to manage personal records. It provides functionality to add, view, update, and delete people's information through a simple user interface.

This project demonstrates practical skills in frontend development, backend development, API integration, and database management.

## Features

- **Add Person:** Register a person using their first name, surname, and age.
- **View All People:** Display all registered people in a table.
- **Update Person:** Edit existing personal information.
- **Delete Person:** Remove a person's record.
- **REST API Integration:** Communicate with the backend to manage data.

## Technologies Used

**Frontend**

- React
- JavaScript
- Tailwind CSS
- Axios
- React Router
- Vite

**Backend**

- Java
- Spring Boot
- REST API

**Database**

- PostgreSQL

**Tools**

- WebStorm
- IntelliJ IDEA
- Git
- GitHub

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js and npm
- Java JDK
- Maven
- PostgreSQL

### 1. Clone the Repository

```bash
git clone https://github.com/Olwethu-OS/person-management-system.git
```



### 2. Run the Frontend

Navigate to the frontend project directory and run:

```bash
npm install
npm run dev
```

Open the local URL provided by Vite in your browser.

### 3. Run the Backend

Open the Spring Boot project in IntelliJ IDEA, configure your database connection, and run the application.

The backend runs on port `8081` in the current development setup.

### 4. Configure the Database

Ensure PostgreSQL is running and configure your Spring Boot database connection settings to match your local environment.

## Future Improvements

- Add form validation and improved error handling.
- Improve the user interface and responsiveness.
- Add search and filtering functionality.
- Implement authentication and authorization.

## Author

**Olwethu Dlamini**

Computer Science student at Tshwane University of Technology (TUT).

Interested in software development, technology, and building solutions to real-world problems.

---

*Built with React, Spring Boot, and PostgreSQL.*

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
