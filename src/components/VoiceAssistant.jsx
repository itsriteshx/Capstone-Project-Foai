import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LANG_CONFIG = {
  en: { name: 'English', speech: 'en-IN', label: 'EN' },
  hi: { name: 'Hindi', speech: 'hi-IN', label: 'HI' },
  mr: { name: 'Marathi', speech: 'mr-IN', label: 'MR' },
  bn: { name: 'Bengali', speech: 'bn-IN', label: 'BN' },
  ur: { name: 'Urdu', speech: 'ur-PK', label: 'UR' },
  gu: { name: 'Gujarati', speech: 'gu-IN', label: 'GU' },
  pa: { name: 'Punjabi', speech: 'pa-Guru-IN', label: 'PA' },
  ta: { name: 'Tamil', speech: 'ta-IN', label: 'TA' },
  te: { name: 'Telugu', speech: 'te-IN', label: 'TE' },
  kn: { name: 'Kannada', speech: 'kn-IN', label: 'KN' },
  ml: { name: 'Malayalam', speech: 'ml-IN', label: 'ML' },
};

const QUICK_QUESTIONS = {
  en: ['How to treat early blight?', 'Signs of bacterial spot?', 'Weather risk today?', 'Prevent crop diseases?'],
  hi: ['अर्ली ब्लाइट का उपचार?', 'बैक्टीरियल स्पॉट के लक्षण?', 'आज मौसम जोखिम?', 'फसल रोग कैसे रोकें?'],
  mr: ['अर्ली ब्लाइट उपचार?', 'बॅक्टेरियल स्पॉट लक्षणे?', 'आजचा हवामान धोका?', 'रोग कसे रोखायचे?'],
  bn: ['আর্লি ব্লাইট চিকিৎসা?', 'ব্যাকটেরিয়াল স্পট লক্ষণ?', 'আজ আবহাওয়া ঝুঁকি?', 'রোগ প্রতিরোধ?'],
  ur: ['ابتدائی بلائٹ علاج؟', 'بیکٹیریل اسپاٹ علامات؟', 'آج موسم خطرہ؟', 'فصل بیماری روکیں؟'],
  gu: ['અર્લી બ્લાઇટ સારવાર?', 'બેક્ટેરિયલ સ્પૉટ લક્ષણ?', 'આજ હવામાન જોખમ?', 'રોગ કેવી રીતે અટકાવવો?'],
  pa: ['ਅਰਲੀ ਬਲਾਈਟ ਇਲਾਜ?', 'ਬੈਕਟੀਰੀਅਲ ਸਪਾਟ ਲੱਛਣ?', 'ਅੱਜ ਮੌਸਮ ਖਤਰਾ?', 'ਬਿਮਾਰੀ ਕਿਵੇਂ ਰੋਕੀਏ?'],
  ta: ['ஆரம்ப நோய் சிகிச்சை?', 'பாக்டீரியல் புள்ளி அறிகுறி?', 'இன்று வானிலை?', 'நோய் தடுப்பு?'],
  te: ['ఎర్లీ బ్లైట్ చికిత్స?', 'బాక్టీరియల్ స్పాట్ లక్షణాలు?', 'నేడు వాతావరణ ప్రమాదం?', 'వ్యాధి నివారణ?'],
  kn: ['ಅರ್ಲಿ ಬ್ಲೈಟ್ ಚಿಕಿತ್ಸೆ?', 'ಬ್ಯಾಕ್ಟೀರಿಯಲ್ ಸ್ಪಾಟ್ ಲಕ್ಷಣ?', 'ಇಂದು ಹವಾಮಾನ?', 'ರೋಗ ತಡೆಗಟ್ಟುವಿಕೆ?'],
  ml: ['ആർളി ബ്ലൈറ്റ് ചികിത്സ?', 'ബാക്ടീരിയൽ സ്പോട്ട് ലക്ഷണം?', 'ഇന്ന് കാലാവസ്ഥ?', 'രോഗ പ്രതിരോധം?'],
};

