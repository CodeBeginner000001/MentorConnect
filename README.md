# MentorConnect

MentorConnect is a global platform designed to bridge the gap between mentors and mentees, enabling them to connect, grow together, and support each other in their personal and professional journeys. With a user-friendly interface and robust backend support, MentorConnect fosters a community of growth and collaboration.

## Table of Contents

1. [About](#about)
2. [Getting Started](#getting-started)
3. [File Structure](#file-structure)
4. [Backend](#backend)
   - [Routes](#routes)
   - [Middleware](#middleware)
   - [Database and Hosting](#database-and-hosting)
   - [Cloudinary and Google Cloud SQL](#cloudinary-and-google-cloud-sql)
5. [Client](#client)
   - [Pages](#pages)
   - [Tech Stack](#tech-stack)
6. [Packages Used](#packages-used)
7. [Final View](#final-view)
8. [Contact](#contact)

## About

MentorConnect is designed to create meaningful connections between mentors and mentees worldwide. The platform facilitates personal and professional growth by providing tools to build relationships based on shared interests, skills, and goals. Whether you're looking to share your expertise or learn from others, MentorConnect is here to empower you.

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

The backend handles user registration, authentication, and profile management. It is built with Node.js and Express.js to ensure a robust and scalable server-side framework. SQL database, hosted on Google Cloud SQL, powers the storage and retrieval of data, while Cloudinary manages image uploads.

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

- **auth.js**: Ensures secure routes by validating user authentication tokens.
- **multer.js**: Handles file uploads and processes multipart form data efficiently.

### Database and Hosting

- **Database**: SQL database hosted on Google Cloud SQL for secure and reliable data storage.
- **Hosting**: Google Cloud ensures robust performance and scalability.

### Cloudinary and Google Cloud SQL

- **Cloudinary**: A cloud-based image storage solution used for uploading and managing user profile pictures and other media assets.
- **Google Cloud SQL**: A managed database service offering high reliability and security for storing user and platform data.

## Client

The client-side application, built using React.js, offers an intuitive user interface. Users can explore pages like Home, About, and Network, with features like filtering connections, editing profiles, and contacting the admin.

### Pages

- **Home.jsx**: A landing page highlighting the importance of mentorship.
- **About.jsx**: Provides insights into the mission and vision of MentorConnect.
- **Network.jsx**: A platform to connect mentors and mentees with filters for roles, interests, and skills.
- **Contact.jsx**: A page to reach out to the admin team for queries.
- **Register.jsx / Login.jsx**: User registration and authentication pages.
- **ChangePassword.jsx / DeleteProfile.jsx**: User dashboard features for managing account settings.

### Tech Stack

- **React.js**: A JavaScript library for building dynamic user interfaces efficiently with reusable components.
- **Bootstrap**: A CSS framework that ensures responsive and aesthetically pleasing designs with minimal effort.
- **CSS**: Provides custom styling to enhance the platform's user experience through detailed visuals.

## Packages Used

1. **bcrypt.js**: Used for hashing passwords to enhance security. [View Documentation](https://www.npmjs.com/package/bcrypt)
   - Enhances password security by encrypting user credentials before storage.
   - Offers robust and secure cryptographic algorithms.
   - Easy integration with Node.js applications.

2. **multer.js**: Middleware for handling multipart form data. [View Documentation](https://www.npmjs.com/package/multer)
   - Simplifies file upload management.
   - Supports efficient handling of large files.
   - Customizable storage and file-filtering options.

3. **jsonwebtoken**: Implements JSON Web Token for user authentication. [View Documentation](https://www.npmjs.com/package/jsonwebtoken)
   - Provides secure user authentication and session management.
   - Lightweight and easy to integrate with Express.js.
   - Ensures token-based communication between client and server.

4. **cors**: Enables Cross-Origin Resource Sharing for the platform. [View Documentation](https://www.npmjs.com/package/cors)
   - Allows secure data sharing between different origins.
   - Configurable settings for specific route protection.
   - Simplifies handling of preflight requests.

5. **react-toastify**: Provides customizable notifications for React apps. [View Documentation](https://www.npmjs.com/package/react-toastify)
   - Offers elegant toast notifications for user feedback.
   - Customizable with various styles and animation options.
   - Simple integration with React components.
## Final View

## Contact

For any inquiries, feedback, or support, feel free to reach out to us:
**Email**: snehagupta7385@gmail.com
