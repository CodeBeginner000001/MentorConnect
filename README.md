# MentorConnect

MentorConnect is a global platform designed to bridge the gap between mentors and mentees, enabling them to connect, grow together, and support each other in their personal and professional journeys. With a user-friendly interface and robust backend support, MentorConnect fosters a community of growth and collaboration.

## Table of Contents

1. [Introduction](#introduction)
2. [File Structure](#file-structure)
3. [Backend](#backend)
   - [Routes](#routes)
   - [Middleware](#middleware)
   - [Database and Hosting](#database-and-hosting)
   - [Cloudinary and Google Cloud SQL](#cloudinary-and-google-cloud-sql)
4. [Client](#client)
   - [Pages](#pages)
   - [Tech Stack](#tech-stack)
5. [Packages Used](#packages-used)
6. [Getting Started](#getting-started)
7. [About](#about)
8. [Contact](#contact)

## Introduction

MentorConnect is a platform where mentors and mentees from around the world can connect. The goal is to facilitate knowledge sharing, skill enhancement, and mutual growth. By providing a seamless interface and robust backend services, we aim to create an impactful network that empowers individuals.

## File Structure

```
MentorConnect/
|-- client/
|   |-- src/
|       |-- assets/
|           |-- logo.png
|           |-- two.png
|       |-- components/
|           |-- index.js
|           |-- footer.jsx
|           |-- navbar.jsx
|           |-- profileCard.jsx
|       |-- pages/
|           |-- About.jsx
|           |-- ChangePassword.jsx
|           |-- Contact.jsx
|           |-- DeleteProfile.jsx
|           |-- Home.jsx
|           |-- Register.jsx
|           |-- Login.jsx
|           |-- Network.jsx
|-- backend/
    |-- config/
    |   |-- cloudinary.js
    |-- controllers/
    |   |-- userController.js
    |-- middleware/
    |   |-- auth.js
    |   |-- multer.js
    |-- routes/
    |   |-- userRoutes.js
    |-- schema/
    |   |-- userSchema.js
    |-- db.js
    |-- server.js
```

## Backend

### Routes

The backend manages user interactions through the following API endpoints:
- `POST /api/userRegister`: Registers a new user.
- `POST /api/userLogin`: Authenticates a user.
- `GET /api/getUser`: Retrieves user details.
- `GET /api/getAuthUser`: Retrieves authenticated user information.
- `PUT /api/updateUser`: Updates user profile information.
- `PUT /api/updatePassword`: Updates user password.
- `DELETE /api/deleteUser`: Deletes a user account.
- `GET /api/getAllUsers`: Retrieves a list of all users.

### Middleware
- **auth.js**: Handles user authentication.
- **multer.js**: Configures file uploads for handling multipart form data.

### Database and Hosting
- **Database**: SQL database hosted on Google Cloud SQL.
- **Hosting**: Google Cloud ensures robust performance and scalability.

### Cloudinary and Google Cloud SQL
- **Cloudinary**: A cloud-based image storage solution used for uploading and managing user profile pictures and other media assets.
- **Google Cloud SQL**: A managed database service offering high reliability and security for storing user and platform data.

## Client

### Pages
- **Home.jsx**: A landing page highlighting the importance of mentorship.
- **About.jsx**: Provides insights into the mission and vision of MentorConnect.
- **Network.jsx**: A platform to connect mentors and mentees with filters for roles, interests, and skills.
- **Contact.jsx**: A page to reach out to the admin team for queries.
- **Register.jsx / Login.jsx**: User registration and authentication pages.
- **ChangePassword.jsx / DeleteProfile.jsx**: User dashboard features for managing account settings.

### Tech Stack

- **React.js**: A JavaScript library for building dynamic user interfaces.
- **Bootstrap**: A CSS framework that ensures responsive and aesthetically pleasing designs.
- **CSS**: Provides custom styling to enhance the platform's user experience.

## Backend Tech Stack

- **Express.js**: A fast and minimalist web framework for creating API endpoints.
- **Node.js**: A runtime environment that ensures efficient and scalable backend operations.
- **Cloudinary**: Manages image uploads and storage seamlessly.
- **Google Cloud SQL**: A managed relational database ensuring data security and availability.

## Packages Used

1. **bcrypt.js**: Used for hashing passwords to enhance security. [View Documentation](https://www.npmjs.com/package/bcrypt)
2. **multer.js**: Middleware for handling multipart form data. [View Documentation](https://www.npmjs.com/package/multer)
3. **jsonwebtoken**: Implements JSON Web Token for user authentication. [View Documentation](https://www.npmjs.com/package/jsonwebtoken)
4. **cors**: Enables Cross-Origin Resource Sharing for the platform. [View Documentation](https://www.npmjs.com/package/cors)
5. **react-toastify**: Provides customizable notifications for React apps. [View Documentation](https://www.npmjs.com/package/react-toastify)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/username/MentorConnect.git
   ```
2. Navigate to the project directory:
   ```bash
   cd MentorConnect
   ```
3. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```
4. Install dependencies for the client:
   ```bash
   cd ../client
   npm install
   ```
5. Start the backend server:
   ```bash
   cd ../backend
   npm start
   ```
6. Start the client application:
   ```bash
   cd ../client
   npm start
   ```
7. Access the application at `http://localhost:3000`.

## About

MentorConnect is dedicated to fostering a global mentorship community. Our mission is to empower individuals by providing a platform that connects mentors and mentees, promoting skill development, and driving mutual growth. We believe in the power of collaboration and the impact it can have on personal and professional journeys.

## Contact

For inquiries, feedback, or support, please contact us at:
- **Email**: support@mentorconnect.com
- **Phone**: +1 (800) 123-4567
- **Address**: 123 MentorConnect Lane, Growth City, GC 54321

