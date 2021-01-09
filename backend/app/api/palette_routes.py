from flask import Blueprint, jsonify, request
from werkzeug.exceptions import abort
from app.models import db, Palette, User

palette_routes = Blueprint('palettes', __name__)

# * get all the color palettes
@palette_routes.route('/')
def palettes():
    palettes = Palette.query.all()
    return jsonify([palette.to_dict() for palette in palettes])

# * get one palette
@palette_routes.route('/<int:id>')
def one_palette(id):
    palette = Palette.query.get(id)
    if not palette:
        abort(404, description='Resource not found')
    return jsonify(palette.to_dict())