"""add candidate_training_dataset_id to project tbl

Revision ID: e2503210ac29
Revises: badf991582d0
Create Date: 2022-07-20 10:48:50.275863

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "e2503210ac29"
down_revision = "0478ce5b8f3f"
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table("project", schema=None) as batch_op:
        batch_op.add_column(sa.Column("candidate_training_dataset_id", sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table("project", schema=None) as batch_op:
        batch_op.drop_column("candidate_training_dataset_id")
    # ### end Alembic commands ###