const GREETINGS = {
  en: 'Namaste! I am CropGuard AI. Ask me anything about your crops!',
  hi: 'नमस्ते! मैं CropGuard AI हूँ। अपनी फसलों के बारे में कुछ भी पूछें!',
  mr: 'नमस्कार! मी CropGuard AI आहे. तुमच्या पिकांबद्दल काहीही विचारा!',
  bn: 'নমস্কার! আমি CropGuard AI। আপনার ফসল সম্পর্কে যেকোনো প্রশ্ন করুন!',
  ur: 'السلام علیکم! میں CropGuard AI ہوں۔ اپنی فصلوں کے بارے میں کچھ بھی پوچھیں!',
  gu: 'નમસ્તે! હું CropGuard AI છું. તમારા પાક વિશે કંઈ પણ પૂછો!',
  pa: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ CropGuard AI ਹਾਂ। ਆਪਣੀਆਂ ਫਸਲਾਂ ਬਾਰੇ ਕੁਝ ਵੀ ਪੁੱਛੋ!',
  ta: 'வணக்கம்! நான் CropGuard AI. உங்கள் பயிர்கள் பற்றி எதுவும் கேளுங்கள்!',
  te: 'నమస్కారం! నేను CropGuard AI ని. మీ పంటల గురించి ఏదైనా అడగండి!',
  kn: 'ನಮಸ್ಕಾರ! ನಾನು CropGuard AI. ನಿಮ್ಮ ಬೆಳೆಗಳ ಬಗ್ಗೆ ಏನಾದರೂ ಕೇಳಿ!',
  ml: 'നമസ്കാരം! ഞാൻ CropGuard AI ആണ്. നിങ്ങളുടെ വിളകളെക്കുറിച്ച് എന്തും ചോദിക്കൂ!',
};

async function getAIResponse(userMessage, langCode) {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  const langNames = {
    en: 'English',  hi: 'Hindi',    mr: 'Marathi',
    bn: 'Bengali',  ur: 'Urdu',     gu: 'Gujarati',
    pa: 'Punjabi',  ta: 'Tamil',    te: 'Telugu',
    kn: 'Kannada',  ml: 'Malayalam'
  };
  const langName = langNames[langCode] || 'Hindi';

  try {
    const response = await fetch('/api/groq/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        max_tokens: 250,
        temperature: 0.7,
        messages: [
          {
            role: 'system',
            content: `You are CropGuard AI, an expert agricultural 
assistant for Indian farmers.

CRITICAL LANGUAGE RULE:
You MUST reply ONLY in ${langName} language.
- Hindi → Devanagari script (हिंदी)
- Marathi → Devanagari script (मराठी)
- Tamil → Tamil script (தமிழ்)
- Telugu → Telugu script (తెలుగు)
- Kannada → Kannada script (ಕನ್ನಡ)
- Malayalam → Malayalam script (മലയാളം)
- Bengali → Bengali script (বাংলা)
- Gujarati → Gujarati script (ગુજરાતી)
- Punjabi → Gurmukhi script (ਪੰਜਾਬੀ)
- Urdu → Urdu script (اردو)
- English → English only
NEVER mix languages. NEVER respond in English 
if selected language is not English.

TOPIC RULE:
Answer ONLY about: crop diseases, symptoms, 
treatments, fertilizers, pesticides, irrigation,
weather effects on crops, farming tips, 
seed selection, soil health.
If asked anything else reply:
"I only help with farming and crop topics."

STYLE RULE:
- Max 100 words
- Simple farmer-friendly language
- Be direct and practical
- No unnecessary jargon`
          },
          {
            role: 'user',
            content: userMessage
          }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || `HTTP ${response.status}`);
    }

    return data.choices[0]?.message?.content || getLocalFallback(langCode);

  } catch (err) {
    console.error('Groq Error:', err.message);
    return `⚠️ API Error: ${err.message}. Please verify your Groq API Key in .env!`;
  }
}

