import React from 'react';
import '../../styles/integratedmarketing.css';

export default function IntegratedMarketing() {
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
            </div>
        </section>
    );
}