from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Palette, Like

user_routes = Blueprint('users', __name__)

# * get list of all users
@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


# * get info of one user
@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    if not user:
        return jsonify('no user found')
    # palettes = Palette.query.join(User, Palette.user_id == User.id).filter(User.id == id)
    palettes = Palette.query.filter(Palette.user_id == id).order_by(Palette.id.desc())
    return {'user': user.to_dict(),
            'palettes': [palette.to_dict() for palette in palettes]}
    

# * get list of liked palettes by user
@user_routes.route('/<int:id>/favorites')
@login_required
def fvrt_palettes(id):
    user = User.query.get(id)
    return jsonify(user.to_dict_full())


