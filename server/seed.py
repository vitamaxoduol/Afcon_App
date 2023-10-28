from app import db 
from models.user import User
from models.group_stage import GroupStage
from models.country import Country
from models.player import Player
from models.comment import Comment
from datetime import datetime
from app import app


with app.app_context():
    
    print('Deleting existing group stages...')
    GroupStage.query.delete()
    
    print('Deleting existing users...')
    User.query.delete()
    
    print('Deleting existing countries...')
    Country.query.delete()
    
    print('Deleting existing player...')
    Player.query.delete()
    
    print('Deleting existing comments...')
    Comment.query.delete()

    # Create sample data for the User model
    print('Creating user objects...')
    user1 = User(name='nate wamzy', email='nate@example.com', country='Rwanda')
    user1.set_password('password1')

    user2 = User(name='Joy njunguna', email='joy@example.com', country='Canada')
    user2.set_password('password2')
    
    user3 = User(name='Mercy Mochere', email='mochere@yahoo.com', country='Kenya')
    user3.set_password('password3')
    
    user4 = User(name='Carl Emmanuel', email='carl@yahoo.com', country='Tanzania')
    user4.set_password('password4')
    
    user5 =User(name='Vitamax Oduol', email='vitamax.oduol@student.moringaschool.com', country='Kenya')
    user5.set_password('password5')

    # Create sample data for the GroupStage model
    print('Creating group_stage objects...')
    group_stage1 = GroupStage(name='Group A')
    group_stage2 = GroupStage(name='Group B')

    # Add the data to the session
    db.session.add_all([user1, user2, user3, user4, group_stage1, group_stage2])
    db.session.commit()

    # Create sample data for the Country model
    country1 = Country(name='Egypt', coach='Coach 1', star_rating=4, flag_url='https://shorturl.at/ekAL8', group_stage=group_stage1)
    country2 = Country(name='Cameron', coach='Coach 2', star_rating=3, flag_url='https://shorturl.at/bAJ67', group_stage=group_stage1)
    country3 = Country(name='Algeria', coach='Coach 3', star_rating=5, flag_url='https://shorturl.at/defY5', group_stage=group_stage2)
    country4 = Country(name='Kenya', coach='Coach 4', star_rating=3, flag_url='https://shorturl.at/aBHK7', group_stage=group_stage2)



    db.session.add_all([country1, country2, country3, country4])
    db.session.commit()

    # Create sample data for the Player model
    player1 = Player(name='Mostafa', age=25, country=country1, photo_url='https://english.ahram.org.eg/Media/News/2019/11/14/2019-637093652329609168-960.jpg')
    player2 = Player(name='Elneny', age=28, country=country1, photo_url='https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/034A/production/_115524800_mohamed_elneny.jpg')
    player3 = Player(name='Salah', age=24, country=country1, photo_url='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Mo_Salah_2018.png/185px-Mo_Salah_2018.png')
    player4 = Player(name='Omar', age=24, country=country1, photo_url='https://i.pinimg.com/736x/07/82/e0/0782e0bcb0b060476096cf51c97328d8.jpg')
    player5 = Player(name='Ibrahim', age=24, country=country1, photo_url='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Mahmoud_Tr%C3%A9z%C3%A9guet_in_world_cup_2018.jpg/220px-Mahmoud_Tr%C3%A9z%C3%A9guet_in_world_cup_2018.jpg')
    player6 = Player(name='Onana', age=25, country=country2, photo_url='https://static01.nyt.com/images/2022/01/13/multimedia/13onana/13onana-mediumSquareAt3X.jpg')
    player7 = Player(name='Vincent', age=28, country=country2, photo_url='https://www.geosuper.tv/assets/uploads/updates/2022-11-28/20379_2398603_updates.jpg')
    player8 = Player(name='Song', age=24, country=country2, photo_url='https://img.bleacherreport.net/img/images/photos/003/629/574/hi-res-9c28137de8a4dcbf215ddb01c0a8196a_crop_north.jpg?1475481732&w=3072&h=2048')
    player9 = Player(name='Ekambi', age=24, country=country2, photo_url='https://i.pinimg.com/564x/34/4c/7f/344c7f3272968d78ee8254e487ffa976.jpg')
    player10 = Player(name='Mbeumo', age=24, country=country2, photo_url='https://i.pinimg.com/564x/a7/ad/09/a7ad09e00b4a59393aa3c3260e947e12.jpg')
    player11 = Player(name='Mahrez', age=25, country=country3, photo_url='https://i.pinimg.com/564x/ab/08/0b/ab080bfee53201c0adfdbc6ff8bd2c1b.jpg')
    player12 = Player(name='Touba', age=28, country=country3, photo_url='https://i.pinimg.com/564x/fe/2e/ba/fe2eba6c8aef716ab4ee9b8058642a42.jpg')
    player13 = Player(name='Atal', age=24, country=country3, photo_url='https://i.pinimg.com/564x/3a/e1/b9/3ae1b96354a5c6f26b9c98d33a378464.jpg')
    player14 = Player(name='Delort', age=24, country=country3, photo_url='https://i.pinimg.com/564x/20/8a/6a/208a6a4a7491cc11f7bfad45ee7ec773.jpg')
    player15 = Player(name='Zerrouki', age=24, country=country3, photo_url='https://i.pinimg.com/564x/f8/98/00/f89800985ead8e1d2a60940bc931064c.jpg')
    player16 = Player(name='Oliech', age=25, country=country4, photo_url='https://i.pinimg.com/736x/63/4e/81/634e81103a07eda175541fbe549fcc97.jpg')
    player17 = Player(name='Okumu', age=28, country=country4, photo_url='https://i.pinimg.com/564x/1f/c4/11/1fc41176140baf18ff7ba2585bbe5cf4.jpg')
    player18 = Player(name='Otieno', age=24, country=country4, photo_url='https://i.pinimg.com/564x/41/99/a0/4199a01df982be57e8dd7b384965a0ca.jpg')
    player19 = Player(name='Olunga', age=24, country=country4, photo_url='https://i.pinimg.com/564x/64/c3/d3/64c3d362e87fb82b8ca68c944c67af76.jpg')
    player20 = Player(name='Wanyama', age=24, country=country4, photo_url='https://i.pinimg.com/564x/52/96/6b/52966b0f99436fd7ce177a5e02fc2f1d.jpg')
    
    db.session.add_all([player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20])
    db.session.commit()
    

    # Create sample data for the Comment model
    comment1 = Comment(user=user1, content="Kampala has really upped its game in terms of infrastructure for the AFCON. Kudos!", created_at=datetime.utcnow())
    comment2 = Comment(user=user1, content="Kasarani's stadium atmosphere is electrifying! Nothing beats watching a match there.", created_at=datetime.utcnow())
    comment3 = Comment(user=user1, content="The Egypt squad is young and energetic. The future looks bright for them.", created_at=datetime.utcnow())
    comment4 = Comment(user=user2, content="Loved the cultural festivals in Kisumu during match days. It added so much vibrancy to the event.", created_at=datetime.utcnow())
    comment5 = Comment(user=user2, content="Algeria's team looks stronger than ever. Can't wait to see them in the finals.", created_at=datetime.utcnow())
    comment6 = Comment(user=user2, content='Nairobi has blended the historical with the modern so well for this AFCON. The fan zones near the old medina are a treat.', created_at=datetime.utcnow())
    comment7 = Comment(user=user3, content='Cameroon has always had a special team in AFCON history. Hope they shine this year too.', created_at=datetime.utcnow())
    comment8 = Comment(user=user3, content="Atal has been a wall in defense for Morocco. Opponents can't get past him.", created_at=datetime.utcnow())
    comment9 = Comment(user=user3, content="Sadio Mané is Senegal's pride. His dribbling skills had me at the edge of my seat.", created_at=datetime.utcnow())
    comment10 = Comment(user=user4, content="Mohamed Salah's performance last night was world-class. Egypt has a gem!", created_at=datetime.utcnow())
    
    
    

    db.session.add_all([comment1, comment2, comment3, comment4, comment5, comment6, comment7, comment8, comment9, comment10])
    db.session.commit()

    print('Complete.')