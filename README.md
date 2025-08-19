# 🦅 Team Eagles Official Website 🎮

Welcome to the official repository for the **Team Eagles Website**! This project is a comprehensive web platform designed for managing and showcasing the players of Team Eagles, a PUBG team. It provides functionalities for both administrative tasks and public viewing of player profiles and team achievements.

---

## ✨ **Features**

This website is built to cater to the needs of a competitive gaming team, offering:

### **👤 User & Admin Authentication**

-   **Admin Login/Logout**: Secure access for team administrators.
-   **Admin Signup**: Registration functionality for new administrators.
-   **Password Management**:
    -   **Reset Password Email**: Admins can request a password reset link via email.
    -   **Reset Password**: Functionality to set a new password using a token.
-   **Email Verification**: Ensures valid email addresses for admin accounts.

### **📊 Admin Panel Features**

-   **Add Player**: Administrators can add new players to the Team Eagles roster.
-   **Delete Player**: Ability to remove players from the team.
-   **Update Player Profile**: Admins can modify player details (e.g., name, bio, etc.).
-   **Update Player Display Picture (DP)**: Upload and change player profile images.
-   **Add Player Stats**: Input and update individual player statistics (e.g., kills, chickens, matches played).

### **🌐 Public Facing Features**

-   **Home Page**: A dynamic landing page showcasing:
    -   **Hero Section**: Catchy introduction to Team Eagles.
    -   **Our Impressive Stats**: Highlights key team achievements and statistics .
    -   **Explore Players**: A section to discover current team members.
    -   **Events**: Information about upcoming or past team events.
-   **All Players**: A dedicated page listing all members of Team Eagles.
-   **Player Profile Page**: Detailed individual profiles for each player, accessible via `/[playername]`, displaying their stats and information.
-   **Achievements**: A page showcasing team achievements and milestones.
-   **Leaderboard**: A section to view player rankings based on their performance (e.g., kills, wins).
-   **Join Team**: A dedicated page for prospective players interested in joining Team Eagles.

---

## 🛠️ **Tech Stack**

This project leverages modern web technologies to deliver a robust and scalable application:

-   **Frontend**:
    -   **Next.js**: A React framework for building fast and scalable web applications.
    -   **TypeScript**: For type-safe and more maintainable code.
    -   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-   **Backend (API Routes)**:
    -   **Next.js API Routes**: For building server-side logic and API endpoints.
    -   **TypeScript**: Used for API route development.
-   **Database**:
    -   **MongoDB**: A NoSQL database for flexible data storage.
    -   **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
-   **Authentication & Security**:
    -   **JWT (JSON Web Tokens)**: For secure user authentication.
    -   **Bcrypt**: For hashing and salting passwords.
-   **Image Uploads**:
    -   **Cloudinary**: Cloud-based image and video management service.
-   **Email Services**:
    -   **Nodemailer (or similar)**: For sending transactional emails (e.g., password reset).

---

## 📁 **Folder Structure Overview**

-   `public/`: Static assets like images (blogs, icons, general images) and SVG files.
    -   `image/`: Contains categorized images (`blogs/`, `icons/`).
-   `src/`: Core application source code.
    -   `app/`: Contains Next.js page routes for various sections of the website.
        -   `api/v1/`: API endpoints for different functionalities (admin, auth, global data).
        -   Specific page folders: `achievements`, `all-players`, `dashboard`, `home`, `join-team`, `leaderboard`, `login`, `player-profile/[playername]`, `reset-password`, `reset-password-email`, `signup`, `verify-email`.
    -   `components/`: Reusable React components.
        -   `common/`: Global components like `footer.tsx` and `navbar.tsx`.
        -   `home/`: Components specific to the home page (e.g., `event-card.tsx`, `player-card.tsx`).
    -   `config/`: Configuration files (e.g., `cloudinary.ts`).
    -   `database/`: Database connection configuration (`dbConfig.ts`).
    -   `models/`: Mongoose schemas for MongoDB collections (`playerModel.ts`, `userModel.ts`).
    -   `utils/`: Utility functions for common tasks (image uploading, email sending, password hashing, token generation).
-   Root Level: Configuration files (`next.config.mjs`, `tailwind.config.ts`, `tsconfig.json`, `package.json`, etc.) and `.gitignore`.

---

## 🚀 **Getting Started**

To get a local copy up and running, follow these simple steps.

### **Prerequisites**

-   Node.js (LTS version recommended)
-   npm or Yarn
-   MongoDB instance (local or cloud-based like MongoDB Atlas)
-   Cloudinary account (for image uploads)
-   Email service provider credentials (e.g., SendGrid, Mailgun) for password reset emails.

### **Installation**

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/Team-Eagles-Website.git](https://github.com/your-username/Team-Eagles-Website.git)
    cd Team-Eagles-Website
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root directory and add the following:

    ```
    MONGO_URI=your_mongodb_connection_string
    TOKEN_SECRET=a_strong_random_secret_for_jwt
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    MAIL_HOST=your_email_host (e.g., smtp.gmail.com)
    MAIL_PORT=your_email_port (e.g., 587 for TLS)
    MAIL_USER=your_email_username
    MAIL_PASS=your_email_password
    ```

    _Replace placeholders with your actual credentials._

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 🌟 **Contributing**

Contributions are always welcome! If you have suggestions for improvements, new features, or bug fixes, please feel free to open an issue or submit a pull request.

---

## 📄 **License**

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 **Contact**

Ameen Sid - [ameensid7@gmail.com]
Project Link: [https://github.com/your-username/Team-Eagles-Website](https://github.com/ameen-sid/Team-Eagles-Website)
