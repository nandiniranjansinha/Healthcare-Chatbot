# 🏥 AI Healthcare Chatbot - Advanced Medical Assistant

An intelligent healthcare chatbot using **NLP** and **AI**, based on the research paper  
*"An Advanced AI Based Healthcare Chatbot System using Natural Language Processing"* (2025).  

![Python](https://img.shields.io/badge/Python-3.10-blue)
![Flask](https://img.shields.io/badge/Flask-3.0.0-green)
![Groq Cloud](https://img.shields.io/badge/Groq-API%20Cloud-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📚 Research Foundation
- **Paper:** SSRN Electronic Journal (2025)  
- **Authors:** Vinti Dadheech, Nandini Ranjan Sinha, D. Vinod  
- **Link:** [https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5083325](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5083325)

---

## ✨ Features
- Conversational diagnosis with **Groq API from Groq Cloud**  
- Structured approach: **Information → Analysis → Recommendations**  
- Multi-turn dialogue with context-aware responses  
- Voice input support and mobile-friendly UI  
- India-specific guidance: medications, remedies, emergency numbers  

---

## 🚀 Tech Stack
| Component | Technology |
|-----------|-----------|
| Backend | Python 3.10, Flask 3.0.0 |
| AI Model | Groq API from Groq Cloud |
| Frontend | HTML5, CSS3, JavaScript |
| Speech Recognition | Web Speech API |

---

## 📋 Prerequisites
- Python 3.9–3.11 (**Recommended 3.10**)  
- Groq API Key ([console.groq.com](https://console.groq.com))  
- Modern browser: Chrome, Edge, Safari  

---

## 🔧 Installation
```bash
# Clone
git clone https://github.com/yourusername/healthcare-chatbot.git
cd healthcare-chatbot

# Virtual environment
python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r backend/requirements.txt
````

### Configure `.env`

```env
GROQ_API_KEY=gsk_your_api_key
SECRET_KEY=your_secret_key
FLASK_ENV=development
```

### Run App

```bash
python run.py
```

Visit: [http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## 🏗️ Project Structure

```
healthcare-chatbot/
├── backend/
│   ├── app.py
│   ├── config.py
│   └── utils/groq_client.py
├── frontend/
│   ├── index.html
│   ├── css/style.css
│   └── js/app.js
├── .env.example
├── LICENSE
└── run.py
```

---

## ⚠️ Disclaimer

* Provides **general health info only**
* **Not a substitute** for professional medical advice
* **Emergency?** Call 102/108 (India)

---

## 📄 License

MIT License – see [LICENSE](LICENSE)

```

