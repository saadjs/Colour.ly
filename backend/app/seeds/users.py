from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io', password='password',
                avatar_url='https://drive.google.com/file/d/1lzgebp0VatsKd1tp41QA-AgtWSnWhL93/view?usp=sharing',
                about_me='If I lived in a cupboard under the stairs like Harry Potter, I’d still make room for you in my life.')
    saad = User(username='saad', email='saad@saad.com', password='password',
                avatar_url='https://drive.google.com/file/d/1vwOEqearXr36ha2IUzqv2FnZZEe41VlB/view?usp=sharing', about_me='If I had a star for every time you brightened my world I’d be holding the entire galaxy in my hands.')
    bob = User(username='bob', email='bob@bob.com', password='password',
               avatar_url='https://drive.google.com/file/d/1lzgebp0VatsKd1tp41QA-AgtWSnWhL93/view?usp=sharing', about_me='I think you’re a Pokemon trainer because you just Weedle-d your way into my heart.')
    cow = User(username='cow', email='cow@wow.com', password='password',
               avatar_url='https://drive.google.com/file/d/11zIeDSp3TpXgvd1kPJk7vBSU_gwtaUQ4/view?usp=sharing', about_me='You must be an appendix because I don’t know what you do, but I really want to take you out.')
    monkey = User(username='monkey', email='monkey@monkey.com', password='password',
                  avatar_url='https://drive.google.com/file/d/1suyjeTkmhzDZZYmKe9BAIwmFOX9mIBga/view?usp=sharing', about_me='Who doesn’t love a totally strange message from a stranger about something completely random?')

    db.session.add(demo)
    db.session.add(saad)
    db.session.add(bob)
    db.session.add(cow)
    db.session.add(monkey)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
