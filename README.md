Expense Tracker

Introduction:-
The Expense Tracker is a modern, React-based web application designed to help users manage their finances effectively. With features like Google authentication and real-time data synchronization using Firebase, this application ensures seamless and secure tracking of daily expenses.

Features:-
User Authentication: Secure Google Authentication using Firebase.
Real-Time Data Storage: All data is stored and synced in real-time with Firebase Firestore.

Expense Management:-
Add, edit, or delete expenses.
Categorize expenses for better tracking.

Responsive Design: Fully optimized for desktop and mobile devices.
Hooks and React Best Practices: Built with React Hooks (useState, useEffect, custom hooks).

Modular Codebase: Clean and well-structured code for scalability and maintainability.

Tech Stack:-

Frontend
React.js: Component-based architecture for building the user interface.
CSS: Styling for responsive and modern design.

Backend & Database
Firebase Authentication: Secure user login with Google OAuth.
Firebase Firestore: Real-time NoSQL database for storing and retrieving expenses.

Libraries & Tools
React Router: For navigation between pages.
React Hooks: Managing state and side effects efficiently.
Firebase SDK: Integrating authentication and database services.
Git: Version control for collaborative development.

Project Structure:-

expense-tracker/
├── .github/               # Configuration for GitHub Actions (if applicable)
├── node_modules/          # Installed dependencies
├── public/                # Public assets and index.html
├── src/                   # Main source code
│   ├── config/            # Firebase configuration
│   │   └── firebase.js    # Firebase initialization and setup
│   ├── hooks/             # Custom React hooks
│   │   ├── useAddTransaction.js
│   │   ├── useGetTransactions.js
│   │   └── useGetUserInfo.js
│   ├── pages/             # React pages
│   │   ├── auth/          # Authentication-related components
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   └── expense-tracker/ # Expense tracker components
│   │       ├── index.jsx
│   │       └── styles.css
│   ├── App.js             # Main application component
│   ├── App.css            # Global styles
│   ├── index.js           # React entry point
├── .firebaserc            # Firebase project configuration
├── firebase.json          # Firebase hosting configuration
├── package.json           # Project dependencies and scripts
├── README.md              # Documentation
└── .gitignore             # Files to ignore in version control


Getting Started:-

Prerequisites:

Ensure you have the following installed:

Node.js (v14 or later)
Firebase CLI (for deployment)
Git (for version control)


Installation

1.Clone the repository:

git clone https://github.com/your-username/expense-tracker.git


2.Navigate to the project directory:

cd expense-tracker

3.Install dependencies:

npm install


Configuration

Set up a Firebase project at Firebase Console.
Add your Firebase configuration details in "src/config/firebase.js"

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};
export default firebaseConfig;



Running the Application

1.Start the development server:  npm run dev

2.Open your browser and navigate to http://localhost:3000



Contact
Developer: Anmol Raturi
📧 Email: anmolraturi@example.com
🔗 LinkedIn: linkedin.com/in/anmol-raturi
🌐 GitHub:[(https://github.com/TimelyCo)](https://github.com/TimelyCo)

License
This project is licensed under the MIT License. See the LICENSE file for details.
