from marshmallow import fields, validates, ValidationError
from flask_marshmallow import Marshmallow
from .model import User

ma = Marshmallow()


def configure(app):
    ma.init_app(app)


class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True

        name = fields.Str(required=True)
        gender = fields.Str(required=True)
        phone = fields.Str(required=True)
        email = fields.Str(required=True)
