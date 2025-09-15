# GPU Showcase Web App

This is a full-stack web application built with a Vue.js frontend and an Express.js backend. It provides a dynamic interface for submitting and managing user data, styled with a tech-showcase theme inspired by NVIDIA and AMD.

The application supports full CRUD (Create, Read, Update, Delete) functionality.

---

## Features

* **Modern Frontend:** A single-page application (SPA) built with Vue.js and Vue Router.
* **Backend API:** A robust backend powered by Express.js to handle data operations.
* **Full CRUD:** Users can create, view, edit, and delete data entries.
* **Dynamic UI:** A responsive user interface with a sleek, dark theme.
* **File Uploads:** The admin form supports image file uploads.

---

## Prerequisites

Before you begin, ensure you have [Node.js](https://nodejs.org/) (which includes npm) installed on your system.

---

## How to Run the Application

There are two ways to run this project. The first method is the simplest and is recommended for grading and demonstration.

### Method 1: Production Mode (Recommended)

This method bundles the entire application and runs it from a single server, just like a real website.

1.  **Install All Dependencies:**
    * Open a terminal in the project's root directory (`WCSERVER`) and run:
        ```bash
        npm install
        ```
    * Then, navigate into the `client` directory and do the same:
        ```bash
        cd client
        npm install
        ```

2.  **Build the Vue Frontend:**
    * While still in the `client` directory, run the build command. This compiles the frontend into a `dist` folder.
        ```bash
        npm run build
        ```

3.  **Start the Server:**
    * Navigate back to the root directory and start the Express server.
        ```bash
        cd ..
        node express.js
        ```

4.  **View the App:**
    * The entire application is now running from the backend server. Open your web browser and go to:
        **[http://localhost:5000](http://localhost:5000)**

---

### Method 2: Development Mode

This method is for developers. It runs the frontend and backend on separate servers, which allows for features like live-reloading. **It requires two terminals.**

1.  **Start the Backend Server (Terminal 1):**
    * In the root directory, run:
        ```bash
        node express.js
        ```
    * This server will handle all API requests on `http://localhost:5000`.

2.  **Start the Frontend Server (Terminal 2):**
    * Open a new terminal and navigate to the `client` directory. Run the `serve` command:
        ```bash
        cd client
        npm run serve
        ```

3.  **View the App:**
    * The frontend development server will provide a URL. Open your browser and go to it:
        **[http://localhost:8080](http://localhost:8080)**