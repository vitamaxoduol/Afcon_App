from sqlalchemy_serializer import SerializerMixin
from .dbconfig import db

class GroupStage(db.Model, SerializerMixin):
    __tablename__ = 'group_stages'
    serialize_rules = ('-countries.group_stage',)
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    
    # Relationships
    countries = db.relationship('Country', backref='group_stage', lazy='dynamic')
    
    def __repr__(self):
        return f'GroupStage({self.name})'

    # def to_dict(self):
    #     return {
    #         'id': self.id,
    #         'name': self.name
    #     }

