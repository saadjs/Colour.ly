"""delete avatar_url users table

Revision ID: 3874a75e8a70
Revises: 42ae0f5a1369
Create Date: 2021-01-14 13:52:21.839958

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3874a75e8a70'
down_revision = '42ae0f5a1369'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'avatar_url')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('avatar_url', sa.VARCHAR(), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
