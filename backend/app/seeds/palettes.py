from app.models import db, User, Palette

def seed_palettes():
    
    canadian = Palette(title='Metalics',
                     colors=[
                                {"name": "Jigglypuff", "color": "#ff9ff3"},
                                {"name": "Casandora Yellow", "color": "#feca57"},
                                {"name": "Pastel Red", "color": "#ff6b6b"},
                                {"name": "Megaman", "color": "#48dbfb"},
                                {"name": "Wild Caribbean Green", "color": "#1dd1a1"},
                                
                         ],
                     user_id=User.query.filter_by(username='monkey').first().id
                     )
    
    chinese = Palette(title='Chromium', 
                       colors=[
                                { "name": "Red", "color": "#F44336" },
                                { "name": "Pink", "color": "#E91E63" },
                                { "name": "Purple", "color": "#9C27B0" },
                                { "name": "Deep Purple", "color": "#673AB7" },
                                { "name": "indigo", "color": "#3F51B5" },
                               ],
                       user_id=User.query.filter_by(username='Demo').first().id
                       )
    
    french = Palette(title='Rainbow',
                       colors=[
                                { "name": "Flat Flesh", "color": "#fad390" },
                                { "name": "Melon Melody", "color": "#f8c291" },
                                { "name": "Livid", "color": "#6a89cc" },
                                { "name": "Spray", "color": "#82ccdd" },
                                { "name": "Paradise Green", "color": "#b8e994" },
                               ],
                        user_id=User.query.filter_by(username='Demo').first().id
                       )
    
    indian = Palette(title='Tropical',
                       colors=[
                                { "name": "Orchid Orange", "color": "#FEA47F" },
                                { "name": "Spiro Disco Ball", "color": "#25CCF7" },
                                { "name": "Honey Glow", "color": "#EAB543" },
                                { "name": "Sweet Garden", "color": "#55E6C1" },
                                { "name": "Falling Star", "color": "#CAD3C8" },
                               ],
                       user_id=User.query.filter_by(username='saad').first().id
                       )
    
    spanish = Palette(title='Floral',
                       colors=[
                                { "name": "Jacksons Purple", "color": "#40407a" },
                                { "name": "C64 Purple", "color": "#706fd3" },
                                { "name": "Swan White", "color": "#f7f1e3" },
                                { "name": "Summer Sky", "color": "#34ace0" },
                                { "name": "Celestial Green", "color": "#33d9b2" },
                                ],
                       user_id=User.query.filter_by(username='bob').first().id
                       )
    
    british = Palette(title='Pastels',
                       colors=[
                                { "name": "Protoss Pylon", "color": "#00a8ff" },
                                { "name": "Periwinkle", "color": "#9c88ff" },
                                { "name": "Rise-N-Shine", "color": "#fbc531" },
                                { "name": "Download Progress", "color": "#4cd137" },
                                { "name": "Seabrook", "color": "#487eb0" },
                               ],
                       user_id=User.query.filter_by(username='cow').first().id
                       )
    
    aussie = Palette(title='Jungle',
                       colors=[
                                { "name": "Beekeeper", "color": "#f6e58d" },
                                { "name": "Spiced Nectarine", "color": "#ffbe76" },
                                { "name": "Pink Glamour", "color": "#ff7979" },
                                { "name": "June Bud", "color": "#badc58" },
                                { "name": "Coastal Breeze", "color": "#dff9fb" },
                               ],
                       user_id=User.query.filter_by(username='monkey').first().id
                           )
    
    american = Palette(title='City Lights',
                       colors=[
                                { "name": "Light Greenish Blue", "color": "#55efc4" },
                                { "name": "Faded Poster", "color": "#81ecec" },
                                { "name": "Green Darner Tail", "color": "#74b9ff" },
                                { "name": "Shy Moment", "color": "#a29bfe" },
                                { "name": "City Lights", "color": "#dfe6e9" },
                               ],
                       user_id=User.query.filter_by(username='Demo').first().id
                       )
    
    dutch = Palette(title='Primrose', 
                       colors=[
                                { "name": "Sunflower", "color": "#FFC312" },
                                { "name": "Energos", "color": "#C4E538" },
                                { "name": "Blue Martina", "color": "#12CBC4" },
                                { "name": "Lavender Rose", "color": "#FDA7DF" },
                                { "name": "Bara Rose", "color": "#ED4C67" },
                           ],
                       user_id=User.query.filter_by(username='saad').first().id
                       )
    
    russian = Palette(title='Fruit Punch',
                       colors=[
                                {"name": "Creamy Peach", "color": "#f3a683"},
                                {"name": "Rosy Highlight", "color": "#f7d794"},
                                {"name": "Soft Blue", "color": "#778beb"},
                                {"name": "Brewed Mustard", "color": "#e77f67"},
                                {"name": "Old Geranium", "color": "#cf6a87"},
                       ],
                       user_id=User.query.filter_by(username='Demo').first().id
                       )
    
    german = Palette(title='Bora Bora',
                     colors=[
                                {"name": "Fusion Red", "color": "#fc5c65"},
                                {"name": "Orange Hibiscus", "color": "#fd9644"},
                                {"name": "Flirtatious", "color": "#fed330"},
                                {"name": "Reptile Green", "color": "#26de81"},
                                {"name": "Maximum Blue Green", "color": "#2bcbba"},
                         ],
                     user_id=User.query.filter_by(username='Demo').first().id
                     )
    
    turkish = Palette(title='Desert',
                     colors=[
                                {"name": "Bright Lilac", "color": "#cd84f1"},
                                {"name": "Pretty Please", "color": "#ffcccc"},
                                {"name": "Light Red", "color": "#ff4d4d"},
                                {"name": "Mandarin Sorbet", "color": "#ffaf40"},
                                {"name": "Unmellow Yellow", "color": "#fffa65"},
                         ],
                     user_id=User.query.filter_by(username='saad').first().id
                     )
    
    swedish = Palette(title='Ikea',
                     colors=[
                                {"name": "Highlighter Pink", "color": "#ef5777"},
                                {"name": "Dark Periwinkle", "color": "#575fcf"},
                                {"name": "Megaman", "color": "#4bcffa"},
                                {"name": "Fresh Turquoise", "color": "#34e7e4"},
                                {"name": "Minty Green", "color": "#0be881"},
                         ],
                     user_id=User.query.filter_by(username='bob').first().id
                     )
    
    db.session.add(canadian)
    db.session.add(chinese)
    db.session.add(french)
    db.session.add(indian)
    db.session.add(spanish)
    db.session.add(british)
    db.session.add(aussie)
    db.session.add(american)
    db.session.add(dutch)
    db.session.add(russian)
    db.session.add(german)
    db.session.add(turkish)
    db.session.add(swedish)
    db.session.commit()
    
def undo_palettes():
    db.session.execute('TRUNCATE palettes;')
    db.session.commit()