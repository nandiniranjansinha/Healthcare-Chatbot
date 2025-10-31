const API_URL = 'http://localhost:5000/api';
let conversationHistory = [];

// Initialize timestamp on page load
document.addEventListener('DOMContentLoaded', () => {
    updateTimestamps();
});

function addMessage(text, isUser = false) {
    const chatContainer = document.getElementById('chatContainer');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    messageDiv.innerHTML = `
        <div class="message-icon ${isUser ? 'user-icon' : 'bot-icon'}">
            <i class="fas ${isUser ? 'fa-user' : 'fa-robot'}"></i>
        </div>
        <div class="message-content">
            <p>${text}</p>
            <span class="timestamp">${timestamp}</span>
        </div>
    `;
    
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function showLoading() {
    const chatContainer = document.getElementById('chatContainer');
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message bot-message';
    loadingDiv.id = 'loadingMessage';
    
    loadingDiv.innerHTML = `
        <div class="message-icon bot-icon">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <div class="loading">
                <div class="loading-dot"></div>
                <div class="loading-dot"></div>
                <div class="loading-dot"></div>
            </div>
        </div>
    `;
    
    chatContainer.appendChild(loadingDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function hideLoading() {
    const loadingMessage = document.getElementById('loadingMessage');
    if (loadingMessage) {
        loadingMessage.remove();
    }
}

async function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, true);
    input.value = '';
    
    // Show loading
    showLoading();
    
    // Add to conversation history
    conversationHistory.push({ role: 'user', content: message });
    
    try {
        const response = await fetch(`${API_URL}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: message,
                history: conversationHistory.slice(-10) // Keep last 10 messages
            })
        });
        
        const data = await response.json();
        
        hideLoading();
        
        if (data.status === 'success') {
            addMessage(data.response);
            conversationHistory.push({ role: 'assistant', content: data.response });
        } else {
            addMessage('Sorry, I encountered an error. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        hideLoading();
        addMessage('Sorry, I couldn\'t connect to the server. Please check your connection and try again.');
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

function setInput(text) {
    document.getElementById('userInput').value = text;
    document.getElementById('userInput').focus();
}

function updateTimestamps() {
    const timestamps = document.querySelectorAll('.timestamp');
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timestamps.forEach(ts => {
        if (!ts.textContent) {
            ts.textContent = now;
        }
    });
}
