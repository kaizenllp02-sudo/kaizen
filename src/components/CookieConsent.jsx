import React, { useState, useEffect } from 'react';

const COOKIE_KEY = 'kaizen_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);


  const acceptCookies = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      background: 'rgba(30,32,36,0.98)',
      color: '#fff',
      padding: '18px 16px',
      zIndex: 9999,
      boxShadow: '0 -2px 16px rgba(0,0,0,0.12)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }}>
      <div style={{ maxWidth: 700, textAlign: 'center', fontSize: 15, lineHeight: 1.6 }}>
        This website uses cookies to enhance your browsing experience, analyze site traffic, and serve personalized content. By clicking "Accept", you consent to our use of cookies.
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
        <button
          onClick={acceptCookies}
          style={{
            background: '#e53e3e',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '8px 28px',
            fontWeight: 700,
            fontSize: 15,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(229,62,62,0.12)',
            transition: 'background 0.2s'
          }}
          aria-label="Accept Cookies"
        >
          Accept
        </button>
        <button
          onClick={rejectCookies}
          style={{
            background: '#444',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '8px 28px',
            fontWeight: 700,
            fontSize: 15,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(100,100,100,0.10)',
            transition: 'background 0.2s'
          }}
          aria-label="Reject Cookies"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
