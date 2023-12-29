
# Chatbot Project Report
## 1. Introduction
### 1.1 Project Overview
The chatbot project aims to deliver a delightful user experience by providing Tunisian recipes based on user queries.
Leveraging technologies such as FastAPI, NLTK, and OpenAI's GPT-3.5-turbo, the project integrates a web interface with speech-to-text capabilities for enhanced accessibility.

![Capture1](https://github.com/bachbech/projet_chatbot/assets/122736683/f21a717d-8047-44d7-a24b-309800e0cde6)


## .2 Technologies Used
### 1.2.1 FastAPI
FastAPI serves as the foundation for the project's backend, offering asynchronous capabilities for efficient handling of user requests. 
The key steps in the FastAPI backend are outlined in the code snippet below:
![2](https://github.com/bachbech/projet_chatbot/assets/122736683/5d41f705-9b0d-451a-84ea-3fc0fac5b84c)

### 1.2.2 NLTK (Natural Language Toolkit)
NLTK is employed for natural language processing tasks. The following snippet illustrates the NLTK-based preprocessing steps:


![3](https://github.com/bachbech/projet_chatbot/assets/122736683/8ee5e003-0f4c-4067-baa4-0d8cfda5dfdb)

### 1.2.3 OpenAI GPT-3.5-turbo
The chatbot integrates OpenAI's GPT-3.5-turbo for advanced natural language understanding and generation. 
The following snippet showcases the interaction with the OpenAI API:

![4](https://github.com/bachbech/projet_chatbot/assets/122736683/8bc1d29f-5b05-4217-9748-38d1ad150b9b)


**Bootstrap and Web Speech API**
Bootstrap is utilized for frontend styling, providing a responsive and visually appealing interface. 
The integration of the Web Speech API enables users to input queries using voice commands

## 2. Code Structure
### 2.1 Backend (main.py)
The backend, implemented in main.py, orchestrates the core functionality of the chatbot.
The "/recette" endpoint processes user queries through a series of steps, including NLTK-based preprocessing and interaction with the GPT-3.5-turbo engine.

### 2.2 Frontend (index.html, styles.css, script.js)
The frontend components are spread across three main files. 
The HTML file (index.html) defines the structure of the web interface, the CSS file (styles.css) provides styling to enhance the visual appeal, and the JavaScript file (script.js) manages user interactions and incorporates the speech-to-text feature.

### 2.3 Speech-to-Text (script.js)
The inclusion of speech-to-text functionality is a notable feature of the project.
The script.js file handles the integration of the Web Speech API, allowing users to input queries via voice commands.

## 3. User Interface
### 3.1 Design and Styling
The user interface is carefully designed for an optimal user experience.
The combination of Bootstrap for responsive design and custom styles in styles.css ensures a visually appealing and intuitive layout. The background image and color scheme are thoughtfully chosen to align with the Tunisian cuisine theme.

### 3.2 Interaction Flow
Users can input queries through a text input field or utilize the speech-to-text feature by clicking the microphone icon.
Upon submitting a query, the chatbot processes the request, and the response is prominently displayed on the page, enhancing user engagement.

## Deployment
### 4.1 Running the Code
The project is intended for deployment in a virtual environment. To run the code, we will use the following command:
#uvicorn main:app --reload
### 4.2 Accessing the Interface
The web interface is accessible at http://127.0.0.1:8000. Users can interact with the chatbot by inputting queries and exploring the rich culinary responses provided by the GPT-3.5-turbo engine.


