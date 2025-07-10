const PdfPopup = ({ show, onClose, file }) => {
  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999
    }}>
      <div style={{
        position: 'relative',
        width: '80%',
        height: '80%',
        backgroundColor: '#fff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 0 15px rgba(0,0,0,0.3)'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 10,
            right: 12,
            background: 'transparent',
            fontSize: '22px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          ×
        </button>

        {/* PDF Viewer */}
        <iframe
          src={file}
          title="PDF Viewer"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />

        {/* Fake Scroll Highlight */}
        <div style={{
          position: 'absolute',
          bottom: 12,
          left: 16,
          background: '#ffe58f',
          padding: '8px 12px',
          borderRadius: '4px',
          fontSize: '14px'
        }}>
          🔍 Simulated scroll to: <strong>Paragraph 7</strong>
        </div>
      </div>
    </div>
  );
};

export default PdfPopup;
