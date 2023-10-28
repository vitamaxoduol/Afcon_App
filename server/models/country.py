from sqlalchemy import CheckConstraint, or_
from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin
from .dbconfig import db

class Country(db.Model, SerializerMixin):
    __tablename__ = 'countries'
    serialize_rules = ('-players.country', '-group_stage.countries',)  # Assuming you don't want to serialize associated players by default
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    coach = db.Column(db.String(100), nullable=False, unique=True)
    star_rating = db.Column(db.Integer, nullable=False)
    flag_url = db.Column(db.String(500), nullable=False)
    group_id = db.Column(db.Integer, db.ForeignKey('group_stages.id'), nullable=False)
    # player_id = db.Column(db.Integer, db.ForeignKey('players.id'), nullable=False)
    
    # Relationships
    # group_stages = db.relationship('GroupStage', backref='country')
    players = db.relationship('Player', backref='country', lazy='dynamic')
    # country = relationship('Country', backref='players', primaryjoin='Player.country_id == Country.id')
    
    # Constraints
    table_args = (
        CheckConstraint(star_rating.between(1, 5), name='check_star_rating_range'),
        CheckConstraint(or_(flag_url.startswith('http://'), flag_url.startswith('https://')), name='check_valid_url')
    )
    
    def __repr__(self):
        return f'Country({self.name})'
    
    # def to_dict(self):
    #     return {
    #         'id': self.id,
    #         'name': self.name, 
    #         'coach': self.coach,
    #         'star_rating': self.star_rating,
    #         'flag_url': self.flag_url,
    #         'group_id': self.group_id
    #     }