# Store Management Dashboard

A **React-based Store Management Dashboard** built as part of a technical challenge.  
The application demonstrates **product management, dashboard analytics, and role-based access control** using modern frontend technologies.

---

## 🚀 Features

### Authentication
- Simple login flow
- Two user roles supported:
  - **Manager**
  - **Store Keeper**

---

### Dashboard
- Statistics cards
- Interactive charts using **MUI X Charts**
- Light / Dark mode toggle
- Responsive layout

Only **Manager** role can access the dashboard.

---

### Product Management
- View product list
- Add new products
- Edit products inline
- Delete products
- Duplicate product name validation
- Pagination and filtering

Products are stored using **LocalStorage** to simulate persistence.

---

### Role Based Access Control (RBAC)

Role-based access is implemented on the frontend.

| Feature | Manager | Store Keeper |
|--------|--------|--------------|
| Login | ✓ | ✓ |
| View Products | ✓ | ✓ |
| Add Products | ✓ | ✓ |
| Edit Products | ✓ | ✓ |
| Dashboard | ✓ | ✗ |

The sidebar menu dynamically updates based on the selected role.

---

## 🧰 Tech Stack

- **React**
- **Material UI (MUI)**
- **MUI DataGrid**
- **MUI X Charts**
- **TailwindCSS**
- **React Router**
- **LocalStorage**

---

## 📂 Project Structure

```
src
│
├── components
│   ├── dashboard
│   ├── themes
│
├── pages
│   ├── Dashboard
│   ├── Product
│   ├── AddProduct
│
├── layout
│   ├── Layout
│   ├── Sidebar
│   ├── Topbar
│   ├── Footer
│
└── App.jsx
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/mugdhaarekar/store-management-dashboard.git
```

Navigate to the project folder:

```bash
cd store-management-dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The app will run at:

```
http://localhost:3000
```

---

## 🧪 Role Switching (Demo Mode)

To allow recruiters to easily test role-based access, a **role switcher is available in the top navigation bar**.

Available roles:

- Manager
- Store Keeper

Switching roles dynamically updates:

- Sidebar menu options
- Accessible pages
- Available features

---

## 🎨 UI Highlights

- Clean dashboard layout
- Responsive design
- Material UI components
- Tailwind utility styling
- Interactive charts
- Inline editable DataGrid
- Tooltip validations

---

## 📌 Future Improvements

Possible enhancements:

- Backend API integration
- JWT authentication
- Database storage
- Product image uploads
- Advanced filtering and search
- Unit testing

---

## 📧 Contact

For any queries regarding this submission:

**Email:** mugdhaarekar@gmail.com

---

## 📝 Notes

This project was built to demonstrate:

- Frontend architecture
- UI/UX implementation
- Role-based access control
- Data management in React