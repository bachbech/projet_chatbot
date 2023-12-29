document.addEventListener('DOMContentLoaded', function () {
    const microphoneBtn = document.getElementById('microphoneBtn');
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const responseContainer = document.getElementById('responseContainer');

   
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'fr-FR';

    microphoneBtn.addEventListener('click', function () {
        recognition.start();
    });

    recognition.addEventListener('result', function (event) {
        const transcript = event.results[0][0].transcript;
        userInput.value = transcript;
    });

 
    sendBtn.addEventListener('click', function () {
        const userQuery = userInput.value.trim();
        if (userQuery !== '') {
            
            const apiUrl = 'http://127.0.0.1:5500/recette/';

           
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: userQuery }),
            })
                .then(response => response.json())
                .then(data => {
                    responseContainer.innerHTML = `<p>${data.recette}</p>`;
                    userInput.value = ''; 
                })
                .catch(error => console.error('Error:', error));
        }
    });
});
