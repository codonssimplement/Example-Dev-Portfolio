# Example-Dev-Portfolio

markdown
Copier le code
# Contact Form Project with NestJS and React

In this project, we will develop an example of a portfolio of a full stack developer using React for the frontend and NestJS for the backend. The backend will handle requests sent by the contact form and properly configure the API to receive and process the form data.

## Prerequisites

- **Node.js** 
- **npm** (or **yarn**)
- **PostgreSQL** (for the database)

## Backend Setup (NestJS)

1. **Clone the repository:**

   bash
   git clone <backend_repo_url>
   cd <backend_repo_name>
Install dependencies:

bash
Copier le code
npm install
Configure the database:

Create a PostgreSQL database.

Set up database connection details in the .env file:

env
Copier le code
DATABASE_URL=postgres://<user>:<password>@localhost:<port>/<database_name>
Run migrations (if applicable):

bash
Copier le code
npm run migration:run
Start the server:

bash
Copier le code
npm run start
The server should be available at http://localhost:3000.

Frontend Setup (React)
Clone the repository:

bash
Copier le code
git clone <frontend_repo_url>
cd <frontend_repo_name>
Install dependencies:

bash
Copier le code
npm install
