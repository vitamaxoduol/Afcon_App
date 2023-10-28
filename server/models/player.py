from sqlalchemy_serializer import SerializerMixin
from .dbconfig import db
from sqlalchemy.orm import relationship, validates
from urllib.parse import urlparse

class Player(db.Model, SerializerMixin):
    __tablename__ = 'players'
    serialize_rules = ('-country.players',)  # Avoid serializing all players when fetching a player.

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=False, default=18)  # default age to be 18.
    photo_url = db.Column(db.String(500), nullable=True)  # a rough length for URL.
    country_id = db.Column(db.Integer, db.ForeignKey('countries.id'))

    # Relationship
    
    # country = relationship('Country', backref='players', primaryjoin='Player.country_id == Country.id')

    def __repr__(self):
        return f'Player({self.name}, Country: {self.country_id})'
    
    # def to_dict(self):
    #     return {
    #         'id': self.id,
    #         'name': self.name, 
    #         'age': self.age,
    #         'photo_url': self.photo_url,
    #         'country_id': self.country_id
    #     }
        
    @validates('photo_url')
    def validate_photo_url(self, key, url):
        if not url:
            raise ValueError("Photo URL is required!")
        
        parsed_url = urlparse(url)
        if not (parsed_url.scheme in ['http', 'https'] and parsed_url.netloc):
            raise ValueError(f"Invalid photo URL provided: {url}")
        return url  