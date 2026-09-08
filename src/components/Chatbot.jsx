import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { getChatResponse, QUICK_ACTIONS } from '../services/chatService.js';

export default function Chatbot({ role = 'student', context = {} }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Hi. I can help you understand your skills, explore opportunities, and navigate the platform.',
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg = { id: `u-${crypto.randomUUID()}`, sender: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    const reply = await getChatResponse(trimmed, { role, ...context });

    setTyping(false);
    setMessages((prev) => [...prev, { id: `b-${crypto.randomUUID()}`, sender: 'bot', text: reply }]);
  };

  const quickActions = QUICK_ACTIONS[role] || QUICK_ACTIONS.student;

  return (
    <>
      <button
        className="chatbot-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close Ayush Assistant' : 'Open Ayush Assistant'}
        aria-expanded={open}
      >
        {open ? <X size={22} aria-hidden="true" /> : <MessageCircle size={22} aria-hidden="true" />}
      </button>

      {open && (
        <div className="chatbot-panel" role="dialog" aria-label="Ayush Assistant chat">
          <div className="chatbot-header">
            <div>
              <p className="chatbot-title">Ayush Assistant</p>
              <p className="chatbot-subtitle">Mock responses — for demo purposes</p>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="chatbot-messages" ref={scrollRef}>
            {messages.map((m) => (
              <div key={m.id} className={`chatbot-message chatbot-message-${m.sender}`}>
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="chatbot-message chatbot-message-bot chatbot-typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          <div className="chatbot-quick-actions">
            {quickActions.map((action) => (
              <button key={action} className="chatbot-quick-action" onClick={() => sendMessage(action)}>
                {action}
              </button>
            ))}
          </div>

          <form
            className="chatbot-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
          >
            <label htmlFor="chatbot-input" className="visually-hidden">Message</label>
            <input
              id="chatbot-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your skills or opportunities..."
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-send" aria-label="Send message">
              <Send size={16} aria-hidden="true" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
