from dotenv import load_dotenv
import redis
import os

#Loading the .env file
load_dotenv()
class Config:
    # define constant variables for the project 
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
    # postgres://afcon_db_user:7WKxpbZH3tZ9poiO45vWIgobesXKtqUN@dpg-ckv1eri37rbc73e66ggg-a.oregon-postgres.render.com/afcon_db
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
    
    SECRET_KEY = os.environ['SECRET_KEY']
    
    SESSION_TYPE = 'redis'
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_REDIS = redis.from_url('redis://127.0.0.1:6379')
    SESSION_REDIS = redis.from_url(os.environ.get('REDIS_URL', 'redis://red-ckvtnp3amefc73bpiip0:6379'))

    