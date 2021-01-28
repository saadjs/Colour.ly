from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .like import Like

followers = db.Table(
	'followers',
	db.Model.metadata,
	db.Column('leader_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
	db.Column('follower_id', db.Integer, db.ForeignKey('users.id'), primary_key=True)
)


class User(db.Model, UserMixin):
	__tablename__ = 'users'

	id = db.Column(db.Integer, primary_key = True)
	username = db.Column(db.String(40), nullable = False, unique = True)
	about_me = db.Column(db.Text)
	email = db.Column(db.String(255), nullable = False, unique = True)
	hashed_password = db.Column(db.String(255), nullable = False)
	dp_url = db.Column(db.String, 
                    	server_default='https://s3.amazonaws.com/colour.ly/colourly.jpeg')

	palettes = db.relationship('Palette', back_populates='user', cascade='all, delete-orphan')
	liked_palettes = db.relationship('Palette', secondary=Like, back_populates='liked_by')
	comments = db.relationship('Comment', back_populates='user')
 
	following = db.relationship('User', 
                            	secondary='followers',
                            	primaryjoin=id==followers.c.follower_id,
                            	secondaryjoin=id==followers.c.leader_id,
                            	backref='followers')

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
			"aboutMe": self.about_me,
			"dpURL": self.dp_url
		}
  
	def to_dict_full(self):
		return {
			"id": self.id,
			"username": self.username,
			"email": self.email,
			"aboutMe": self.about_me,
			"dpURL": self.dp_url,
			"liked_palettes": [palette.for_user_liked() for palette in self.liked_palettes],
			"totalLikedPalettesByUser": len(self.liked_palettes),
			"totalFollowers": len(self.followers),
			"totalFollowing": len(self.following),
			"followers": [follower.to_dict() for follower in self.followers],
			# "followersIdList": self.followers,
			"following": [following.to_dict() for following in self.following],
			# "followingIdList": self.following
		}

	def to_dict_min(self):
		return {
			"id": self.id,
			"username": self.username,
		}

	def to_dict_followers(self):
		return {
			"currentUserId": self.id,
			"username": self.username,
			"email": self.email,
			"followers": [follower.to_dict_min() for follower in self.followers],
			"following": [following.to_dict_min() for following in self.following],
			"totalFollowers": len(self.followers),
			"totalFollowing": len(self.following)
		}