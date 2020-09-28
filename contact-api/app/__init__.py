from flask import Flask
from flask_migrate import Migrate
from .model import configure as config_db
from .serielizer import configure as config_ma
from flask_cors import CORS


def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/creathus.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    config_db(app)
    config_ma(app)
    CORS(app)

    Migrate(app, app.db)

    from .user import bp_user
    app.register_blueprint(bp_user)

    return app
