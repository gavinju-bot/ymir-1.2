"""add mining_dataset_id to iteration tbl

Revision ID: 9bb7bb8b71c3
Revises: a5b7b9a297b2
Create Date: 2022-09-09 11:13:10.508069

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "9bb7bb8b71c3"
down_revision = "a5b7b9a297b2"
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table("iteration", schema=None) as batch_op:
        batch_op.add_column(sa.Column("mining_dataset_id", sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table("iteration", schema=None) as batch_op:
        batch_op.drop_column("mining_dataset_id")
    # ### end Alembic commands ###
