# bookxpert_task

# Employee Management Dashboard

This project is a web-based employee management dashboard that allows users to perform CRUD (Create, Read, Update, Delete) operations on a list of employees. It features a login system, a dashboard to view and manage employees, and the ability to filter and search for specific employees.

## Tech Stack

- **Frontend:**
  - React
  - React Router for navigation
  - Material-UI for UI components
- **Backend (Mock):**
  - `json-server` to simulate a REST API
- **Utilities:**
  - `jspdf` and `jspdf-autotable` for generating PDF reports of employee details.

## Getting Started

To get the project up and running on your local machine, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation & Setup

1. **Clone the repository** (or download the source code).

2. **Install frontend dependencies:**
   Navigate to the project's root directory in your terminal and run:
   ```bash
   npm install
   ```

3. **Install and run the mock API server:**
   In a separate terminal, install `json-server` and start the server:
   ```bash
   npm install -g json-server
   json-server --watch src/components/db.json --port 4000
   ```
   This will start a mock API server at `http://localhost:4000`.

4. **Start the React application:**
   In the original terminal, run:
   ```bash
   npm start
   ```
   This will open the application in your default browser at `http://localhost:3000`.

## Features

- **User Authentication:** Simple login system to access the dashboard.
- **Employee Management:**
  - **Create:** Add new employees to the system.
  - **Read:** View a list of all employees with their details.
  - **Update:** Edit existing employee information.
  - **Delete:** Remove employees from the system.
- **Search and Filter:** Search for employees by name and filter them by gender or status (active/inactive).
- **Print Employee Details:** Generate a PDF file with the details of a specific employee.

## Assumptions and Design Decisions

- **Mock Backend:** The project uses `json-server` to provide a mock REST API for employee data. This is for demonstration purposes and would be replaced by a real backend in a production environment.
- **Authentication:** User authentication is handled using `localStorage`. This is a simplified approach for this project and is not recommended for production due to security reasons.
- **Styling:** The project uses a combination of standard CSS, and Material-UI's `sx` prop for styling.