from flask import Blueprint, jsonify, request
from werkzeug.exceptions import abort
from app.models import db, Palette, User

palette_routes = Blueprint('palettes', __name__)

# * get all the color palettes
@palette_routes.route('/')
def palettes():
    palettes = Palette.query.order_by(Palette.id.desc()).limit(12)
    return jsonify([palette.to_dict() for palette in palettes])

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

@palette_routes.route('/<int:id>', methods=['DELETE'])
def delete_palette(id):
    palette = Palette.query.get(id)
    if not palette:
        return jsonify('palette not found')
    db.session.delete(palette)
    db.session.commit()
    return jsonify('palette deleted')