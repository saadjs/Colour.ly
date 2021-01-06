from .db import db
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.dialects.postgresql import JSON

class Palette(db.Model):
    __tablename__ = 'palettes'

    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    colors = Column(JSON, nullable=False)
    emoji = Column(String, nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)

    user = db.relationship('User', back_populates='palettes')

    def __init__(self, title, colors, emoji, user_id):
        self.title = title
        self.colors = colors
        self.emoji = emoji
        self.user_id = user_id
    
    def to_dict(self):
        return {
            "paletteId": self.id,
            "paletteTitle": self.title,
            "colors": self.colors,
            "emoji": self.emoji,
            "createdBy": self.user.username
        }
        
