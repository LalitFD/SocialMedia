import { Conversation } from "../models/conversation.js";
import { Message } from "../models/Message.js";



// Create new conversation
export const createConversation = async (req, res) => {
    try {
        const { senderId, receiverId } = req.body;

        // Avoid creating duplicate
        let existing = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (existing) return res.status(200).json(existing);

        const newConv = new Conversation({ participants: [senderId, receiverId] });
        const saved = await newConv.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ error: "Cannot create conversation" });
    }
};

// Get all conversations of a user
export const getConversations = async (req, res) => {
    try {
        const userId = req.query.userId;
        const conversations = await Conversation.find({
            participants: userId
        }).populate("participants", "name email");
        res.json(conversations);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch conversations" });
    }
};

// Get single conversation
export const getConversationById = async (req, res) => {
    try {
        const conv = await Conversation.findById(req.params.id).populate("participants", "name email");
        res.json(conv);
    } catch (err) {
        res.status(500).json({ error: "Conversation not found" });
    }
};

// Send new message
export const sendMessage = async (req, res) => {
    try {
        const { conversationId, sender, text } = req.body;
        const message = new Message({ conversationId, sender, text });
        const saved = await message.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ error: "Message not sent" });
    }
};

// Get all messages of a conversation
export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({ conversationId: req.params.id }).sort("createdAt");
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: "Failed to load messages" });
    }
};

// Delete message
export const deleteMessage = async (req, res) => {
    try {
        await Message.findByIdAndDelete(req.params.id);
        res.json({ message: "Message deleted" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete" });
    }
};
