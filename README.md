# Project Title

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [API Documentation](#api-documentation)
  - [Auth Endpoints](#auth-endpoints)
  - [Questions Endpoints](#questions-endpoints)
  - [Responses Endpoints](#responses-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
A brief description of the project, its purpose, and what it aims to achieve.

## Features
- Feature 1
- Feature 2
- Feature 3

## Getting Started

### Prerequisites
List of software and tools that need to be installed before setting up the project.
- Node.js
- npm / pnpm

### Installation
Step-by-step guide on how to install and set up the project.
```bash
git clone <repository-url>
cd <project-directory>
pnpm install



Running the Project
Instructions on how to run the project.

bash
Copy code
pnpm run start:dev
API Documentation
Auth Endpoints
POST /auth/signup

Description: Sign up a new user
Request Body: { "username": "example", "password": "example" }
Response: { "message": "User created successfully" }
POST /auth/login

Description: Log in a user
Request Body: { "username": "example", "password": "example" }
Response: { "access_token": "JWT token" }
Questions Endpoints
POST /questions
Description: Add a new question
Request Body: { "question": "What is Node?", "difficulty_level": "easy", "skillId": 1 }
Response: { "skillId": 1, "difficulty_level": "easy", "question": "What is Node?", "_id": "unique_id", "__v": 0 }
Responses Endpoints
POST /responses
Description: Add a response to a question
Request Body: { "questionId": 1, "candidateId": 1, "response": "Node is a runtime environment for JavaScript." }
Response: { "questionId": 1, "candidateId": 1, "response": "Node is a runtime environment for JavaScript.", "_id": "unique_id", "__v": 0 }
Technologies Used
NestJS
MongoDB
Passport.js
bcrypt
TypeScript
Contributing
Guidelines for contributing to the project.

Fork the repository
Create a new branch (git checkout -b feature-branch)
Make your changes
Commit your changes (git commit -m 'Add some feature')
Push to the branch (git push origin feature-branch)
Open a pull request
License
This project is licensed under the MIT License.

Contact
For any queries or issues, please contact:

Name: Saurabh Shete
Email: saurabhshete281@gmail.com

