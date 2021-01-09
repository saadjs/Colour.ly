from flask import Blueprint, jsonify, request
from werkzeug.exceptions import abort
from app.models import db, Palette, User

palette_routes = Blueprint('palettes', __name__)

# * get all the color palettes
@palette_routes.route('/')
def palettes():
    palettes = Palette.query.all()
    return jsonify([palette.to_dict() for palette in palettes])