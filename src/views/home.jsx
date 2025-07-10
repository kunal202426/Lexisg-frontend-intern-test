import { useState } from 'react';
import AskBox from '../blocks/askbox';
import Result from '../blocks/result';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [qa, setQa] = useState(null);

  const handleSend = (query) => {
  setLoading(true);
  setTimeout(() => {
    setQa({
      q: query,
      a: "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
      cite: {
        text: "PDF",
        name: "dani-vs-pritam.pdf",
        link: "/dani-vs-pritam.pdf"
      }
    });
    setLoading(false);
  }, 1000);
};


  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Scrollable content */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '30px 20px 120px',
        maxWidth: '800px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <h2 style={{ marginBottom: 20 }}>Lexi Legal Assistant</h2>
        {qa && <Result data={qa} />}
      </div>

      {/* Fixed AskBox */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        background: '#fff',
        borderTop: 'none',
        padding: '16px 20px'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <AskBox onSend={handleSend} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Home;
