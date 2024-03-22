# Library Management System (LMS)

The Library Management System (LMS) is a comprehensive web application designed to automate and streamline library operations, including book management and user interactions. This system provides librarians and users with an efficient platform to manage library resources and access library services.

## Key Features

### Book Management
- **Add Book:** Allow librarians to add new books to the library database, including details such as title, genre, publication year, and ISBN.
- **Edit Book:** Enable librarians to update book information, such as modifying book details or changing availability status.
- **Delete Book:** Provide the functionality to remove books from the library database when they are no longer in circulation.

### User Management
- **User Registration:** Allow new users to register for library membership, providing necessary personal details such as name, email, and contact information.
- **Edit User Profile:** Enable users to update their profile information, such as changing contact details or updating preferences.
- **Delete User Account:** Provide administrators with the ability to delete user accounts if necessary.


### Search and Filter
- **Search Books:** Implement a search functionality to allow users to search for books by title, genre, or ISBN.
- **Filter Books:** Provide filtering options to refine search results based on criteria such as availability or publication year.

### User Authentication and Authorization
- **Login:** Implement user authentication to ensure secure access to the system, allowing users to log in with their credentials.
- **Role-based Access Control:** Define user roles such as librarian, staff, and patron, with appropriate permissions for each role to access system features.

### User Interface
- **Intuitive Interface:** Design a user-friendly interface with clear navigation and intuitive controls for ease of use by both librarians and users.
- **Responsive Design:** Ensure the application is responsive and accessible across various devices and screen sizes.

### Error Handling and Validation
- **Input Validation:** Validate user inputs to ensure data integrity and prevent errors during data entry.
- **Error Messages:** Provide informative error messages to guide users in case of invalid inputs or system errors.

### CRUD Operations
- **Create:** Enable the creation of new entities such as books and user accounts.
- **Read:** Provide read access to existing data, allowing users to view book details and user profiles.
- **Update:** Allow users to modify existing data, such as editing book information or updating user profiles.
- **Delete:** Provide functionality to delete records from the system, such as removing books from the library catalog or deleting user accounts.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd library-management-system`
3. Install Angular Materials: `ng add @angular/material`
4. Install dependencies: `npm install`
5. Start the Angular server: `ng serve`
6. Start the JSON Server: `json-server --watch db.json --port 3000`

## Usage

1. Register as a new user or login with existing credentials.
2. Browse the library catalog, search for books, and view book details.
3. Borrow books and return them within the specified duration.
4. Librarians can manage books, users, and perform administrative tasks.

## Technologies Used

- Angular: Frontend framework for building the user interface.
- TypeScript: Programming language for building Angular applications.
- HTML/CSS: Markup and styling languages for designing web pages.
- JSON Server: Backend service for simulating a REST API and providing book data.
  
