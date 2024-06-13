from flask import request, jsonify, Flask
import pickle
import numpy as np
from flask_cors import CORS

with open("best_model.pkl", "rb") as file:
    model = pickle.load(file)

app = Flask(__name__)
CORS(app)

@app.route("/regressor", methods=["POST"])
def regressor():
    json_data = request.get_json()
    attendance = json_data["attendance"]
    marks = json_data["marks"]

    input_data = (marks, attendance)

    arr = np.asarray(input_data)

    input_data_reshaped = arr.reshape(1, -1)

    prediction = model.predict(input_data_reshaped)
    response = {"prediction": prediction.tolist()}

    return jsonify(response)

if (__name__ == "__main__"):
    app.run(debug=True)