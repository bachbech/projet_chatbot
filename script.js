document.addEventListener('DOMContentLoaded', function () {
    const microphoneBtn = document.getElementById('microphoneBtn');
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const responseContainer = document.getElementById('responseContainer');

    // Speech-to-Text functionality using Web Speech API
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'fr-FR';

    microphoneBtn.addEventListener('click', function () {
        recognition.start();
    });

    recognition.addEventListener('result', function (event) {
        const transcript = event.results[0][0].transcript;
        userInput.value = transcript;
    });

    // Send user query to the backend via API
    sendBtn.addEventListener('click', function () {
        const userQuery = userInput.value.trim();
        if (userQuery !== '') {
            // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
            const apiUrl = 'http://127.0.0.1:5500/recette/';

            // Perform the API call using Fetch API
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: userQuery }),
            })
                .then(response => response.json())
                .then(data => {
                    // Display the response in the responseContainer
                    responseContainer.innerHTML = `<p>${data.recette}</p>`;
                    userInput.value = ''; // Clear the input field
                })
                .catch(error => console.error('Error:', error));
        }
    });
});
