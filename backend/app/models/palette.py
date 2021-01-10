from .db import db
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.dialects.postgresql import JSON

class Palette(db.Model):
    __tablename__ = 'palettes'

    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    colors = Column(JSON, nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)

    user = db.relationship('User', back_populates='palettes')

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
            "userId": self.user.id
        }
        
