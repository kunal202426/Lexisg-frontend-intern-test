import { useState } from 'react';
import PdfPopup from './pdfpopup';

const Result = ({ data }) => {
  const { q, a, cite } = data;
  const [showPdf, setShowPdf] = useState(false);

  return (
    <>
      <div style={{ marginTop: '30px' }}>

        {/* PDF Upload Bubble */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
          <div
            onClick={() => setShowPdf(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#edf2ff',
              borderRadius: '20px',
              padding: '10px 14px',
              maxWidth: '80%',
              cursor: 'pointer',
              border: '1px solid #c7d2fe',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
              alt="PDF"
              style={{ width: '20px', height: '20px', marginRight: '10px' }}
            />
            <div>
              <div style={{ fontWeight: 500 }}>{cite.name}</div>
            </div>
          </div>
        </div>

        {/* User Question */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '12px' }}>
          <div style={{
            background: '#dcfce7',
            padding: '10px 14px',
            borderRadius: '18px',
            maxWidth: '80%',
            fontSize: '15px',
            lineHeight: 1.5,
            boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
          }}>
            {q}
          </div>
        </div>

        {/* AI Answer */}
        <div style={{
          background: '#f7f7f7',
          padding: '20px',
          borderRadius: '6px',
          fontSize: '16px',
          lineHeight: 1.6,
          border: '1px solid #ddd',
          maxWidth: '85%',
          marginBottom: '8px'
        }}>
          {a}
        </div>

        {/* Citation Text */}
        <div style={{ fontSize: '14px', color: '#444', marginTop: '6px', maxWidth: '85%' }}>
          <strong>Source:</strong>{' '}
          <em>“as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.”</em> (Para 7 of the document).{' '}
          <span
            onClick={() => setShowPdf(true)}
            style={{ color: '#2b5dff', cursor: 'pointer', textDecoration: 'underline', marginLeft: '4px' }}
          >
            View Source
          </span>
        </div>
      </div>

      <PdfPopup show={showPdf} onClose={() => setShowPdf(false)} file={cite.link} />
    </>
  );
};

export default Result;
