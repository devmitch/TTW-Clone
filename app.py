from flask import Flask, render_template, request, jsonify

from scramble_generator import gen_scramble


app = Flask(__name__)


@app.route("/")
def home():
    return render_template("lobby.html")


@app.route("/scrambles", methods=["GET"])
def scramble():
    return jsonify({
        "scramble": gen_scramble()
    })


if __name__ == "__main__":
    app.run(debug=True)