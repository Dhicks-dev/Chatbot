# Chatbot
Log in Informations
Username : test@email.com
Password: 00000000

Code to Call Resting API
﻿
(async () => {
    const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
    const { URLSearchParams } = require('url');

    // Define the API URL
    const apiUrl = 'https://creativeassist-b1e65ab97095.herokuapp.com/gptquestion';

    // Define the data to be sent
    const postData = new URLSearchParams();
    postData.append('question', 'what is the diameter of the earth');

    // Make a POST request
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: postData
        });

        // Check response's content type
        const contentType = response.headers.get('content-type');
        let data;

        if (contentType && contentType.includes('application/json')) {
            data = await response.json();
        } else {
            data = await response.text();
        }

        console.log('Response:', data);
    } catch (error) {
        console.error('Error:', error);
    }
})();
