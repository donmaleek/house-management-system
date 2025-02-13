# House Management System

## Overview
The **House Management System** is a web application designed to help house agents manage apartment listings and enable tenants to browse, book, and pay for rooms. The system includes features such as:
- House agent registration and room posting.
- Tenant browsing and booking of rooms.
- M-Pesa payment integration for seamless transactions.
- Complaint ticketing system for tenants.

This project is built using:
- **Backend**: Node.js with Express and MySQL.
- **Frontend**: React.
- **Database**: MySQL.

---

## Features
1. **House Agents**
   - Register and log in.
   - Post houses and rooms with descriptions and images.
   - View bookings and manage rooms.

2. **Tenants**
   - Browse available rooms.
   - Book and pay for rooms via M-Pesa.
   - Raise complaints for issues.

3. **Admin**
   - Manage users, houses, and complaints.

---

## Prerequisites
Before running the project, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **MySQL** (v8.0 or higher)
- **npm** (Node Package Manager)
- **React** (via `create-react-app`)

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/house-management-system.git
cd house-management-system

2. Set Up the Backend
Navigate to the backend folder:
cd backend

Install dependencies:

bash
npm install
Create a .env file in the backend folder and add the following environment variables:

.env

DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=house_management
PORT=5000
MPESA_CONSUMER_KEY=your_mpesa_consumer_key
MPESA_CONSUMER_SECRET=your_mpesa_consumer_secret

Start the backend server:
bash
npm start

Set Up the Frontend
Navigate to the frontend folder:

bash
cd ../client
Install dependencies:

bash
npm install

Start the React development server:
bash
npm start

Set Up the Database
Log in to MySQL:

bash
mysql -u your_mysql_username -p

Create the database and tables by running the SQL scripts provided in the backend/db/schema.sql file.

Environment Variables
The following environment variables are required for the backend:

Variable	Description
DB_HOST	MySQL database host (e.g., localhost)
DB_USER	MySQL database username
DB_PASSWORD	MySQL database password
DB_NAME	MySQL database name
PORT	Backend server port (e.g., 5000)
MPESA_CONSUMER_KEY	M-Pesa API consumer key
MPESA_CONSUMER_SECRET	M-Pesa API consumer secret

API Documentation
The backend provides the following RESTful API endpoints:

Users
POST /api/users/register: Register a new user.

json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "tenant"
}


POST /api/users/login: Log in a user.

json
{
  "email": "john@example.com",
  "password": "password123"
}


Houses
POST /api/houses: Post a new house.

json
{
  "agent_id": 1,
  "name": "Sunset Apartments",
  "description": "A luxurious apartment in the city.",
  "location": "Nairobi"
}

GET /api/houses: Fetch all houses.

Rooms
POST /api/rooms: Post a new room.

json
{
  "house_id": 1,
  "name": "Room 101",
  "description": "A spacious room with a balcony.",
  "price": 15000,
  "image_url": "https://example.com/room101.jpg"
}

GET /api/rooms: Fetch all rooms.

Bookings
POST /api/bookings: Book a room.

json
{
  "tenant_id": 2,
  "room_id": 1,
  "payment_reference": "MPESA123456"
}

Complaints
POST /api/complaints: Raise a complaint.

json
{
  "tenant_id": 2,
  "room_id": 1,
  "description": "The water heater is not working."
}


Frontend Routes
The React frontend includes the following routes:

/: Home page (list of available rooms).

/register: User registration page.

/login: User login page.

/houses: House listing page (for agents).

/bookings: Booking page (for tenants).

/complaints: Complaint page (for tenants).

Contributing
Contributions are welcome! Follow these steps:

Fork the repository.

Create a new branch:
bash
git checkout -b feature/your-feature-name
Commit your changes:

bash
git commit -m "Add your feature"
Push to the branch:

bash
git push origin feature/your-feature-name
Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
M-Pesa API for payment integration.

MySQL for database management.

React and Node.js for building the application.


---

### How to Use:
1. Copy the entire content above.
2. Paste it into your project’s `README.md` file.
3. Replace placeholders (e.g., `your-username`, `your_mysql_username`, etc.) with your actual details.
4. Save the file.

This README is ready to use and provides a professional and detailed guide for your project! Let me know if you need further adjustments. 🚀
New chat

