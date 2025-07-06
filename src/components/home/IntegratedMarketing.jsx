import React, { useState } from 'react';
import { env } from '../../lib/env';
import '../../styles/integratedmarketing.css';

export default function IntegratedMarketing() {
    const [deckEmail, setDeckEmail] = useState('');
    const [deckMessage, setDeckMessage] = useState(null);

    const handleDeckChange = (e) => {
        setDeckEmail(e.target.value);
    };

    const handleDeckSubmit = async (e) => {
        e.preventDefault();
        if (!deckEmail) {
            setDeckMessage('Please enter your email address.');
            return;
        }
        try {
            const GOOGLE_SCRIPT_URL = env.GOOGLE_SCRIPT_URL;
            if (!GOOGLE_SCRIPT_URL) {
                throw new Error('Google Apps Script URL not configured');
            }
            const params = new URLSearchParams();
            params.append('type', 'deck-request');
            const now = new Date();
            const istTime = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour12: false });
            params.append('timestamp', istTime);
            params.append('email', deckEmail);
            await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
                method: 'GET',
                mode: 'no-cors'
            });
            setDeckMessage('Request received! We will send you the deck soon.');
            setDeckEmail('');
            setTimeout(() => setDeckMessage(null), 5000);
        } catch (error) {
            console.error('Error submitting deck request:', error);
            setDeckMessage('Failed to submit request. Please try again.');
            setTimeout(() => setDeckMessage(null), 5000);
        }
    };

    return (
        <section className="integrated-marketing-section">
            <div className="integrated-marketing-container">
                <h2 className="integrated-marketing-heading">Integrated Marketing Solutions</h2>
                <p className="integrated-marketing-subheading">What We Do:</p>
                <p className="integrated-marketing-description">
                    Plan, execute, and measure campaigns that work seamlessly across offline and online channels.
                </p>

                <div className="integrated-marketing-tools">
                    <h3 className="integrated-marketing-tools-heading">Integrated Tools &amp; Services:</h3>
                    <div className="integrated-marketing-grid">
                        <div className="marketing-tool-card">
                            <div className="tool-icon-container">
                                <i className="fas fa-bullhorn tool-icon"></i>
                            </div>
                            <p>Unified Messaging &amp; Channel Strategy</p>
                        </div>
                        <div className="marketing-tool-card">
                            <div className="tool-icon-container">
                                <i className="fas fa-network-wired tool-icon"></i>
                            </div>
                            <p>Online-to-Offline Journey Mapping</p>
                        </div>
                        <div className="marketing-tool-card">
                            <div className="tool-icon-container">
                                <i className="fas fa-chart-line tool-icon"></i>
                            </div>
                            <p>Campaign Dashboards (Leads + Impressions)</p>
                        </div>
                        <div className="marketing-tool-card">
                            <div className="tool-icon-container">
                                <i className="fas fa-sync-alt tool-icon"></i>
                            </div>
                            <p>Hybrid Reports (Footfall vs Digital Traction)</p>
                        </div>
                    </div>
                </div>

                <div className="integrated-marketing-why">
                    <h4 className="integrated-marketing-why-heading">Why Brands Choose This:</h4>
                    <p className="integrated-marketing-why-text">
                        Because the <strong>most effective marketing today is not siloed</strong>—it’s orchestrated. We create harmony between media,
                        message, and measurement.
                    </p>
                </div>

                <div className="integrated-marketing-deck-request">
                    <p className="deck-request-title">
                        <i className="fas fa-envelope-open-text" style={{ color: '#e53e3e', marginRight: 8, fontSize: 20 }} aria-hidden="true"></i>
                        <span style={{ fontWeight: 600 }}>
                            Interested in our capabilities? <span style={{ color: '#e53e3e' }}>Get the Kaizen Company Deck</span>
                        </span>
                    </p>
                    {deckMessage && (
                        <div
                            style={{
                                padding: '12px 16px',
                                borderRadius: '6px',
                                backgroundColor: deckMessage.includes('Request received') ? '#4caf50' : '#f44336',
                                color: '#fff',
                                fontSize: '14px',
                                marginBottom: '12px',
                                textAlign: 'center',
                                fontWeight: '500',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                                maxWidth: 400,
                                width: '100%',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                display: 'block'
                            }}
                        >
                            {deckMessage}
                        </div>
                    )}
                    <form className="deck-request-form" onSubmit={handleDeckSubmit}>
                        <input
                            type="email"
                            className="deck-request-input"
                            placeholder="Enter your business email"
                            value={deckEmail}
                            onChange={handleDeckChange}
                            required
                        />
                        <button type="submit" className="deck-request-btn">Request Deck</button>
                    </form>
                </div>
            </div>
        </section>
    );
}