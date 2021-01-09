from app.models import db, User, Palette

def seed_palettes():
    
    canadian = Palette(title='Canadian Colours',
                     colors=[
                                {"name": "Jigglypuff", "color": "#ff9ff3"},
                                {"name": "Casandora Yellow", "color": "#feca57"},
                                {"name": "Pastel Red", "color": "#ff6b6b"},
                                {"name": "Megaman", "color": "#48dbfb"},
                                {"name": "Wild Caribbean Green", "color": "#1dd1a1"},
                                {"name": "Lián Hóng Lotus Pink", "color": "#f368e0"},
                                {"name": "Double Dragon Skin", "color": "#ff9f43"},
                                {"name": "Amour", "color": "#ee5253"},
                                {"name": "Cyanite", "color": "#0abde3"},
                                {"name": "Dark Mountain Meadow", "color": "#10ac84"},
                                {"name": "Jade Dust", "color": "#00d2d3"},
                                {"name": "Joust Blue", "color": "#54a0ff"},
                                {"name": "Nasu Purple", "color": "#5f27cd"},
                                {"name": "Light Blue Ballerina", "color": "#c8d6e5"},
                                {"name": "Fuel Town", "color": "#576574"},
                                {"name": "Aqua Velvet", "color": "#01a3a4"},
                                {"name": "Bleu De France", "color": "#2e86de"},
                                {"name": "Bluebell", "color": "#341f97"},
                                {"name": "Storm Petrel", "color": "#8395a7"},
                                {"name": "Imperial Primer", "color": "#222f3e"},
                         ],
                     user_id=User.query.filter_by(username='monkey').first().id
                     )
    
    chinese = Palette(title='Chinese Colours', 
                       colors=[
                                { "name": "Red", "color": "#F44336" },
                                { "name": "Pink", "color": "#E91E63" },
                                { "name": "Purple", "color": "#9C27B0" },
                                { "name": "Deep Purple", "color": "#673AB7" },
                                { "name": "indigo", "color": "#3F51B5" },
                                { "name": "blue", "color": "#2196F3" },
                                { "name": "light blue", "color": "#03A9F4" },
                                { "name": "cyan", "color": "#00BCD4" },
                                { "name": "teal", "color": "#009688" },
                                { "name": "green", "color": "#4CAF50" },
                                { "name": "light green", "color": "#8BC34A" },
                                { "name": "lime", "color": "#CDDC39" },
                                { "name": "yellow", "color": "#FFEB3B" },
                                { "name": "amber", "color": "#FFC107" },
                                { "name": "orange", "color": "#FF9800" },
                                { "name": "deep orange", "color": "#FF5722" },
                                { "name": "brown", "color": "#795548" },
                                { "name": "grey", "color": "#9E9E9E" },
                                { "name": "blue grey", "color": "#607D8B" }],
                       user_id=User.query.filter_by(username='Demo').first().id
                       )
    
    french = Palette(title='French Colours',
                       colors=[
                                { "name": "Flat Flesh", "color": "#fad390" },
                                { "name": "Melon Melody", "color": "#f8c291" },
                                { "name": "Livid", "color": "#6a89cc" },
                                { "name": "Spray", "color": "#82ccdd" },
                                { "name": "Paradise Green", "color": "#b8e994" },
                                { "name": "Squash Blossom", "color": "#f6b93b" },
                                { "name": "Mandarin Red", "color": "#e55039" },
                                { "name": "Azraq Blue", "color": "#4a69bd" },
                                { "name": "Dupain", "color": "#60a3bc" },
                                { "name": "Aurora Green", "color": "#78e08f" },
                                { "name": "Iceland Poppy", "color": "#fa983a" },
                                { "name": "Tomato Red", "color": "#eb2f06" },
                                { "name": "YueGuang Blue", "color": "#1e3799" },
                                { "name": "Good Samaritan", "color": "#3c6382" },
                                { "name": "Waterfall", "color": "#38ada9" },
                                { "name": "Carrot Orange", "color": "#e58e26" },
                                { "name": "Jalapeno Red", "color": "#b71540" },
                                { "name": "Dark Sapphire", "color": "#0c2461" },
                                { "name": "Forest Blues", "color": "#0a3d62" },
                                { "name": "Reef Encounter", "color": "#079992" }],
                        user_id=User.query.filter_by(username='Demo').first().id
                       )
    
    indian = Palette(title='Indian Colours',
                       colors=[
                                { "name": "Orchid Orange", "color": "#FEA47F" },
                                { "name": "Spiro Disco Ball", "color": "#25CCF7" },
                                { "name": "Honey Glow", "color": "#EAB543" },
                                { "name": "Sweet Garden", "color": "#55E6C1" },
                                { "name": "Falling Star", "color": "#CAD3C8" },
                                { "name": "Rich Gardenia", "color": "#F97F51" },
                                { "name": "Clear Chill", "color": "#1B9CFC" },
                                { "name": "White Pepper", "color": "#F8EFBA" },
                                { "name": "Keppel", "color": "#58B19F" },
                                { "name": "Ships Officer", "color": "#2C3A47" },
                                { "name": "Fiery Fuchsia", "color": "#B33771" },
                                { "name": "Blue Bell", "color": "#3B3B98" },
                                { "name": "Georgia Peach", "color": "#FD7272" },
                                { "name": "Oasis Stream", "color": "#9AECDB" },
                                { "name": "Bright Ube", "color": "#D6A2E8" },
                                { "name": "Magenta Purple", "color": "#6D214F" },
                                { "name": "Ending Navy Blue", "color": "#182C61" },
                                { "name": "Sasquatch Socks", "color": "#FC427B" },
                                { "name": "Pine Glade", "color": "#BDC581" },
                                { "name": "Highlighter Lavender", "color": "#82589F" }],
                       user_id=User.query.filter_by(username='saad').first().id
                       )
    
    spanish = Palette(title='Spanish Colours',
                       colors=[
                                { "name": "Jacksons Purple", "color": "#40407a" },
                                { "name": "C64 Purple", "color": "#706fd3" },
                                { "name": "Swan White", "color": "#f7f1e3" },
                                { "name": "Summer Sky", "color": "#34ace0" },
                                { "name": "Celestial Green", "color": "#33d9b2" },
                                { "name": "Lucky Point", "color": "#2c2c54" },
                                { "name": "Liberty", "color": "#474787" },
                                { "name": "Hot Stone", "color": "#aaa69d" },
                                { "name": "Devil Blue", "color": "#227093" },
                                { "name": "Palm Springs Splash", "color": "#218c74" },
                                { "name": "Flourescent Red", "color": "#ff5252" },
                                { "name": "Synthetic Pumpkin", "color": "#ff793f" },
                                { "name": "Crocodile Tooth", "color": "#d1ccc0" },
                                { "name": "Mandarin Sorbet", "color": "#ffb142" },
                                { "name": "Spiced Butter Nut", "color": "#ffda79" },
                                { "name": "Eye of Newt", "color": "#b33939" },
                                { "name": "Chilean Fire", "color": "#cd6133" },
                                { "name": "Grey Porcelain", "color": "#84817a" },
                                { "name": "Alameda Ochre", "color": "#cc8e35" },
                                { "name": "Desert", "color": "#ccae62" }],
                       user_id=User.query.filter_by(username='bob').first().id
                       )
    
    british = Palette(title='British Colours',
                       colors=[
                                { "name": "Protoss Pylon", "color": "#00a8ff" },
                                { "name": "Periwinkle", "color": "#9c88ff" },
                                { "name": "Rise-N-Shine", "color": "#fbc531" },
                                { "name": "Download Progress", "color": "#4cd137" },
                                { "name": "Seabrook", "color": "#487eb0" },
                                { "name": "VanaDyl Blue", "color": "#0097e6" },
                                { "name": "Matt Purple", "color": "#8c7ae6" },
                                { "name": "Nanohanacha Gold", "color": "#e1b12c" },
                                { "name": "Skirret Green", "color": "#44bd32" },
                                { "name": "Naval", "color": "#40739e" },
                                { "name": "Nasturcian Flower", "color": "#e84118" },
                                { "name": "Lynx White", "color": "#f5f6fa" },
                                { "name": "Blueberry Soda", "color": "#7f8fa6" },
                                { "name": "Mazarine Blue", "color": "#273c75" },
                                { "name": "Blue Nights", "color": "#353b48" },
                                { "name": "Harley Orange", "color": "#c23616" },
                                { "name": "Hint of Pensive", "color": "#dcdde1" },
                                { "name": "Chain Gang Grey", "color": "#718093" },
                                { "name": "Pico Void", "color": "#192a56" },
                                { "name": "Electro Magnetic", "color": "#2f3640" }],
                       user_id=User.query.filter_by(username='cow').first().id
                       )
    
    aussie = Palette(title='Aussie Colours',
                       colors=[
                                { "name": "Beekeeper", "color": "#f6e58d" },
                                { "name": "Spiced Nectarine", "color": "#ffbe76" },
                                { "name": "Pink Glamour", "color": "#ff7979" },
                                { "name": "June Bud", "color": "#badc58" },
                                { "name": "Coastal Breeze", "color": "#dff9fb" },
                                { "name": "Turbo", "color": "#f9ca24" },
                                { "name": "Quince Jelly", "color": "#f0932b" },
                                { "name": "Carmine Pink", "color": "#eb4d4b" },
                                { "name": "Pure Apple", "color": "#6ab04c" },
                                { "name": "Hint Of Ice Pack", "color": "#c7ecee" },
                                { "name": "Middle Blue", "color": "#7ed6df" },
                                { "name": "Heliotrope", "color": "#e056fd" },
                                { "name": "Exodus Fruit", "color": "#686de0" },
                                { "name": "Deep Koamaru", "color": "#30336b" },
                                { "name": "Soaring Eagle", "color": "#95afc0" },
                                { "name": "Greenland Green", "color": "#22a6b3" },
                                { "name": "Steel Pink", "color": "#be2edd" },
                                { "name": "Blurple", "color": "#4834d4" },
                                { "name": "Deep Cove", "color": "#130f40" },
                                { "name": "Wizard Grey", "color": "#535c68" }],
                       user_id=User.query.filter_by(username='monkey').first().id
                           )
    
    american = Palette(title='American Colours',
                       colors=[
                                { "name": "Light Greenish Blue", "color": "#55efc4" },
                                { "name": "Faded Poster", "color": "#81ecec" },
                                { "name": "Green Darner Tail", "color": "#74b9ff" },
                                { "name": "Shy Moment", "color": "#a29bfe" },
                                { "name": "City Lights", "color": "#dfe6e9" },
                                { "name": "Mint Leaf", "color": "#00b894" },
                                { "name": "Robins Egg Blue", "color": "#00cec9" },
                                { "name": "Electron Blue", "color": "#0984e3" },
                                { "name": "Exodus Fruit", "color": "#6c5ce7" },
                                { "name": "Soothing Breeze", "color": "#b2bec3" },
                                { "name": "Sour Lemon", "color": "#ffeaa7" },
                                { "name": "First Date", "color": "#fab1a0" },
                                { "name": "Pink Glamour", "color": "#ff7675" },
                                { "name": "Pico 8 Pink", "color": "#fd79a8" },
                                { "name": "American River", "color": "#636e72" },
                                { "name": "Bright Yarrow", "color": "#fdcb6e" },
                                { "name": "Orange Ville", "color": "#e17055" },
                                { "name": "Chi-Gong", "color": "#d63031" },
                                { "name": "Prunus Avium", "color": "#e84393" },
                                { "name": "Dracula Orchid", "color": "#2d3436" }],
                       user_id=User.query.filter_by(username='Demo').first().id
                       )
    
    dutch = Palette(title='Dutch Colours', 
                       colors=[
                                { "name": "Sunflower", "color": "#FFC312" },
                                { "name": "Energos", "color": "#C4E538" },
                                { "name": "Blue Martina", "color": "#12CBC4" },
                                { "name": "Lavender Rose", "color": "#FDA7DF" },
                                { "name": "Bara Rose", "color": "#ED4C67" },
                                { "name": "Radiant Yellow", "color": "#F79F1F" },
                                { "name": "Android Green", "color": "#A3CB38" },
                                { "name": "Mediterranean Sea", "color": "#1289A7" },
                                { "name": "Lavender Tea", "color": "#D980FA" },
                                { "name": "Verry Berry", "color": "#B53471" },
                                { "name": "Puffins Bill", "color": "#EE5A24" },
                                { "name": "Pixelated Grass", "color": "#009432" },
                                { "name": "Merchant Marine Blue", "color": "#0652DD" },
                                { "name": "Forgotten Purple", "color": "#9980FA" },
                                { "name": "Holly Hock", "color": "#833471" },
                                { "name": "Red Pigment", "color": "#EA2027" },
                                { "name": "Turkish Aqua", "color": "#006266" },
                                { "name": "20000 Leagues Under The Sea", "color": "#1B1464" },
                                { "name": "Circumorbital Ring", "color": "#5758BB" },
                                { "name": "Magenta Purple", "color": "#6F1E51" }
                           ],
                       user_id=User.query.filter_by(username='saad').first().id
                       )
    
    russian = Palette(title='Russian Colours',
                       colors=[
                                {"name": "Creamy Peach", "color": "#f3a683"},
                                {"name": "Rosy Highlight", "color": "#f7d794"},
                                {"name": "Soft Blue", "color": "#778beb"},
                                {"name": "Brewed Mustard", "color": "#e77f67"},
                                {"name": "Old Geranium", "color": "#cf6a87"},
                                {"name": "Sawtooth Aak", "color": "#f19066"},
                                {"name": "Summertime", "color": "#f5cd79"},
                                {"name": "Cornflower", "color": "#546de5"},
                                {"name": "Tigerlily", "color": "#e15f41"},
                                {"name": "Deep Rose", "color": "#c44569"},
                                {"name": "Purple Mountain Majesty", "color": "#786fa6"},
                                {"name": "Rogue Pink", "color": "#f8a5c2"},
                                {"name": "Squeaky", "color": "#63cdda"},
                                {"name": "Apple Valley", "color": "#ea8685"},
                                {"name": "Pencil Lead", "color": "#596275"},
                                {"name": "Purple Corallite", "color": "#574b90"},
                                {"name": "Flamingo Pink", "color": "#f78fb3"},
                                {"name": "Blue Curacao", "color": "#3dc1d3"},
                                {"name": "Porcelain Rose", "color": "#e66767"},
                                {"name": "Biscay", "color": "#303952"},
                       ],
                       user_id=User.query.filter_by(username='Demo').first().id
                       )
    
    german = Palette(title='German Colours',
                     colors=[
                                {"name": "Fusion Red", "color": "#fc5c65"},
                                {"name": "Orange Hibiscus", "color": "#fd9644"},
                                {"name": "Flirtatious", "color": "#fed330"},
                                {"name": "Reptile Green", "color": "#26de81"},
                                {"name": "Maximum Blue Green", "color": "#2bcbba"},
                                {"name": "Desire", "color": "#eb3b5a"},
                                {"name": "Beniukon Bronze", "color": "#fa8231"},
                                {"name": "NYC taxi", "color": "#f7b731"},
                                {"name": "Algal Fuel", "color": "#20bf6b"},
                                {"name": "Turquoise Topaz", "color": "#0fb9b1"},
                                {"name": "High Blue", "color": "#45aaf2"},
                                {"name": "C64 NTSC", "color": "#4b7bec"},
                                {"name": "Lighter Purple", "color": "#a55eea"},
                                {"name": "Twinkle Blue", "color": "#d1d8e0"},
                                {"name": "Blue Grey", "color": "#778ca3"},
                                {"name": "Boyzone", "color": "#2d98da"},
                                {"name": "Royal Blue", "color": "#3867d6"},
                                {"name": "Gloomy Purple", "color": "#8854d0"},
                                {"name": "Innuendo", "color": "#a5b1c2"},
                                {"name": "Blue Horizon", "color": "#4b6584"},
                         ],
                     user_id=User.query.filter_by(username='Demo').first().id
                     )
    
    turkish = Palette(title='Turkish Colours',
                     colors=[
                                {"name": "Bright Lilac", "color": "#cd84f1"},
                                {"name": "Pretty Please", "color": "#ffcccc"},
                                {"name": "Light Red", "color": "#ff4d4d"},
                                {"name": "Mandarin Sorbet", "color": "#ffaf40"},
                                {"name": "Unmellow Yellow", "color": "#fffa65"},
                                {"name": "Light Purple", "color": "#c56cf0"},
                                {"name": "Young Salmon", "color": "#ffb8b8"},
                                {"name": "Red Orange", "color": "#ff3838"},
                                {"name": "Radiant Yellow", "color": "#ff9f1a"},
                                {"name": "Dorn Yellow", "color": "#fff200"},
                                {"name": "Wintergreen", "color": "#32ff7e"},
                                {"name": "Electric Blue", "color": "#7efff5"},
                                {"name": "Neon Blue", "color": "#18dcff"},
                                {"name": "Light Slate Blue", "color": "#7d5fff"},
                                {"name": "Shadowed Steel", "color": "#4b4b4b"},
                                {"name": "Weird Green", "color": "#3ae374"},
                                {"name": "Hammam Blue", "color": "#67e6dc"},
                                {"name": "Spiro Disco Ball", "color": "#17c0eb"},
                                {"name": "Light Indigo", "color": "#7158e2"},
                                {"name": "Baltic Sea", "color": "#3d3d3d"},
                         ],
                     user_id=User.query.filter_by(username='saad').first().id
                     )
    
    swedish = Palette(title='Swedish Colours',
                     colors=[
                                {"name": "Highlighter Pink", "color": "#ef5777"},
                                {"name": "Dark Periwinkle", "color": "#575fcf"},
                                {"name": "Megaman", "color": "#4bcffa"},
                                {"name": "Fresh Turquoise", "color": "#34e7e4"},
                                {"name": "Minty Green", "color": "#0be881"},
                                {"name": "Sizzling Red", "color": "#f53b57"},
                                {"name": "Free Speech Blue", "color": "#3c40c6"},
                                {"name": "Spiro Disco Ball", "color": "#0fbcf9"},
                                {"name": "Jade Dust", "color": "#00d8d6"},
                                {"name": "Green Teal", "color": "#05c46b"},
                                {"name": "Nârenji Orange", "color": "#ffc048"},
                                {"name": "Yriel Yellow", "color": "#ffdd59"},
                                {"name": "Sunset Orange", "color": "#ff5e57"},
                                {"name": "Hint of Elusive Blue", "color": "#d2dae2"},
                                {"name": "Good Night!", "color": "#485460"},
                                {"name": "Chrome Yellow", "color": "#ffa801"},
                                {"name": "Vibrant Yellow", "color": "#ffd32a"},
                                {"name": "Red Orange", "color": "#ff3f34"},
                                {"name": "London Square", "color": "#808e9b"},
                                {"name": "Black Pearl", "color": "#1e272e"},
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