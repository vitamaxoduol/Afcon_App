from sqlalchemy_serializer import SerializerMixin
from .dbconfig import db
from datetime import datetime
from models.user import User

class Comment(db.Model, SerializerMixin):
    __tablename__ = 'comments'
    serialize_rules = ('-user.comments',)  # Avoid serializing sensitive user data when fetching a comment

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # Relationship
    # user = db.relationship('User', backref=db.backref('comments', lazy=True))

    def __repr__(self):
        return f'Comment({self.id}, User: {self.user_id}, Date: {self.created_at})'
    
    # def to_dict(self):
    #     return {
    #         'id': self.id,
    #         'user_id': self.user_id,
    #         'content': self.content
    #     }