var chatMessages = [];
var inputValue = "";
var outputValue = "";


function processInput() {
    inputValue = document.querySelector('.large-input').value;
    outputValue = "You typed: " + inputValue;

    updateInputAndOutput();
    addToChatHistory(outputValue);
    inputValue = ""; // Clear the large-input
}

function clearInputAndOutput() {
    inputValue = "";
    outputValue = "";
    updateInputAndOutput();
}

function addToChatHistory(message) {
    chatMessages.push(message);

    if (chatMessages.length > 3) {
        chatMessages.shift();
    }

    updateChatHistory();
}

function clearChatHistory() {
    chatMessages = [];
    updateChatHistory();
}

function updateInputAndOutput() {
    var inputContainer = document.querySelector('.input-container');
    var outputContainer = document.querySelector('.output-container');

    var inputSource = document.getElementById('input-template').innerHTML;
    var outputSource = document.getElementById('output-template').innerHTML;

    var inputTemplate = Handlebars.compile(inputSource);
    var outputTemplate = Handlebars.compile(outputSource);

    inputContainer.innerHTML = inputTemplate({ inputValue: inputValue });
    outputContainer.innerHTML = outputTemplate({ outputValue: outputValue });
}

function updateChatHistory() {
    var chatHistoryContainer = document.getElementById('chat-history');
    var source = document.getElementById('welcome-template').innerHTML;
    var template = Handlebars.compile(source);

    chatHistoryContainer.innerHTML = template({ chatMessages: chatMessages });
}


