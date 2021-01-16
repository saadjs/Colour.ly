from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


def FollowForm():
    follower_id = StringField('followe_id', validators=[DataRequired()])