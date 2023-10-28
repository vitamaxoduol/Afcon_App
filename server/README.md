## Installations

``pip install Flask-WTF``
``pip install Flask-Cors``
``pip install Flask-Serializer``
``pip install Flask-SQLAlchemy``
``pip install Flask-Migrate``
``pip install Flask``
``pip install Flask-RESTful``
``pip install Flask-Login`` 
``pip install Flask-Bcrypt``
``pip install Flask-Session``
``pip install redis-session``
## Models
User: This model seems to represent a user in your system. It appears to have attributes such as id, name, email, country, and profile_picture. It also handles authentication with methods like set_password.

GroupStage: Represents a stage in a group. The exact functionality isn't clear from the snippets, but it likely represents stages in some kind of tournament or league.

Country: Represents countries. It's possibly used for user profiles or other functionalities that require country data.

Player: Represents players, which could be part of a sports application or game.

Comment: Represents comments, potentially on reviews or other entities.


## API Routes
This section of the Afcon_App details the API routes that facilitate interactions between the client and server. Each route serves specific data or performs particular actions based on the incoming request.

Features
CRUD operations for various entities (e.g., users, teams, matches, comments).
Search and filtering capabilities.

### Endpoints:
A quick rundown of available API routes:

Users: CRUD operations for users.

GET api/users: Fetch all users.
    api/players: Fetch all players
    api/countries: Fetch all teams participating in AFCON
    api/comments: Fetching all the comments per user id

POST api/comments: Posting comments by users
DELETE api/comments: Deleting a comments per user id
PATCH api/comments: Editing a comments per user id
## Authentication & Authorization
This section of the Afcon_App focuses on user authentication and authorization. It ensures that users can safely register, log in, and access the resources they're permitted to.

### Features
User Registration: Allows new users to create an account.
User Login: Allows existing users to log in.
User Profile: Displays details of the currently logged-in user.
User Logout: Allows a logged-in user to securely log out.
Get Current User: Retrieves the details of the currently logged-in user.
### Setup & Installation
Dependencies; before starting, ensure you've installed all required packages. This can be done using the following:
``pip install -r requirements.txt``
- Environment Variables:
If any environment variables, such as SECRET_KEY, are required, make sure to set them up before running the application.

- Start the application using the following command:
``python3 app.py``
#### Endpoints:

Register: POST /register - Register a new user. Required fields: email, password, name.

Login: POST /login - Log in an existing user. Required fields: email, password.

Logout: GET /logout - Log out the currently logged-in user.

Profile: GET /profile - View the profile of the currently logged-in user.

Get Current User: GET /@me - Get details of the currently logged-in user.

##### Troubleshooting
If you encounter the "Unauthorized" error even when the user is logged in:
Ensure the session variable user_id is correctly set during login.
Verify the session hasn't expired.
Check browser settings for cookie behavior and try another browser or incognito mode.
Future Enhancements
Implement password reset functionality.
Add two-factor authentication for added security.
Implement role-based authorization to differentiate between user roles (e.g., admin, user).
Contributing
If you'd like to contribute to the authentication and authorization part of this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.


## Contributors for Backend
Vitamax Oduol
Jacob Were 

## License
MIT
