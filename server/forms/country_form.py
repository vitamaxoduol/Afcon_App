from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, validators

class CountryForm(FlaskForm):
    name = StringField('Country Name', [validators.Length(min=1, max=100), validators.DataRequired()])
    star_rating = IntegerField('Star Rating', [validators.NumberRange(min=1, max=5)])
    flag_url = StringField('Flag URL', [validators.URL(), validators.DataRequired()])