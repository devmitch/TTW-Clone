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


@app.route("/save_solve", methods=["POST"])
def save_solve():
    data = request.get_json()

    if request is not None and data["data"]["scramble"] is not None:
        mongo.db["Lobby"].update({'LobbyId': data["lobbyId"]}, 
                                  {'$push': data}, upsert = True)

    return "test"


@app.route("/get_solves", methods=["GET"])
def get_solves():
    if request is not None:
        lobby_id = 0
        data = list(mongo.db["Lobby"].find({}, {"LobbyId": lobby_id}))[0]["data"]
        return jsonify(data)
    

if __name__ == "__main__":
    mongo.db["Lobby"].delete_many({})
    app.run(debug=True)