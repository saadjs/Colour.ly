from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from werkzeug.exceptions import abort
from app.models import db, Palette, User, Like, Comment
from sqlalchemy import func

palette_routes = Blueprint('palettes', __name__)

# * get all the color palettes
@palette_routes.route('')
def palettes():
    palettes = Palette.query.order_by(Palette.id.desc()).limit(12)
    return jsonify([palette.to_dict() for palette in palettes])

# * get palettes with most likes
@palette_routes.route('/popular')
def popular_palettes():
    popular_palettes = Palette.query.join(Like).group_by(Palette.id).order_by(func.count().desc()).limit(12)
    return jsonify([palette.to_dict() for palette in popular_palettes])

# * get one palette
@palette_routes.route('/<int:id>')
def one_palette(id):
    palette = Palette.query.get(id)
    if not palette:
        abort(404, description='Resource not found')
    return jsonify(palette.to_dict())

# * create a palette
@palette_routes.route('', methods=["POST"])
def add_palette():
    title = request.json['title']
    user_id = User.query.filter_by(username = request.json['createdBy']).first().id
    colors = request.json['colors']
    new_palette = Palette(title, colors, user_id)
    db.session.add(new_palette)
    db.session.commit()
    
    return new_palette.to_dict()

# * delete palette
@palette_routes.route('/<int:id>', methods=['DELETE'])
def delete_palette(id):
    palette = Palette.query.get(id)
    if not palette:
        return jsonify('palette not found')
    db.session.delete(palette)
    db.session.commit()
    return jsonify('palette deleted')

# * post like
@palette_routes.route('/<int:id>/like', methods=['POST'])
@login_required
def post_like(id):
    palette = Palette.query.get(id)
    # user = User.query.filter_by(username = request.json['currentUser']).first()
    user = User.query.get(current_user.get_id())
    if user in palette.liked_by:
        palette.liked_by.remove(user)
        db.session.commit()
        return palette.to_dict_likes()
    else:
        palette.liked_by.append(user)
        db.session.commit()
        return palette.to_dict_likes()
    
# * post a comment
@palette_routes.route('/<int:id>/comment', methods=["POST"])
@login_required
def post_comment(id):
    user = User.query.get(current_user.get_id()).id
    palette = Palette.query.get(id)
    comment = request.json['comment']
    new_comment = Comment(comment, palette.id, user)
    db.session.add(new_comment)
    db.session.commit()
    return jsonify(palette.to_dict())


# * trying out search feature
@palette_routes.route('/search', methods=['POST'])
def search_palettes():
    tag = request.json['data']
    search = "%{}%".format(tag)
    palettes = Palette.query.filter(Palette.title.ilike(search)).all()
    users = User.query.filter(User.username.ilike(search)).all()
    return {"users" : [user.to_dict() for user in users],
            "palettes":[palette.to_dict_search() for palette in palettes]}