function getLocalFallback(langCode) {
  const fallbacks = {
    en: 'Connection issue. Tip: For fungal diseases spray Mancozeb every 7 days. Ensure proper drainage to prevent root rot.',
    hi: 'कनेक्शन समस्या। सुझाव: फफूंद रोगों के लिए हर 7 दिन Mancozeb छिड़कें।',
    mr: 'कनेक्शन त्रुटी। बुरशी रोगांसाठी दर 7 दिवस Mancozeb फवारा.',
    bn: 'সংযোগ সমস্যা। ছত্রাক রোগে প্রতি ৭ দিন Mancozeb স্প্রে করুন।',
    ur: 'کنکشن مسئلہ۔ پھپھوندی بیماریوں کے لیے ہر 7 دن Mancozeb سپرے کریں۔',
    gu: 'કનેક્શન સમસ્યા. ફૂગ રોગો માટે દર 7 દિવસે Mancozeb છંટકાવ.',
    pa: 'ਕੁਨੈਕਸ਼ਨ ਸਮੱਸਿਆ। ਉੱਲੀ ਰੋਗਾਂ ਲਈ ਹਰ 7 ਦਿਨ Mancozeb ਸਪਰੇਅ।',
    ta: 'இணைப்பு சிக்கல். பூஞ்சை நோய்களுக்கு 7 நாட்களுக்கு ஒருமுறை Mancozeb தெளிக்கவும்.',
    te: 'కనెక్షన్ సమస్య. శిలీంధ్ర వ్యాధులకు 7 రోజులకు Mancozeb పిచికారీ.',
    kn: 'ಸಂಪರ್ಕ ಸಮಸ್ಯೆ. ಶಿಲೀಂಧ್ರ ರೋಗಗಳಿಗೆ 7 ದಿನಕ್ಕೊಮ್ಮೆ Mancozeb ಸ್ಪ್ರೇ.',
    ml: 'കണക്ഷൻ പ്രശ്നം. കുമിൾ രോഗങ്ങൾക്ക് 7 ദിവസം ഒരിക്കൽ Mancozeb തളിക്കുക.'
  };
  return fallbacks[langCode] || fallbacks.en;
}

