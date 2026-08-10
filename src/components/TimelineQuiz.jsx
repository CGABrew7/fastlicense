import { useState } from 'react';
import data from '../data/licenses.json';

export default function TimelineQuiz() {
  const [licenseType, setLicenseType] = useState('');
  const [state, setState] = useState('');
  const [urgency, setUrgency] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const license = data.types.find(t => t.id === licenseType);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (licenseType && state && urgency) setShowResult(true);
  };

  const handleLead = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const timeline = license ? (urgency === 'asap' ? license.fast : license.standard) : '';

  return (
    <div className="quiz-wrap" id="quiz">
      <div className="quiz-card">
        <h3>Get Your Timeline</h3>
        <p className="quiz-sub">Answer 3 questions. See how fast you can be licensed.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>1. What license do you need?</label>
            <select value={licenseType} onChange={e => { setLicenseType(e.target.value); setShowResult(false); }}>
              <option value="">Choose a license type...</option>
              {data.types.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label>2. Which state?</label>
            <select value={state} onChange={e => { setState(e.target.value); setShowResult(false); }}>
              <option value="">Choose your state...</option>
              {data.states.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label>3. How soon do you need it?</label>
            <select value={urgency} onChange={e => { setUrgency(e.target.value); setShowResult(false); }}>
              <option value="">Select urgency...</option>
              <option value="asap">ASAP — I need this fast</option>
              <option value="30">Within 30 days</option>
              <option value="60">Within 60 days</option>
              <option value="standard">No rush — standard processing</option>
            </select>
          </div>

          <button type="submit" className="btn">See My Timeline</button>
        </form>

        {showResult && license && (
          <div className="timeline-result">
            <div className="timeline-big">{timeline}</div>
            <div className="timeline-label">
              Estimated processing time for {license.name} in {state}
            </div>

            <div className="timeline-details">
              <div className="td-item">
                <div className="td-label">Fast-Track Timeline</div>
                <div className="td-value">{license.fast}</div>
              </div>
              <div className="td-item">
                <div className="td-label">Standard Timeline</div>
                <div className="td-value">{license.standard}</div>
              </div>
              <div className="td-item">
                <div className="td-label">Estimated Cost</div>
                <div className="td-value">{license.cost}</div>
              </div>
              <div className="td-item">
                <div className="td-label">Gov. Filing Fees</div>
                <div className="td-value">{license.govFee}</div>
              </div>
            </div>

            {license.bond && (
              <div style={{ background: 'rgba(245,158,11,0.1)', borderRadius: '8px', padding: '12px', marginTop: '12px', fontSize: '0.85rem', color: '#FCD34D' }}>
                This license requires a surety bond. We handle bond procurement as part of your application.
              </div>
            )}

            {!showForm ? (
              <button
                onClick={() => setShowForm(true)}
                className="btn"
                style={{ marginTop: '20px', background: '#F59E0B', color: '#1B2A4A' }}
              >
                Start My Fast-Track Application
              </button>
            ) : !submitted ? (
              <form onSubmit={handleLead} style={{ marginTop: '24px', textAlign: 'left' }}>
                <div className="form-group">
                  <label style={{ color: '#94A3B8' }}>Your name</label>
                  <input type="text" placeholder="Full name" required style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }} />
                </div>
                <div className="form-group">
                  <label style={{ color: '#94A3B8' }}>Email</label>
                  <input type="email" placeholder="you@company.com" required style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }} />
                </div>
                <div className="form-group">
                  <label style={{ color: '#94A3B8' }}>Phone (optional)</label>
                  <input type="tel" placeholder="(555) 123-4567" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }} />
                </div>
                <button type="submit" className="btn" style={{ background: '#F59E0B', color: '#1B2A4A' }}>
                  Submit Application
                </button>
                <p style={{ fontSize: '0.78rem', color: '#64748B', textAlign: 'center', marginTop: '8px' }}>
                  A licensing specialist will contact you within 1 business day.
                </p>
              </form>
            ) : (
              <div style={{ padding: '28px 0 8px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#F59E0B', marginBottom: '8px' }}>Application submitted</div>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                  A licensing specialist will reach out within 1 business day with your detailed timeline and next steps.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
