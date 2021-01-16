from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Palette, db

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
    palettes = Palette.query.filter(Palette.user_id == id).order_by(Palette.id.desc())
    return {'user': user.to_dict(),
            'palettes': [palette.to_dict() for palette in palettes]}
    

# * get list of liked palettes by user
@user_routes.route('/<int:id>/favorites')
@login_required
def fvrt_palettes(id):
    user = User.query.get(id)
    return jsonify(user.to_dict_full())


# * user about_me
@user_routes.route('/<int:id>/about', methods=['PUT'])
@login_required
def about_me(id):
    user = User.query.get(id)
    if not user:
        return jsonify('user not found')
    user.about_me = request.json['aboutMe']
    db.session.add(user)
    db.session.commit()
    return jsonify(user.to_dict())


# * follow user route
@user_routes.route('/<int:id>/follow', methods=["POST"])
@login_required
def follow_user(id):
    # follower = User.query.filter(User.id  == request.json['follower_id']).first()
    follower = User.query.get(current_user.get_id())
    leader = User.query.get(id)
    if follower == leader:
        return jsonify("Can't follow youself bruh")
    if follower not in leader.followers:
        leader.followers.append(follower)
        db.session.commit()
        return leader.to_dict_followers()
    else:
        return {"error": "already following"}
    
@user_routes.route('/<int:id>/unfollow', methods=['POST'])
@login_required
def unfollow_user(id):
    unfollower = User.query.get(current_user.get_id())
    leader = User.query.get(id)
    if unfollower == leader:
        return jsonify("Can't unfollow youself bruh")
    if unfollower in leader.followers:
        leader.followers.remove(unfollower)
        db.session.commit()
        return leader.to_dict_followers()
    else:
        return {"error": "can't unfollow someone whom you are not following"}
        