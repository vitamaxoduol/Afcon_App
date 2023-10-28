from flask import jsonify, Blueprint, request, make_response
from models.user import User
from models.group_stage import GroupStage
from models.country import Country
from models.player import Player
from models.comment import Comment
from models.dbconfig import db
# from flask_cors import CORS
# import os


api_bp = Blueprint('api_bp', __name__)



@api_bp.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    users_list = []
    for user in users:
        response_dict = user.to_dict()
        users_list.append(response_dict)
    response = make_response(
        jsonify(users_list), 200)    
    return response
    

@api_bp.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get_or_404(id)
    return jsonify(user.to_dict())

@api_bp.route('/group_stages', methods=['GET'])
def get_group_stages():
    group_stages = GroupStage.query.all()
    group_stages_list = [group_stage.to_dict() for group_stage in group_stages]
    return jsonify(group_stages_list)

@api_bp.route('/group_stages/<int:id>', methods=['GET'])
def get_group_stage(id):
    group_stage = GroupStage.query.get_or_404(id)
    return jsonify(group_stage.to_dict())

@api_bp.route('/countries', methods=['GET'])
def get_countries():
    countries_list = Country.query.all()
    return jsonify([country.to_dict() for country in countries_list])

@api_bp.route('/countries/<int:id>', methods=['GET'])
def get_country(id):
    country = Country.query.get_or_404(id)
    return jsonify(country.to_dict())

@api_bp.route('/players', methods=['GET'])
def get_players():
    players_list = Player.query.all()
    return jsonify([player.to_dict() for player in players_list])

@api_bp.route('/players/<int:id>', methods=['GET'])
def get_player(id):
    player = Player.query.get_or_404(id)
    return jsonify(player.to_dict())

@api_bp.route('/comments', methods=['GET'])
def get_comments():
    comments_list = Comment.query.all()
    return jsonify([comment.to_dict() for comment in comments_list])

@api_bp.route('/comments/<int:id>', methods=['GET'])
def get_comment(id):
    comment = Comment.query.get_or_404(id)
    return jsonify(comment.to_dict())

@api_bp.route('/comments', methods=['POST'])
def create_comment():
    data = request.get_json()

    # Validate input data
    if not data:
        return jsonify({'error': 'No data provided'}), 400

    content = data.get('content')
    user_id = data.get('user_id')

    if not content:
        return jsonify({'error': 'Content is required'}), 400
    if not user_id:
        return jsonify({'error': 'User ID is required'}), 400

    new_comment = Comment(content=content, user_id=user_id)
    
    db.session.add(new_comment)
    db.session.commit()

    return jsonify(new_comment.to_dict()), 201

@api_bp.route('/comments/<int:id>', methods=['PATCH'])
def update_comment(id):
    comment = Comment.query.get_or_404(id)
    data = request.get_json()
    if 'content' in data:
        comment.content = data['content']
    db.session.commit()
    return jsonify(comment.to_dict())

@api_bp.route('/comments/<int:id>', methods=['DELETE'])
def delete_comment(id):
    comment = Comment.query.get_or_404(id)
    db.session.delete(comment)
    db.session.commit()
    return jsonify({'id': comment.id, 'message': 'Comment deleted successfully'})