export default function VoiceAssistant() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.split('-')[0] || 'en';

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const recognitionRef = useRef(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: GREETINGS[currentLang] || GREETINGS.en,
        id: Date.now()
      }]);
    }
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const addMessage = (role, content) => {
    setMessages(prev => [...prev, { role, content, id: Date.now() }]);
  };

  const speakText = (text, langCode) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = LANG_CONFIG[langCode]?.speech || 'hi-IN';
    utter.rate = 0.9;
    utter.onstart = () => setIsSpeaking(true);
    utter.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utter);
  };

  const handleSend = async (text) => {
    const msg = text || inputText.trim();
    if (!msg || isLoading) return;
    setInputText('');
    addMessage('user', msg);
    setIsLoading(true);
    try {
      const reply = await getAIResponse(msg, currentLang);
      addMessage('assistant', reply);
      speakText(reply, currentLang);
    } catch (err) {
      console.error('AI Error:', err.message);
      addMessage('assistant', `Error: ${err.message}. Check Groq API Key in .env file.`);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleVoice = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      alert('Voice not supported. Use Google Chrome.');
      return;
    }
    window.speechSynthesis.cancel();
    const rec = new SR();
    rec.lang = LANG_CONFIG[currentLang]?.speech || 'hi-IN';
    rec.continuous = false;
    rec.interimResults = false;
    rec.onstart = () => setIsListening(true);
    rec.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setIsListening(false);
      handleSend(transcript);
    };
    rec.onerror = (e) => {
      setIsListening(false);
      if (e.error === 'not-allowed') alert('Allow microphone access in browser.');
    };
    rec.onend = () => setIsListening(false);
    recognitionRef.current = rec;
    rec.start();
  };

  const langLabel = LANG_CONFIG[currentLang]?.label || 'EN';
  const questions = QUICK_QUESTIONS[currentLang] || QUICK_QUESTIONS.en;

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
          width: 56, height: 56, borderRadius: '50%',
          background: isOpen ? '#dc2626' : '#16a34a',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          transition: 'background 0.2s',
        }}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" />
            <path d="M19 11a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-2.08A7 7 0 0 0 19 11z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed', bottom: 92, right: 24, zIndex: 9998,
          width: 360, height: 560,
          background: '#0a1f12',
          border: '1px solid #166534',
          borderRadius: 16,
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}>
          <div style={{
            padding: '12px 16px',
            background: '#052e16',
            borderBottom: '1px solid #166534',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: '#14532d',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#4ade80">
                <path d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" />
                <path d="M19 11a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-2.08A7 7 0 0 0 19 11z" />
              </svg>
            </div>
            <div>
              <div style={{ color: '#d1fae5', fontSize: 14, fontWeight: 500 }}>CropGuard AI (Free)</div>
              <div style={{ color: '#86efac', fontSize: 11 }}>
                {isListening ? '🔴 Listening...' : isSpeaking ? '🔊 Speaking...' : '✅ Ready'}
              </div>
            </div>
            <div style={{
              marginLeft: 'auto', background: '#14532d',
              color: '#86efac', fontSize: 11, padding: '2px 8px',
              borderRadius: 20,
            }}>{langLabel}</div>
          </div>

          <div style={{
            flex: 1, overflowY: 'auto', padding: 12,
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            {messages.map(msg => (
              <div key={msg.id} style={{
                display: 'flex',
                flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
                gap: 8, alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                  background: msg.role === 'assistant' ? '#14532d' : '#1e3a5f',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, fontWeight: 500,
                  color: msg.role === 'assistant' ? '#86efac' : '#93c5fd',
                }}>
                  {msg.role === 'assistant' ? 'AI' : 'YOU'}
                </div>
                <div style={{
                  maxWidth: '78%', padding: '8px 12px', borderRadius: 12,
                  fontSize: 13, lineHeight: 1.5,
                  background: msg.role === 'assistant' ? '#14532d' : '#1e3a5f',
                  color: msg.role === 'assistant' ? '#d1fae5' : '#bfdbfe',
                }}>
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', background: '#14532d',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, color: '#86efac', fontWeight: 500,
                }}>AI</div>
                <div style={{ padding: '8px 12px', background: '#14532d', borderRadius: 12, color: '#d1fae5', fontSize: 13 }}>
                  🌱 CropGuard AI soch raha hai... (first load mein 20-30 sec lag sakte hain)
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div style={{
            padding: '8px 12px', borderTop: '1px solid #166534',
            display: 'flex', gap: 6, flexWrap: 'wrap',
          }}>
            {questions.map((q, i) => (
              <button key={i} onClick={() => handleSend(q)} style={{
                background: '#052e16', border: '1px solid #166534',
                color: '#86efac', borderRadius: 20, padding: '4px 10px',
                fontSize: 11, cursor: 'pointer',
              }}>{q}</button>
            ))}
          </div>

          <div style={{
            padding: '10px 12px', borderTop: '1px solid #166534',
            display: 'flex', gap: 8, alignItems: 'center',
            background: '#052e16',
          }}>
            <div style={{
              width: 10, height: 10, borderRadius: '50%',
              background: '#4ade80', flexShrink: 0,
            }} />
            <button onClick={toggleVoice} style={{
              width: 36, height: 36, borderRadius: '50%', border: 'none',
              background: isListening ? '#dc2626' : '#16a34a',
              cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, animation: isListening ? 'pulse 1s infinite' : 'none',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" />
                <path d="M19 11a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-2.08A7 7 0 0 0 19 11z" />
              </svg>
            </button>
            <input
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder={
                currentLang === 'hi' ? 'CropGuard से बात करें...' :
                  currentLang === 'mr' ? 'CropGuard शी बोला...' :
                    currentLang === 'ta' ? 'CropGuard-உடன் பேசுங்கள்...' :
                      currentLang === 'te' ? 'CropGuard తో మాట్లాడండి...' :
                        currentLang === 'kn' ? 'CropGuard ಜೊತೆ ಮಾತಾಡಿ...' :
                          currentLang === 'ml' ? 'CropGuard-മായി സംസാരിക്കൂ...' :
                            currentLang === 'bn' ? 'CropGuard এর সাথে কথা বলুন...' :
                              currentLang === 'gu' ? 'CropGuard સાથે વાત કરો...' :
                                currentLang === 'pa' ? 'CropGuard ਨਾਲ ਗੱਲ ਕਰੋ...' :
                                  currentLang === 'ur' ? '...CropGuard سے بات کریں' :
                                    'Speak to CropGuard...'
              }
              style={{
                flex: 1, background: '#0a1f12', border: '1px solid #166534',
                borderRadius: 20, padding: '8px 14px',
                color: '#d1fae5', fontSize: 13, outline: 'none',
              }}
            />
            <button onClick={() => handleSend()} style={{
              width: 36, height: 36, borderRadius: '50%', border: 'none',
              background: '#16a34a', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </>
  );
}
