import { useState, useRef, useEffect } from 'react';
import {
  Bot,
  Send,
  FileText,
  Landmark,
  Search,
  HelpCircle,
  Loader2,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface SuggestedQuestion {
  icon: React.ElementType;
  text: string;
  category: string;
}

const suggestedQuestions: SuggestedQuestion[] = [
  { icon: FileText, text: 'How do I file a complaint?', category: 'Help' },
  { icon: Search, text: 'Check my complaint status', category: 'Track' },
  { icon: Landmark, text: 'What schemes am I eligible for?', category: 'Schemes' },
  { icon: HelpCircle, text: 'What documents do I need for a birth certificate?', category: 'Services' },
];

export function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m JanSeva Assistant. I can help you with:\n\n• Filing complaints\n• Tracking complaint status\n• Government scheme recommendations\n• Required documents for services\n• General government service queries\n\nHow can I assist you today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = async (userMessage: string): Promise<string> => {
    // Simulated AI responses based on keywords
    const lower = userMessage.toLowerCase();

    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    if (lower.includes('file') && lower.includes('complaint')) {
      return 'To file a complaint:\n\n1. Go to "File Complaint" from the navigation menu\n2. Fill in the complaint title and detailed description\n3. Select the appropriate category\n4. Provide the location and your contact number\n5. Optionally upload supporting images\n6. Click "Submit Complaint"\n\nOur AI will automatically categorize your complaint, assign priority, and route it to the correct department. You\'ll receive a tracking ID to monitor progress.\n\nWould you like me to guide you through filing a specific type of complaint?';
    }

    if (lower.includes('status') || lower.includes('track')) {
      return 'To track your complaint:\n\n1. Go to "Track Complaint" from the navigation menu\n2. Enter your complaint ID (e.g., CVC2024001)\n3. Click "Track" to see real-time status\n\nYou can also use quick access buttons on the dashboard for recent complaints.\n\nDo you have a specific complaint ID you\'d like to check?';
    }

    if (lower.includes('scheme') || lower.includes('eligible')) {
      return 'Based on your profile, you may be eligible for:\n\n🎓 **National Scholarship Portal**\n   For students from economically weaker sections\n   Benefits: Up to Rs. 50,000/year\n\n🌾 **PM-KISAN Samman Nidhi**\n   For farmer families\n   Benefits: Rs. 6,000/year\n\n🏥 **Ayushman Bharat**\n   Health insurance scheme\n   Benefits: Up to Rs. 5 lakhs coverage\n\nWould you like detailed information about any of these schemes?';
    }

    if (lower.includes('document') || lower.includes('birth certificate') || lower.includes('certificate')) {
      if (lower.includes('birth')) {
        return '**Documents required for Birth Certificate:**\n\n1. Hospital discharge summary\n2. Parents\' identity proof (Aadhaar)\n3. Proof of marriage (if applicable)\n4. Address proof\n5. Affidavit (if delays)\n\n**Where to apply:**\n• Online: Through your state\'s e-District portal\n• Offline: Municipal Corporation / Gram Panchayat\n\n**Processing time:** 7-15 working days\n\n**Fees:** Usually free within 21 days of birth\n\nNeed help with any other document requirements?';
      }
      return 'I can help you with document requirements. Could you specify which document you need information about? Some common ones:\n\n• Birth Certificate\n• Death Certificate\n• Ration Card\n• Passport\n• Driving License\n• PAN Card\n• Domicile Certificate';
    }

    if (lower.includes('water') || lower.includes('electricity') || lower.includes('road')) {
      return `For **${lower.includes('water') ? 'Water Supply' : lower.includes('electricity') ? 'Electricity' : 'Roads'}** related issues:\n\n**Quick Steps:**\n\n1. File a complaint with detailed location and problem description\n2. Attach photos/videos if possible\n3. Department will be auto-assigned based on category\n\n**Typical Resolution Time:** 3-7 days\n\n**Emergency Numbers:**\n• Water Supply: 1916\n• Electricity: 1912\n• Municipal Emergency: 155305\n\nWould you like to file a specific complaint now?`;
    }

    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
      return 'Hello! How can I help you today? Feel free to ask about:\n\n• Filing and tracking complaints\n• Government schemes and eligibility\n• Document requirements\n• General government services';
    }

    return 'I understand you have a query. Let me help you with that.\n\nFor the most accurate assistance, could you please provide more details about:\n\n• The specific service or department\n• Your current situation\n• What outcome you\'re looking for\n\nIn the meantime, you can:\n• 📝 File a new complaint\n• 🔍 Track existing complaints\n• 🏛️ Explore government schemes\n• 📋 Check document requirements';
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getAIResponse(userMessage.content);

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again or contact support if the issue persists.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSuggestionClick = (text: string) => {
    setInput(text);
    textareaRef.current?.focus();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">AI Assistant</h1>
        <p className="text-slate-600">Your intelligent guide to government services</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden" style={{ height: 'calc(100vh - 220px)' }}>
        <div className="h-full flex flex-col">
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-semibold text-slate-900">JanSeva Assistant</h2>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Online • Ready to help
                </p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex gap-3 animate-fade-in',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={cn(
                    'max-w-[75%] rounded-2xl px-4 py-3',
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                      : 'bg-slate-100 text-slate-700'
                  )}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-slate-600" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 animate-fade-in">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-slate-100 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                    <span className="text-sm text-slate-500">Thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="px-6 pb-4">
              <p className="text-xs text-slate-500 mb-2">Quick suggestions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => {
                  const Icon = question.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(question.text)}
                      className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      {question.text}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="px-6 py-4 border-t border-slate-100 bg-slate-50">
            <div className="flex gap-3">
              <Textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me about government services, schemes, or complaints..."
                className="min-h-[52px] max-h-32 flex-1 resize-none"
                rows={1}
              />
              <Button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="h-[52px] w-[52px] flex-shrink-0"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </Button>
            </div>
            <p className="text-xs text-slate-400 mt-2 text-center">
              Press Enter to send • Shift+Enter for new line
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
