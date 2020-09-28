from flask import Blueprint, current_app, request, jsonify
from flask_cors import cross_origin
from .model import User
from .serielizer import UserSchema


bp_user = Blueprint('user', __name__)


@bp_user.route('/users', methods=['GET'])
@cross_origin()
def getUsers():
    us = UserSchema(many=True)
    result = User.query.all()
    return us.jsonify(result), 200


@bp_user.route('/user', methods=['POST'])
@cross_origin()
def createUser():
    us = UserSchema()
    user = us.loads(request.data)
    current_app.db.session.add(user)
    current_app.db.session.commit()
    return us.jsonify(user), 201


@bp_user.route('/user/<id>', methods=['GET'])
@cross_origin()
def deleteUser(id):
    User.query.filter(User.id == id).delete()
    current_app.db.session.commit()
    return jsonify('Deleted!'), 204


@bp_user.route('/user/<id>', methods=['PUT'])
@cross_origin()
def editUser(id):
    us = UserSchema()
    query = User.query.filter(User.id == id)
    name = us.loads(request.data).name
    gender = us.loads(request.data).gender
    phone = us.loads(request.data).phone
    email = us.loads(request.data).email
    query.update({'name': name, 'gender': gender,
                  'phone': phone, 'email': email})
    current_app.db.session.commit()
    return jsonify('Edited'), 200
