 // Store chat data for each profile
 const chats = {
    profile1: [
        { type: 'received', text: "Hey, how's it going?" },
        { type: 'sent', text: "Pretty good, you?" }
    ],
    profile2: [
        { type: 'received', text: "Hey! Ready for our date?" },
        { type: 'sent', text: "Absolutely, can't wait!" }
    ],
    profile3: [
        { type: 'received', text: "What's up?" },
        { type: 'sent', text: "Just chilling, how about you?" }
    ],
    profile4: [
        { type: 'received', text: "Hi, are we still on for tomorrow?" },
        { type: 'sent', text: "Yes, looking forward to it!" }
    ]
};

let currentProfile = 'profile1';

// Function to switch profiles
function switchProfile(profile) {
    currentProfile = profile;
    renderMessages();
}

// Function to render messages for the current profile
function renderMessages() {
    const chatBody = document.getElementById('chat-body');
    chatBody.innerHTML = '';  // Clear current messages

    const messages = chats[currentProfile];
    messages.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', msg.type);
        messageElement.innerText = msg.text;
        chatBody.appendChild(messageElement);
    });

    chatBody.scrollTop = chatBody.scrollHeight;  // Auto-scroll to bottom
}

// Function to send a new message
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value;

    if (messageText.trim() !== '') {
        chats[currentProfile].push({ type: 'sent', text: messageText });
        renderMessages();
        messageInput.value = '';  // Clear input
    }
}

// Initial render for the first profile
renderMessages();