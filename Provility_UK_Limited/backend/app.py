from flask import Flask
from routes import main_bp
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = "secret123"

CORS(app)

app.register_blueprint(main_bp)

if __name__ == "__main__":
    app.run(debug=True)