from flask_bcrypt import generate_password_hash, check_password_hash
from sqlalchemy_serializer import SerializerMixin
from flask_login import UserMixin
from .dbconfig import db
# from uuid import uuid4

# def get_uuid():
#     return uuid4().hex

class User(db.Model, SerializerMixin, UserMixin):
    __tablename__ = 'users'
    serialize_rules = ('-comments.user',)  # never serialize the password
    # serialize_rules = ('-comments.user', '-password',) 
    

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(150), nullable=False, unique=True)
    password = db.Column(db.String(128), nullable=False)
    country = db.Column(db.String(100), nullable=True)
    # profile_picture = db.Column(db.String(500))  # Path or URL to user's profile picture
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    # last_login = db.Column(db.DateTime)
    # role = db.Column(db.String(50)) # if you want user roles
    comments = db.relationship('Comment', backref='user')
    
    # def to_dict(self):
    #     return {
    #         'id': self.id,
    #         'name': self.name,
    #         'email': self.email,
    #         # 'comment': self.comment
    #     }
    
    # Password hashing functions
    def set_password(self, password):
        self.password = generate_password_hash(password).decode('utf-8')
    
    def check_password(self, password):
        return check_password_hash(self.password, password)
    
    def __repr__(self):
        return f'User({self.name}, {self.email})'