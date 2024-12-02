# ClimaSphere
DEMO deployd here :[ClimaSphere](#https://clima-sphere.netlify.app) 
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

*   **Frontend:** React with TypeScript, and state management Context API .

*   **Testing:** Unit tests using **Jest** and **React Testing Library** (frontend) 

## Setup Instructions

### Prerequisites

1.  **Node.js** (version 18+ recommended)
2.  **WeatherStack API**
    Get an API Key from Weatherstack https://weatherstack.com/ .This app is using a Proffesional Subscription so it can access historical and forecast data 
3.  **Git**

### Installation

1.  Clone the repository:
          git clone https://github.com/joedewet36/weather-react.git
2.  cd WEATHER-REACT
3.  Install dependencies
        npm install

14.  npm install
15.  Set up environment variables:  
## Create a .env file in the server directory with the following values:
    VITE_API_KEY=<YOUR_API_KEY>
    VITE_DEFAULT_LATITUDE = -25.747
    VITE_DEFAULT_LONGITUDE = 28.188
### Run the Application
     npm run dev

The application will now be accessible at **http://localhost:3000**.

## Design Decisions and Trade-Offs

1.  **React with TypeScript:** Chosen for its powerful type safety and ability to catch errors at compile time, enhancing maintainability and scalability. Trade-off: Slightly steeper learning curve for developers unfamiliar with TypeScript.
2.  **State Management:** Used Context API for simplicity and avoiding Redux boilerplate. Trade-off: May require migration to Redux for more complex state scenarios.
3.  **Component-Based UI:** Designed reusable React components for a modular and maintainable frontend. Trade-off: Initial time investment in creating reusable components.

## Unit Testing

### Frontend Testing

*   Framework: **Jest** and **React Testing Library**.
### Run the Tests
     npm run test
     

## Contributing

1.  Fork the repository.
2.  Create a new branch (git checkout -b feature-name).
3.  Commit changes (git commit -m 'Add feature').
4.  Push the branch (git push origin feature-name).
5.  Open a pull request.

## License

This project is licensed under the MIT License.