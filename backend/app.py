from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from backend.config import Config
from backend.utils.groq_client import GroqClient
import logging
import os

# Get the base directory
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
FRONTEND_DIR = os.path.join(os.path.dirname(BASE_DIR), 'frontend')

app = Flask(__name__, static_folder=FRONTEND_DIR)
app.config.from_object(Config)
CORS(app)

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize Groq client
groq_client = GroqClient()

@app.route('/')
def index():
    return send_from_directory(FRONTEND_DIR, 'index.html')

@app.route('/<path:path>')
def send_static(path):
    return send_from_directory(FRONTEND_DIR, path)

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        user_message = data.get('message')
        conversation_history = data.get('history', [])
        
        if not user_message:
            return jsonify({'error': 'No message provided'}), 400
        
        # Get response from Groq
        response = groq_client.get_medical_response(
            user_message, 
            conversation_history
        )
        
        return jsonify({
            'response': response,
            'status': 'success'
        })
    
    except Exception as e:
        logger.error(f"Error in chat endpoint: {str(e)}")
        return jsonify({
            'error': 'An error occurred processing your request',
            'status': 'error'
        }), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'service': 'Healthcare Chatbot API'})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)