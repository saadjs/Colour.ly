from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Palette

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    palettes = Palette.query.filter(User.id == id)
    return jsonify({'user': user.to_dict()},
                   {'palettes': [palette.to_dict() for palette in palettes]}
                   )