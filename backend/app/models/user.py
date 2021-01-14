from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .like import Like

class User(db.Model, UserMixin):
	__tablename__ = 'users'

	id = db.Column(db.Integer, primary_key = True)
	username = db.Column(db.String(40), nullable = False, unique = True)
	about_me = db.Column(db.Text)
	email = db.Column(db.String(255), nullable = False, unique = True)
	hashed_password = db.Column(db.String(255), nullable = False)
	avatar_url = db.Column(db.String)

	palettes = db.relationship('Palette', back_populates='user', cascade='all, delete-orphan')
	liked_palettes = db.relationship('Palette', secondary=Like, back_populates='liked_by')
	comments = db.relationship('Comment', back_populates='user')

	@property
	def password(self):
		return self.hashed_password


	@password.setter
	def password(self, password):
		self.hashed_password = generate_password_hash(password)


	def check_password(self, password):
		return check_password_hash(self.password, password)


	def to_dict(self):
		return {
			"id": self.id,
			"username": self.username,
			"email": self.email,
			'aboutMe': self.about_me,
			'avatarURL': self.avatar_url,
		}
  
	def to_dict_full(self):
		return {
			"id": self.id,
			"username": self.username,
			"email": self.email,
			"liked_palettes": [palette.for_user_liked() for palette in self.liked_palettes],
			'totalLikedPalettesByUser': len(self.liked_palettes)
		}
