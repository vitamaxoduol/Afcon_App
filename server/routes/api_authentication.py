from flask import Flask, Blueprint, jsonify, request, g, session
from flask_login import login_manager, LoginManager, login_user, logout_user, login_required, current_user
from models.user import User
from models.dbconfig import db
# from flask import current_app as app
# from models.passwordresettoken import PasswordResetToken
from datetime import datetime, timedelta
from flask_bcrypt import check_password_hash
from flask_cors import CORS

# import jwt
# from flask_cors import CORS
import os




auth_bp = Blueprint('auth_bp', __name__)



# # loads the user object 
# @app.login_manager.user_loader
# def load_user(user_id):
#     return User.query.get(int(user_id))

@auth_bp.route('/@me')
def get_current_user():
    user_id = session.get('user_id')
    
    if not current_user.is_authenticated:
        return jsonify({'error': 'Unauthorized'}), 401
    
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
    'id': current_user.id,
    'email': current_user.email,
    'name': current_user.name
})

# Route to log in a user. 
@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    
    user = User.query.filter_by(email=email).first()
    
    if user and check_password_hash(user.password, password):  # Use Bcrypt's check_password_hash method.
        login_user(user)
        session['user_id'] = user.id
        return jsonify({"message": "Logged in successfully!", "user": {"id": user.id, "name": user.name}})
    
    
    return jsonify({"message": "Invalid email or password!"}), 401

# Route to log out a logged-in user.
@auth_bp.route('/logout')
def logout():
    logout_user()
    return jsonify({"message": "Logged out successfully!"}), 200

# register a new user.The client should send a JSON object with user details.
@auth_bp.route('/register', methods=['POST'])
def register():
    # Check if data was provided
    if not request.json:
        return jsonify({"message": "No data provided!"}), 400

    email = request.json.get('email')
    password = request.json.get('password')
    name = request.json.get('name')

    # Ensure all required fields are provided
    if not all([email, password, name]):
        return jsonify({"message": "Missing fields!"}), 400

    # Check if user exists
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"message": "User already exists!"}), 409

    new_user = User(email=email, name=name)
    new_user.set_password(password)

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully!"}), 201

# Route to get details of the currently logged-in user.
@auth_bp.route('/profile')
@login_required
def profile():
    if not current_user.is_authenticated:
        return jsonify({'error': 'Unauthorized'}), 401

    return jsonify({
        "name": current_user.name,
        "email": current_user.email,
    })