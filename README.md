
# Wardrobe Management System

Welcome to the Wardrobe Management System! This application helps you organize, manage, and style your wardrobe with ease. It includes features like user authentication, adding/editing/deleting clothing items, categorizing items, and filtering/searching functionality.

---

## Technologies Used
- Frontend: Vue 3 (with Vite)
- Backend: Laravel 11
- Database: MySQL
- Authentication: Laravel Sanctum
- Styling: Tailwind CSS (optional)

---

## Features
1. User Authentication: Login and registration.
2. Clothing Management: Add, edit, and delete clothing items.
3. Categorization: Organize items into categories (e.g., tops, bottoms, shoes).
4. Filter and Search: Easily find items using filters and search.
5. Responsive UI: Works seamlessly on all devices.

---

## Prerequisites
Before you begin, ensure you have the following installed:
- [PHP](https://www.php.net/) (>= 8.1)
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/) (>= 16.x)
- [MySQL](https://www.mysql.com/) (or any other database supported by Laravel)
- [Git](https://git-scm.com/)

---

## Setup Instructions

### 1. Clone the Repository
Clone the project repository to your local machine:
```bash
git clone https://github.com/your-username/wardrobe-management-system.git
cd wardrobe
```

---

### 2. Backend Setup (Laravel)

#### Step 1: Install Dependencies
Navigate to the `backend` folder and install PHP dependencies:
```bash
cd backend
composer install
```

#### Step 2: Configure Environment
1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Update the `.env` file with your database credentials:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=wardrobe_db
   DB_USERNAME=root
   DB_PASSWORD=Jumba305*
   ```

#### Step 3: Generate Application Key
Run the following command to generate a unique application key:
```bash
php artisan key:generate
```

#### Step 4: Run Migrations
Run the database migrations to create the necessary tables:
```bash
php artisan migrate
```

#### Step 5: Start the Backend Server
Start the Laravel development server:
```bash
php artisan serve
```
The backend will be available at `http://localhost:8000`.

---

### 3. Frontend Setup (Vue 3)

#### Step 1: Install Dependencies
Navigate to the `frontend` folder and install Node.js dependencies:
```bash
cd ../frontend
npm install
```

#### Step 2: Configure Environment
Create a `.env` file in the `frontend` folder and add the backend API URL:
```env
VITE_API_BASE_URL=http://localhost:8000
```

#### Step 3: Start the Frontend Server
Start the Vue development server:
```bash
npm run dev
```
The frontend will be available at `http://localhost:5173`.

---

### 4. Database Seeding (Optional)
To populate the database with sample data, run the following command in the `backend` folder:
```bash
php artisan db:seed
```

---

### 5. Running the Application
1. Backend: Ensure the Laravel server is running at `http://localhost:8000`.
2. Frontend: Ensure the Vue server is running at `http://localhost:5173`.
3. Open your browser and navigate to `http://localhost:5173` to access the application.

---

## Project Structure

### Backend (Laravel)
```
backend/
├── app/              # Application logic
├── database/         # Migrations and seeders
├── routes/           # API routes
├── config/           # Configuration files
└── .env              # Environment variables
```

### Frontend (Vue 3)
```
frontend/
├── src/
│   ├── assets/       # Static assets
│   ├── components/   # Reusable components
│   ├── views/        # Pages (e.g., Login, Register)
│   ├── router/       # Vue Router configuration
│   ├── App.vue       # Root component
│   └── main.ts       # Entry point
├── .env              # Environment variables
└── vite.config.js    # Vite configuration
```

---

## API Endpoints

### Authentication
- POST /api/register: Register a new user.
- POST /api/login: Log in a user.
- POST /api/logout: Log out a user.

### Clothing Items
- GET /api/clothing-items: Get all clothing items.
- POST /api/clothing-items: Add a new clothing item.
- PUT /api/clothing-items/{id}: Update a clothing item.
- DELETE /api/clothing-items/{id}: Delete a clothing item.

---

## Troubleshooting

### 1. CORS Issues
If you encounter CORS issues, ensure the `config/cors.php` file in the Laravel backend allows requests from the frontend URL (`http://localhost:5173`).

### 2. Database Connection Issues
Ensure your database credentials in the `.env` file are correct and the MySQL server is running.

### 3. Frontend Not Connecting to Backend
Ensure the `VITE_API_BASE_URL` in the frontend `.env` file matches the backend URL (`http://localhost:8000`).

---

## Deployment

### Backend
1. Deploy the Laravel backend to a platform like [Laravel Forge](https://forge.laravel.com/), [Heroku](https://www.heroku.com/), or any PHP-supported hosting service.
2. Update the `.env` file with production credentials.

### Frontend
1. Build the Vue app:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to a platform like [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/).
---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact
For any questions or feedback, please contact:
- Name: Jesse Kidula Jumba
- Email: kidulajesse@gmail.com
- GitHub: (https://github.com/kidulajumba254)

---

Quite a challenging assessment especially using Vue but theirs always room for familiarization and improvements for growth🚀
