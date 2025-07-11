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

```
pet-care-spa/
├── 📄 index.html                   # Main entry point (SPA rendered here)
│
├── 📁 public/                      # Public static files and mock database
│   ├── 📄 database.json            # Mock database for JSON Server
│   └── 📁 assets/                  # Assets like images, icons, and fonts
│       ├── 📁 images/
│       │   ├── 🖼️ logo.png
│       │   ├── 🖼️ logoGithub.png
│       │   └── 📁 icons/           # Custom SVG or PNG icons
│       │       ├── 🖼️ pet-icon.svg
│       │       ├── 🖼️ user-icon.svg
│       │       └── 🖼️ stay-icon.svg
│       └── 📁 fonts/              # Optional: Custom web fonts
│
├── 📁 css/                         # All stylesheets
│   ├── 📄 main.css                 # Global styles
│   ├── 📄 variables.css            # CSS custom properties (colors, spacing, etc.)
│   └── 📁 components/              # Styles by component
│       ├── 📄 auth.css             # Login/Register form styles
│       ├── 📄 dashboard.css        # Dashboard layout and widgets
│       ├── 📄 forms.css            # Shared form components
│       ├── 📄 cards.css            # Pet cards, user cards, etc.
│       └── 📄 modals.css           # Modal windows (popups)
│
├── 📁 js/                          # JavaScript logic (modularized)
│   ├── 📄 app.js                   # Main script (entry point)
│   └── 📁 modules/                 # JS modules (ESM)
│       ├── 📄 auth.js              # Authentication logic
│       ├── 📄 api.js               # API handling (CRUD functions)
│       ├── 📄 router.js            # SPA router logic
│       ├── 📄 petManager.js        # Pet entity CRUD & UI
│       ├── 📄 stayManager.js       # Stay/bookings logic
│       ├── 📄 userManager.js       # User entity (admins, roles, etc.)
│       └── 📄 utils.js             # Helper functions (dates, format, etc.)
│
├── 📁 views/                       # HTML views dynamically injected
│   ├── 📄 landing.html             # Homepage view
│   ├── 📄 login.html               # Login form
│   ├── 📄 register.html            # Registration form
│   ├── 📄 404.html                 # Not Found page
│   ├── 📄 403.html                 # ⚠️ Access Denied page
│   └── 📁 dashboard/
│       ├── 📄 customer.html        # Customer role dashboard
│       ├── 📄 worker.html          # Worker/admin dashboard
│       └── 📁 components/          # Reusable dashboard components
│           ├── 📄 pet-card.html
│           ├── 📄 stay-form.html
│           └── 📄 user-profile.html
│
├── 📁 docs/                        # Project documentation
│   ├── 📄 README.md
│   ├── 📄 API.md
│   └── 📄 USER_GUIDE.md
│
├── 📁 tests/                       # Automated and manual testing
│   ├── 📄 api.test.js              # Unit tests (or integration)
│   └── 📁 postman/                 # Postman collection for API testing
│       └── 📄 pet-care-api.postman_collection.json
│
├── 📁 config/                      # App and environment configs
│   ├── 📄 api.config.js
│   └── 📄 app.config.js
│
├── 📄 .gitignore                   # Git ignored files/folders
├── 📄 package.json                # Project metadata and dependencies
└── 📄 LICENSE                      # (Optional) Licensing info


```
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