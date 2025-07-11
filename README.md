# Pet Care Center SPA 🐾

A comprehensive Single Page Application for a pet care center where customers can leave their pets to be cared for while they're away from home.

---

## 📋 Project Overview

This project consists of developing a Single Page Application (SPA) for a vacation pet care center. The application allows pet owners to register, manage their pets' information, handle bookings (care reservations), and includes an authentication system with role-based access control.

The solution is built with vanilla HTML, CSS, and JavaScript, consuming a simulated API using `json-server`, with smooth navigation between views without full page reloads.

---

## 🚀 Technologies Used

- **HTML5** – Structure and markup
- **CSS3** – Styling and responsive design
- **JavaScript Vanilla** – Client-side logic and SPA functionality
- **Node.js** – Runtime environment
- **json-server** – Backend API simulation
- **LocalStorage** – Session management
- **CRUD operations** – Using `fetch()` or `axios` with RESTful routes

---

## 📁 Project Structure
``
pet-care-center/
├── index.html
├── styles/
│   ├── main.css
│   └── components/
├── scripts/
│   ├── app.js
│   ├── auth.js
│   ├── api.js
│   └── utils.js
├── views/
│   ├── landing.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   └── 404.html
├── database.json
├── postman_collection.json
└── README.md
``
---

## 📊 Database Structure
The database is organized into four main collections:
### `Roles Collection
``
json{
  "roles": [
    { "id": 1, "name": "worker" },
    { "id": 2, "name": "customer" }
  ]
}
``

Users Collection
Required fields:

nombre (name)
identidad (ID number)
telefono (phone)
direccion (address)
email
contrasena (password)
rolId (role relationship)

Pets Collection
Required fields:

nombre (name)
peso (weight)
edad (age)
raza (breed)
anotaciones (notes - optional)
temperamento (temperament)
userId (owner relationship)

Stays Collection
Required fields:

ingreso (check-in date)
salida (check-out date)
petId (pet relationship)
serviciosAdicionales (additional services array)
valorDia (daily rate)
completada (completed status)

## 💰 Stay Cost Calculation

The system automatically calculates the total cost of a stay:

Calculate days: Difference between check-in and check-out dates
Multiply: Number of days × daily rate (valorDia)
Display: Total amount to be paid

Example:

``
json{
  "ingreso": "2025-07-10",
  "salida": "2025-07-15",
  "valorDia": 40000
}
``
Stay duration: 6 days (including day 10 and 15)
Calculation: 6 × 40,000 = 240,000
Display: "Total Value: $240,000"

---

## 🎯 Features

### Authentication System

- Login: Email/ID and password verification
- Registration: Available only for customers (rolId = 2)
- Session Management: Using LocalStorage with "currentUser" key
- Role-based Access Control: Different permissions for workers and customers

## Customer Features

- View only their pets
- Register new pets
- Edit/delete pets (only if no active stays)
- Profile management (optional)
- Logout functionality

## Worker Features

- View all system pets
- View all users
- Create stays for pets
- Edit and complete stays
- Full system management
- Logout functionality

## 📱 Application Views
### Landing Page

Welcome message
No active session: Login and Register buttons
Active session: Go to Dashboard button

Login View

Email/ID and password fields
Validates against json-server
Stores authenticated user in localStorage

## Registration View

- Available only for customer users
- All user fields must be completed
- Adds new user via POST request

Dashboard View

Access Control: Only accessible with active session
Role-based Interface: Different features for customers vs workers
Real-time Data: Dynamic content loading

🔄 API Routes
PurposeREST RouteExampleView user's pets/pets?userId=2Get pets for user ID 2View pet's stays/stays?petId=1Get stays for pet ID 1Find user by email/users?email=laura@mail.comSearch user by emailFilter by role/users?rolId=1Get all workers
🛠️ Installation & Setup

Clone the repository
bashgit clone [repository-url]
cd pet-care-center

Install dependencies
bashnpm install -g json-server

Start the json-server
bashjson-server --watch database.json --port 3000

Open the application

Open index.html in your browser
Or use a local server like Live Server (VS Code extension)



## 📋 Required Deliverables

- ✅ database.json - Fully functional with all collections
- ✅ Postman Collection - Complete API endpoints with real examples
- ✅ Complete Project - Clear structure with separated files

## 🔧 Development Guidelines

### SPA Navigation

Views change smoothly using JavaScript (.innerHTML or similar)
No full page reloads
Invalid routes redirect to 404 page

### Session Management

Active session stored in LocalStorage
Dashboard access requires currentUser verification
Logout clears localStorage and redirects to landing

### Error Handling

404 page for invalid routes
Form validation
API error responses

### 🎨 UI/UX Considerations

Responsive Design: Works on desktop and mobile
Intuitive Navigation: Clear user flow
Visual Feedback: Loading states and success/error messages
Accessibility: Proper HTML semantics and ARIA labels

### 🧪 Testing
Use the included Postman collection to test all API endpoints:

GET requests for data retrieval
POST requests for creating records
PATCH requests for updates
DELETE requests for removing records

## 📝 Development Roadmap

Phase 1: Setup project structure and database
Phase 2: Implement authentication system
Phase 3: Create customer dashboard and pet management
Phase 4: Develop worker dashboard and stay management
Phase 5: Add stay cost calculation
Phase 6: Testing and refinement

## 📄 License
This project is part of a learning exercise and is available for educational purposes.

Note: This SPA demonstrates modern web development practices using vanilla JavaScript, focusing on clean code organization, API integration, and user experience design.