# 🏥 AI Healthcare Chatbot - Advanced Medical Assistant

An intelligent healthcare chatbot system using Natural Language Processing (NLP) and advanced AI, based on the research paper **"An Advanced AI Based Healthcare Chatbot System using Natural Language Processing"** by Dadheech et al. (2025).

![Python](https://img.shields.io/badge/Python-3.10-blue)
![Flask](https://img.shields.io/badge/Flask-3.0.0-green)
![Groq AI](https://img.shields.io/badge/Groq-Llama%203.3%2070B-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 📚 Research Foundation

This project implements concepts from the research paper:

**"An Advanced AI Based Healthcare Chatbot System using Natural Language Processing"**  
*Authors: Vinti Dadheech, Nandini Ranjan Sinha, D. Vinod*  
*Institution: SRM Institute of Science and Technology, Chennai, Tamil Nadu, India*  
*Publication: SSRN Electronic Journal (2025)*

🔗 **Paper Link:** [https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5083325](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5083325)

### Key Research Contributions Implemented:
- ✅ Advanced NLP for symptom analysis
- ✅ Conversational AI with multi-turn dialogue management
- ✅ Accessibility-by-design framework (voice input support)
- ✅ Context-aware medical recommendations
- ✅ Patient-centered interaction model
- ✅ Emphasis on inclusivity and accessibility

---

## ✨ Features

### 🤖 **Intelligent Medical Assistant**
- AI-powered conversational diagnosis using Groq AI (Llama 3.3 70B)
- Structured diagnostic approach: Information gathering → Analysis → Recommendations
- One-question-at-a-time natural conversation flow
- Context-aware responses with conversation history

### 🎤 **Accessibility Features**
- Voice input support (Web Speech API)
- Responsive design for mobile and desktop
- Simple, user-friendly interface
- Inclusive design following accessibility-by-design principles

### 🇮🇳 **India-Specific Healthcare Context**
- Emergency numbers: 102/108 (Ambulance), 1298 (Health Helpline)
- Indian medications: Paracetamol, Crocin, Dolo
- Ayurvedic and traditional home remedies
- Indian dietary recommendations (khichdi, dal-rice, ORS)
- Common Indian diseases consideration (dengue, typhoid, heat-related illnesses)
- Temperature in Celsius and Fahrenheit
- Monsoon and climate-related health advice

### 🏠 **Comprehensive Health Guidance**
- Detailed symptom analysis with follow-up questions
- Evidence-based home remedy suggestions
- Clear guidance on when to seek medical care:
  - 🚨 Emergency (call 102/108 immediately)
  - ⚠️ Urgent care (visit doctor same day)
  - 📋 Routine care (schedule appointment)
- Medication dosing and safety information
- Dietary and lifestyle recommendations

### 🔒 **Privacy & Security**
- Secure data handling compliant with healthcare privacy standards
- No data storage - all conversations are session-based
- Private and confidential interactions

---

## 🚀 Tech Stack

| Component | Technology |
|-----------|-----------|
| **Backend** | Python 3.10, Flask 3.0.0 |
| **AI Model** | Groq API - Llama 3.3 70B Versatile |
| **NLP Framework** | Advanced conversational AI with context management |
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Speech Recognition** | Web Speech API |
| **API Integration** | RESTful API with CORS support |

---

## 📋 Prerequisites

- Python 3.9 - 3.11 (Recommended: **Python 3.10**)
- Groq API Key (Free at [console.groq.com](https://console.groq.com))
- Modern web browser with speech recognition support:
  - ✅ Google Chrome
  - ✅ Microsoft Edge
  - ✅ Safari
  - ❌ Firefox (limited support)

---

## 🔧 Installation

### **Step 1: Clone the repository**
```bash
git clone https://github.com/yourusername/healthcare-chatbot.git
cd healthcare-chatbot
```

### **Step 2: Create virtual environment**

**Option A: Using Conda (Recommended)**
```bash
conda create -n medbot python=3.10 -y
conda activate medbot
```

**Option B: Using venv**
```bash
python -m venv venv

# Windows:
venv\Scripts\activate

# Mac/Linux:
source venv/bin/activate
```

### **Step 3: Install dependencies**
```bash
pip install -r backend/requirements.txt
```

### **Step 4: Get your Groq API Key**

1. Visit [https://console.groq.com](https://console.groq.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Click "Create API Key"
5. Copy your API key (starts with `gsk_`)

### **Step 5: Configure environment variables**

Create a `.env` file in the `backend/` folder:
```bash
# Copy the example file
cp backend/.env.example backend/.env
```

Edit `backend/.env` with your actual keys:
```env
GROQ_API_KEY=gsk_your_actual_groq_api_key_here
SECRET_KEY=your_generated_secret_key_here
FLASK_ENV=development
```

**Generate SECRET_KEY:**
```bash
python -c "import secrets; print(secrets.token_hex(32))"
```

### **Step 6: Run the application**
```bash
python run.py
```

The application will start at: **`http://127.0.0.1:5000`**
```
 * Running on http://127.0.0.1:5000
 * Running on http://localhost:5000
```

### **Step 7: Open in browser**

Navigate to: [http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## 🎯 Usage Guide

### **Basic Interaction**

1. **Open the chatbot** in your browser
2. **Type your symptoms** or click the 🎤 microphone icon for voice input
3. **Answer follow-up questions** one at a time
4. **Receive recommendations** including:
   - Likely diagnosis
   - Home remedies and self-care instructions
   - When to seek medical attention

### **Example Conversation Flow**
```
You: "I have fever and headache"

Bot: "I'm sorry you're not feeling well. When did the fever and headache start?"

You: "Yesterday morning"

Bot: "What is your current temperature reading?"

You: "101°F"

Bot: "Are you experiencing any body aches or joint pain?"

You: "Yes, body aches"

Bot: "Do you have a sore throat or cough?"

You: "No"

Bot: [Provides comprehensive diagnosis, home remedies, and medical guidance]
```

### **Voice Input**

1. Click the 🎤 microphone button
2. Allow browser microphone access (if prompted)
3. Speak your symptoms clearly
4. The text will automatically appear in the input field
5. Click send or press Enter

### **Quick Questions**

Use the pre-defined quick question buttons for common health concerns:
- "I have a fever and headache"
- "What are signs of dehydration?"
- "How to manage stress and anxiety?"
- "Tips for better sleep quality"

---

## 📱 Features Demo

### **Intelligent Symptom Analysis**
The bot follows a structured diagnostic approach:
1. **Information Gathering**: Asks relevant follow-up questions
2. **Analysis**: Considers symptom patterns and common conditions
3. **Recommendations**: Provides home care, medication advice, and doctor visit guidance

### **Home Remedies (India-Specific)**
- ORS (Oral Rehydration Solution) for dehydration
- Paracetamol/Crocin dosing guidelines
- Ayurvedic remedies: Tulsi tea, ginger water, turmeric milk
- Dietary advice: Khichdi, dal-rice, light foods
- Rest and hydration protocols

### **Emergency Guidance**
Clear indicators for different urgency levels:

**🚨 EMERGENCY (Call 102/108):**
- Difficulty breathing
- Chest pain
- Loss of consciousness
- Severe bleeding
- Stroke symptoms

**⚠️ URGENT (Visit Doctor Today):**
- High fever (>103°F / 39.4°C)
- Persistent vomiting
- Severe abdominal pain
- Signs of dehydration

**📋 ROUTINE (Schedule Appointment):**
- Mild symptoms persisting >3 days
- Follow-up care needed
- Preventive health check

---

## 🏗️ Project Structure
```
healthcare-chatbot/
├── backend/
│   ├── __init__.py
│   ├── app.py                  # Main Flask application
│   ├── config.py               # Configuration settings
│   ├── requirements.txt        # Python dependencies
│   └── utils/
│       ├── __init__.py
│       └── groq_client.py      # Groq AI integration
│
├── frontend/
│   ├── index.html              # Main HTML interface
│   ├── css/
│   │   └── style.css           # Styling
│   └── js/
│       ├── app.js              # Main application logic
│       └── speech.js           # Speech recognition handler
│
├── .gitignore                  # Git ignore rules
├── .env.example                # Environment variables template
├── LICENSE                     # MIT License
├── README.md                   # This file
└── run.py                      # Application entry point
```

---

## 🔬 Research Implementation

This project implements key concepts from the research paper:

### **1. Advanced NLP Implementation**
- **Paper Concept**: Using state-of-the-art NLP models for medical conversation
- **Implementation**: Groq AI with Llama 3.3 70B for context-aware responses

### **2. Accessibility-by-Design Framework**
- **Paper Concept**: Ensuring inclusivity for diverse user groups
- **Implementation**: Voice input, simple UI, mobile responsiveness, one-question flow

### **3. Multi-turn Dialogue Management**
- **Paper Concept**: Context-aware conversations with memory
- **Implementation**: Conversation history tracking, follow-up question generation

### **4. Patient-Centered Approach**
- **Paper Concept**: Empathetic, personalized medical assistance
- **Implementation**: Structured diagnostic process, culturally appropriate recommendations

### **5. Healthcare Accessibility**
- **Paper Concept**: Bridging healthcare gaps in underserved areas
- **Implementation**: Free, 24/7 available, India-specific guidance, affordable remedies

---

## ⚠️ Medical Disclaimer

**IMPORTANT: READ CAREFULLY**

This chatbot provides **general health information only** and is **NOT a substitute** for professional medical advice, diagnosis, or treatment.

### **Usage Guidelines:**
- ✅ Use for general health information and guidance
- ✅ Use to understand when to seek medical care
- ✅ Use for home remedy suggestions for minor ailments
- ❌ Do NOT use for emergency medical situations
- ❌ Do NOT use as a replacement for doctor consultations
- ❌ Do NOT use for self-diagnosis of serious conditions

### **Always Consult Healthcare Professionals:**
- For any serious or persistent symptoms
- Before starting any new medication
- If you have chronic health conditions
- For pregnancy-related concerns
- For children's health issues

### **Emergency Situations:**
**In case of medical emergency, immediately call:**
- 🚨 **102 or 108** (Ambulance - India)
- 🚨 **1298** (Health Helpline - India)
- 🏥 Visit the nearest hospital emergency department

### **Liability:**
The creators, contributors, and maintainers of this software assume **no liability** for any medical decisions made based on information provided by this chatbot. Users assume full responsibility for their health decisions.

---

## 🔐 Security & Privacy

### **Data Privacy:**
- ✅ No conversation data is stored permanently
- ✅ Session-based interactions only
- ✅ No personal health information collected
- ✅ No user tracking or analytics
- ✅ Compliant with healthcare privacy principles

### **API Key Security:**
- 🔒 Never commit `.env` file to version control
- 🔒 Keep your Groq API key private
- 🔒 Use environment variables for sensitive data
- 🔒 Regenerate keys if accidentally exposed

### **Best Practices:**
```bash
# Always check before committing
git status

# Ensure .env is in .gitignore
cat .gitignore | grep .env
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### **Areas for Contribution:**
- 🐛 Bug fixes and improvements
- ✨ New features (medication reminders, appointment tracking)
- 🌍 Multi-language support (Hindi, Tamil, Telugu, etc.)
- 📱 Mobile app version
- 🧪 Testing and quality assurance
- 📚 Documentation improvements
- 🎨 UI/UX enhancements

---

## 🐛 Troubleshooting

### **Common Issues:**

#### **1. Port 5000 already in use**
```bash
# Windows - Find process using port
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or change port in run.py
app.run(host='127.0.0.1', port=5001, debug=True)
```

#### **2. API Key errors**
- Verify your Groq API key is correct in `.env`
- Ensure no extra spaces in the key
- Check API key is active at console.groq.com

#### **3. Module not found errors**
```bash
# Ensure virtual environment is activated
conda activate medbot

# Reinstall dependencies
pip install -r backend/requirements.txt
```

#### **4. Voice input not working**
- Use Chrome, Edge, or Safari browser
- Allow microphone permissions when prompted
- Check browser microphone settings

#### **5. CORS errors**
- Ensure Flask-CORS is installed
- Check `CORS(app)` is in `backend/app.py`

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **MIT License Summary:**
- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ⚠️ Liability and warranty disclaimed
- 📝 License and copyright notice required

---

## 🙏 Acknowledgments

### **Research Foundation:**
- Research paper by **Vinti Dadheech, Nandini Ranjan Sinha, and D. Vinod**
- SRM Institute of Science and Technology, Chennai, India
- [SSRN Publication Link](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5083325)

### **Technologies:**
- **Groq AI** for providing free, fast AI inference
- **Llama 3.3 70B** model by Meta AI
- **Flask** web framework community
- **Open-source contributors** worldwide

### **Inspiration:**
- Built to improve healthcare accessibility in India
- Focused on underserved and rural communities
- Emphasis on affordable, immediate health guidance

---






---

**Last Updated:** January 2025  
**Version:** 1.0.0  
**Status:** Active Development ✅
