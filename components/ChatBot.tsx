import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { createChatSession } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Chat, GenerateContentResponse } from '@google/genai';

const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: '1',
            role: 'model',
            text: "Hi! I'm Alex's AI portfolio assistant. Ask me anything about his projects, experience, or skills!"
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatSessionRef = useRef<Chat | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    // Initialize chat session only once
    useEffect(() => {
        if (!chatSessionRef.current) {
            try {
                chatSessionRef.current = createChatSession();
            } catch (error) {
                console.error("Failed to initialize chat session", error);
            }
        }
    }, []);

    const handleSend = async () => {
        if (!inputValue.trim() || !chatSessionRef.current) return;

        const userMessage: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            text: inputValue
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        try {
            const result = await chatSessionRef.current.sendMessageStream({
                message: userMessage.text
            });
            
            // Placeholder for stream accumulation
            const botMessageId = (Date.now() + 1).toString();
            setMessages(prev => [...prev, {
                id: botMessageId,
                role: 'model',
                text: ''
            }]);

            let fullText = '';
            for await (const chunk of result) {
                const c = chunk as GenerateContentResponse;
                const chunkText = c.text;
                if (chunkText) {
                    fullText += chunkText;
                    setMessages(prev => prev.map(msg => 
                        msg.id === botMessageId ? { ...msg, text: fullText } : msg
                    ));
                }
            }
        } catch (error) {
            console.error("Chat error", error);
            setMessages(prev => [...prev, {
                id: Date.now().toString(),
                role: 'model',
                text: "I'm sorry, I'm having trouble connecting to the neural network right now. Please try again later."
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                id="chat-trigger"
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-40 bg-github-green hover:bg-github-greenHover text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
                aria-label="Open AI Chat"
            >
                <MessageSquare className="w-6 h-6" />
            </button>

            {/* Chat Window */}
            <div className={`fixed bottom-6 right-6 z-50 w-[350px] md:w-[400px] h-[500px] bg-github-bg border border-github-border rounded-xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'}`}>
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-github-border bg-github-card rounded-t-xl">
                    <div className="flex items-center space-x-2">
                        <div className="p-1.5 bg-purple-900/30 rounded-lg">
                            <Sparkles className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-white text-sm">Portfolio Assistant</h3>
                            <span className="text-xs text-github-green flex items-center">
                                <span className="w-1.5 h-1.5 bg-github-green rounded-full mr-1.5 animate-pulse"></span>
                                Online (Gemini 2.5)
                            </span>
                        </div>
                    </div>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="text-github-secondary hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                                msg.role === 'user' 
                                    ? 'bg-[#1f6feb] text-white rounded-br-none' 
                                    : 'bg-github-card border border-github-border text-github-text rounded-bl-none'
                            }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-github-card border border-github-border rounded-2xl rounded-bl-none px-4 py-3">
                                <Loader2 className="w-4 h-4 animate-spin text-github-secondary" />
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-github-border bg-github-card rounded-b-xl">
                    <div className="relative">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Ask about my resume..."
                            className="w-full bg-github-bg border border-github-border text-white placeholder-gray-600 rounded-lg py-3 pl-4 pr-12 focus:outline-none focus:border-github-secondary focus:ring-1 focus:ring-github-secondary transition-all text-sm"
                            disabled={isTyping}
                        />
                        <button
                            onClick={handleSend}
                            disabled={!inputValue.trim() || isTyping}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-github-secondary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="text-center mt-2">
                         <p className="text-[10px] text-gray-600">Powered by Google Gemini. AI can make mistakes.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatBot;