from flask import Blueprint, jsonify, request, render_template, abort
from flask_login import login_required, current_user
from app.models import User, Palette, db
from werkzeug.utils import secure_filename
import boto3
import os


user_routes = Blueprint('users', __name__)

s3 = boto3.client('s3',
                  aws_access_key_id = os.environ.get('AWS_ACCESS_KEY_ID'),
                  aws_secret_access_key = os.environ.get('AWS_SECRET_ACCESS_KEY'))

BUCKET_NAME = 'colour.ly'


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
    return {'user': user.to_dict_full(),
            'palettes': [palette.to_dict() for palette in palettes]}


# * helper func to check file types
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
           
           
# * upload avatar
@user_routes.route('/<int:id>/upload', methods=['POST'])
def upload_img(id):
    user = User.query.get(id)
    if not user:
        return jsonify('no user found')
    img = request.files.get('file', False)
    if img and allowed_file(img.filename):
        filename = secure_filename(img.filename)
        res = s3.put_object(
            Bucket = BUCKET_NAME,
            Body = img,
            Key = filename,
            ACL = 'public-read'
        )
        if res['ResponseMetadata']['HTTPStatusCode'] == 200:
            url=f'https://s3.amazonaws.com/colour.ly/{filename}'
            user.dp_url = url
            db.session.add(user)
            db.session.commit()
            return url;
        else:
            return 'something went wrong', 500
    return {'errors': ['no image']}, 418


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
    follower = User.query.get(current_user.get_id())
    leader = User.query.get(id)
    if follower == leader:
        return jsonify("Can't follow youself bruh"), 401
    if follower in leader.followers:
        leader.followers.remove(follower)
        db.session.commit()
        return leader.to_dict_followers()
    else:
        leader.followers.append(follower)
        db.session.commit()
        return leader.to_dict_followers()


# * unfollow user
# @user_routes.route('/<int:id>/unfollow', methods=['POST'])
# @login_required
# def unfollow_user(id):
#     unfollower = User.query.get(current_user.get_id())
#     leader = User.query.get(id)
#     if unfollower == leader:
#         return jsonify("Can't unfollow youself bruh"), 401
#     if unfollower in leader.followers:
#         leader.followers.remove(unfollower)
#         db.session.commit()
#         return leader.to_dict_followers()
#     else:
#         return {"error": "can't unfollow someone whom you are not following"}, 401