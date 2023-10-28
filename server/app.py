from flask import Flask, jsonify,request
from flask_migrate import Migrate
from flask_cors import CORS
from flask_login import LoginManager
from models.dbconfig import db
from config import Config
from routes.api_routes import api_bp
from routes.api_authentication import auth_bp
from models.user import User
from flask_bcrypt import Bcrypt
from flask_session import Session

# from models.group_stage import GroupStage
# from models.country import Country
# from models.comment import Comment
# from models.player import Player

# app initialization
# app = create_app()

# Create the Flask app
app = Flask(__name__)
app.config.from_object(Config)
bcrypt =Bcrypt(app)
server_session = Session(app)
# app.config['SECRET_KEY'] = SECRET_KEY



# CORS(app, auth_bp, resources={r"/*": {"origins": "*", "allow_headers": ["Authorization", "Content-Type"]}})
CORS(app, supports_credentials=True, resources={r"/api/*": {"origins": "http://localhost:5173"}, r"/auth/*": {"origins": "http://localhost:5173"}})




# Initialize database
db.init_app(app)
Migrate(app, db)

# Initialize Flask-Login
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'auth_bp.login'

# Register blueprints
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(api_bp, url_prefix='/api')

# # This will generate a secret key for our JWT tokens
# secret_key = base64.b64encode(os.urandom(24)).decode('utf-8')
# print(secret_key)

# loads the user object 
@app.login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.errorhandler(500)
def handle_500(e):
    return jsonify(error=str(e)), 500

@app.errorhandler(401)
def handle_401(e):
    return jsonify(error='Unauthorized'), 401


if __name__ == '__main__':
    app.run()