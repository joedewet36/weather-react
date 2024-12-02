# ClimaSphere

## Overview

This project is a modern web application built with **React**, **TypeScript**, and **Node.js**. It offers a robust and scalable fullstack architecture, integrating a responsive frontend with a powerful backend API. The application leverages TypeScript for type safety, ensuring a maintainable and reliable codebase.
## Core Features:
1. Current Weather:
   Display the current weather for a specified location.
* 3-Day Forecast & 3-Day History:
* Show weather details for the next 3 days and the past 3 days in a grid or list view.
* Interactive Selection:
* Clicking on a day’s weather tile updates the main display to show details for that specific day.
## Features

*   **Frontend:** React with TypeScript, React Router, and state management (e.g., Context API or Redux).
*   **Backend:** Node.js with Express for RESTful API design.
*   **Database:** MongoDB (or other, depending on configuration).
*   **Testing:** Unit tests using **Jest** and **React Testing Library** (frontend) and **Mocha/Chai** (backend).

## Setup Instructions

### Prerequisites

1.  **Node.js** (version 18+ recommended)
2.  **WeatherStack API**
3.  **Git**

### Installation

1.  Clone the repository:
          git clone https://github.com/joedewet36/weather-react.git
2.  cd WEATHER-REACT
3.  Install dependencies
        npm install

14.  npm install
15.  Set up environment variables:  
    Create a .env file in the server directory with the following values:
16.  env
17.  Copy code
18.  PORT=3000
19.  NODE\_ENV=development
20.  MONGODB\_URI=mongodb://localhost:27017/your-database-name
21.  JWT\_SECRET=your-secret-key

### Run the Application

1.  Start the MongoDB server:
2.  bash
3.  Copy code
4.  mongod
5.  Start the backend server:
6.  bash
7.  Copy code
8.  cd server
9.  npm start
10.  Start the frontend development server:
11.  bash
12.  Copy code
13.  cd ../client
14.  npm start

The application will now be accessible at **http://localhost:3000**.

## Design Decisions and Trade-Offs

1.  **React with TypeScript:** Chosen for its powerful type safety and ability to catch errors at compile time, enhancing maintainability and scalability. Trade-off: Slightly steeper learning curve for developers unfamiliar with TypeScript.
2.  **Node.js with Express:** Lightweight and efficient for building RESTful APIs. Trade-off: Lacks out-of-the-box solutions for certain backend tasks compared to larger frameworks.
3.  **State Management:** Used Context API for simplicity and avoiding Redux boilerplate. Trade-off: May require migration to Redux for more complex state scenarios.
4.  **Database Choice (MongoDB):** Non-relational database chosen for flexibility with unstructured data. Trade-off: Relational databases might be preferred for applications with complex joins.
5.  **Component-Based UI:** Designed reusable React components for a modular and maintainable frontend. Trade-off: Initial time investment in creating reusable components.

## Unit Testing

### Frontend Testing

*   Framework: **Jest** and **React Testing Library**.
*   Test focus:
*   Component rendering
*   Event handling and state updates
*   Integration of API calls with mock data
*   Run frontend tests:
*   bash
*   Copy code
*   cd client
*   npm test

### Backend Testing

*   Framework: **Mocha** with **Chai** for assertions.
*   Test focus:
*   API endpoints
*   Business logic
*   Database interactions with mock databases
*   Run backend tests:
*   bash
*   Copy code
*   cd server
*   npm test

## Contributing

1.  Fork the repository.
2.  Create a new branch (git checkout -b feature-name).
3.  Commit changes (git commit -m 'Add feature').
4.  Push the branch (git push origin feature-name).
5.  Open a pull request.

## License

This project is licensed under the MIT License.