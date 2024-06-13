from flask import Flask, jsonify, request
import cv2
import face_recognition
import os
import numpy as np
from datetime import datetime
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config["TEMPLATES_AUTO_RELOAD"] = True
training_images_dir = "Training_images"

known_face_encodings = []
known_face_names = []

# Load training images and encode faces
for filename in os.listdir(training_images_dir):
    if filename.endswith(".png") or filename.endswith(".jpg"):
        image_path = os.path.join(training_images_dir, filename)
        image = face_recognition.load_image_file(image_path)
        encodings = face_recognition.face_encodings(image)
        if encodings:
            known_face_encodings.append(encodings[0])
            known_face_names.append(os.path.splitext(filename)[0])


@app.route("/get_attendance", methods=["POST"])
def get_attendance():
    try:
        json_data = request.get_json()
        if not json_data or "link" not in json_data:
            return jsonify({"error": "Invalid input, 'link' field is required"}), 400

        image_link = json_data["link"]

        # Ensure the image_link is a string
        if not isinstance(image_link, str):
            return jsonify({"error": "The 'link' field must be a string"}), 400

        response = requests.get(image_link)
        if response.status_code != 200:
            return jsonify({"error": "Failed to download image"}), 400

        image_np = np.frombuffer(response.content, np.uint8)
        group_image = cv2.imdecode(image_np, cv2.IMREAD_COLOR)
        rgb_group_image = cv2.cvtColor(group_image, cv2.COLOR_BGR2RGB)

        face_locations = face_recognition.face_locations(rgb_group_image)
        current_datetime = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        attendance_data = []

        for i, (top, right, bottom, left) in enumerate(face_locations):
            face_encoding = face_recognition.face_encodings(
                rgb_group_image, [face_locations[i]]
            )[0]

            matches = face_recognition.compare_faces(
                known_face_encodings, face_encoding, tolerance=0.6
            )
            face_distances = face_recognition.face_distance(
                known_face_encodings, face_encoding
            )

            best_match_index = None
            if True in matches:
                best_match_index = face_distances.argmin()

            if best_match_index is not None and matches[best_match_index]:
                name = known_face_names[best_match_index]
            else:
                name = "Unknown"

            name = name + "@dsce.edu.in"

            attendance_data.append({"Name": name})

        return jsonify(attendance_data)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
