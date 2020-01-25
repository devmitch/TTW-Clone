from pprint import pprint

from flask import Flask, render_template, request, jsonify
from flask_pymongo import PyMongo

from scramble_generator import gen_scramble


app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/db"
mongo = PyMongo(app)


@app.route("/")
def home():
    return render_template("lobby.html")


@app.route("/scrambles", methods=["GET"])
def scramble():
    return jsonify({
        "scramble": gen_scramble()
    })


@app.route("/send_scrambles", methods=["POST"])
def save_time():
    data = request.get_json()

    if request is not None:
        mongo.db["Lobby"].update({'LobbyId': data["lobbyId"]}, 
                                  {'$push': data}, upsert = True)

    for document in mongo.db["Lobby"].find({}):
        pprint(document)
    return "test"
    

if __name__ == "__main__":
    app.run(debug=True)