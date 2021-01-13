from .db import db
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.dialects.postgresql import JSON
from .like import Like

class Palette(db.Model):
    __tablename__ = 'palettes'

    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    colors = Column(JSON, nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)

    user = db.relationship('User', back_populates='palettes')
    liked_by = db.relationship('User', secondary=Like, back_populates='liked_palettes')
    comments = db.relationship('Comment', back_populates='palette', cascade='all, delete-orphan')

    def __init__(self, title, colors, user_id):
        self.title = title
        self.colors = colors
        self.user_id = user_id
    
    def to_dict(self):
        return {
            "paletteId": self.id,
            "paletteTitle": self.title,
            "colors": self.colors,
            "createdBy": self.user.username,
            "userId": self.user.id,
            'likedBy': [user.to_dict() for user in self.liked_by],
            'totalLikes': len(self.liked_by),
            "comments" : [comment.to_dict() for comment in self.comments]
        }
    
    def to_dict_likes(self):
        return {
            'palettedId': self.id,
            'likedBy': [user.to_dict() for user in self.liked_by],
            'totalLikes': len(self.liked_by),
        }
        
    def for_user_liked(self):
        return {
            "paletteId": self.id,
            "paletteTitle": self.title,
            "colors": self.colors,
            "createdBy": self.user.username,
            'totalLikes': len(self.liked_by),
        }