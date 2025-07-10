import { useState } from 'react';

const AskBox = ({ onSend, loading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSend(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows={3}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type your legal question..."
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          resize: 'none',
          marginBottom: '10px'
        }}
      />
      <div style={{ textAlign: 'right' }}>
        <button
          type="submit"
          disabled={loading}
          style={{
            background: '#2b5dff',
            color: '#fff',
            border: 'none',
            padding: '10px 18px',
            fontSize: '16px',
            borderRadius: '5px',
            cursor: 'pointer',
            opacity: loading ? 0.6 : 1
          }}
        >
          {loading ? 'Processing...' : 'Ask'}
        </button>
      </div>
    </form>
  );
};

export default AskBox;
