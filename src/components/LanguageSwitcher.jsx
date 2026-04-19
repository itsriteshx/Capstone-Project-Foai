import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiCheck, FiGlobe } from 'react-icons/fi';

const languages = [
  { code: 'en', name: 'English',    nativeName: 'English',    flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi',      nativeName: 'हिंदी',        flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi',    nativeName: 'मराठी',        flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali',    nativeName: 'বাংলা',        flag: '🇧🇩' },
  { code: 'ur', name: 'Urdu',       nativeName: 'اردو',         flag: '🇵🇰', rtl: true },
  { code: 'gu', name: 'Gujarati',   nativeName: 'ગુજરાતી',      flag: '🇮🇳' },
  { code: 'pa', name: 'Punjabi',    nativeName: 'ਪੰਜਾਬੀ',        flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil',      nativeName: 'தமிழ்',        flag: '🇮🇳' },
  { code: 'te', name: 'Telugu',     nativeName: 'తెలుగు',       flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada',    nativeName: 'ಕನ್ನಡ',        flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam',  nativeName: 'മലയാളം',       flag: '🇮🇳' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="lang-switcher-container" ref={dropdownRef} style={{ position: 'relative' }}>
      <button 
        className="btn btn-outline" 
        style={{ padding: '6px 14px', fontSize: '0.8rem', borderColor: 'rgba(52,211,153,0.3)', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '8px' }} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiGlobe /> {currentLang.flag} {currentLang.nativeName}
      </button>

      {isOpen && (
        <div className="lang-dropdown glass-card" style={{ 
          position: 'absolute', 
          top: 'calc(100% + 8px)', 
          right: 0, 
          zIndex: 100, 
          width: '220px', 
          maxHeight: '80vh', 
          overflowY: 'auto', 
          padding: '8px',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
        }}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                padding: '10px 12px',
                background: i18n.language === lang.code ? 'rgba(16,185,129,0.1)' : 'transparent',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                color: i18n.language === lang.code ? 'var(--green-400)' : 'var(--text-primary)',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background 0.2s',
                marginBottom: '4px'
              }}
              onMouseEnter={(e) => {
                if (i18n.language !== lang.code) e.currentTarget.style.background = 'var(--bg-tertiary)';
              }}
              onMouseLeave={(e) => {
                if (i18n.language !== lang.code) e.currentTarget.style.background = 'transparent';
              }}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span style={{ marginRight: '10px', fontSize: '1.2rem' }}>{lang.flag}</span>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{lang.nativeName}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{lang.name}</span>
              </div>
              {i18n.language === lang.code && <FiCheck style={{ color: 'var(--green-400)' }} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
