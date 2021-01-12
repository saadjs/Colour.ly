from .db import db

class Comment(db.Model):
    __tablename__ = 'comments'
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String)
    palette_id = db.Column(db.Integer, db.ForeignKey('palettes.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    palette = db.relationship('Palette', back_populates='comments')
    user = db.relationship("User", back_populates='comments')

    def __init__(self, comment, palette_id, user_id):
        self.comment = comment
        self.palette_id = palette_id
        self.user_id = user_id

    def to_dict(self):
        return {
            'paletteId': self.palette_id,
            'user': self.user.to_dict(),
            'comment': self.comment,
        }