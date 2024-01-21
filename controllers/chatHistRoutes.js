// Import necessary modules
const express = require('express');
const router = express.Router();
const { ChatHistory } = require('../models');

// GET route to retrieve all chat history
router.get('/chat-history', async (_req, res) => {
  try {
    const chatHistory = await ChatHistory.findAll();
    res.json(chatHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve chat history' });
  }
});

// POST route to add a new chat message to the history
router.post('/chat-history', async (req, res) => {
  const { message, sender } = req.body;

  try {
    const newChatMessage = await ChatHistory.create({ message, sender });
    res.json(newChatMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add chat message' });
  }
});

module.exports = router;
     newMessage();
    
    