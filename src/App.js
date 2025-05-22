import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import BanknoteCard from './components/BanknoteCard';
import About from './components/About';
import { banknotesAPI } from './services/api';

function App() {
  const [currentTab, setCurrentTab] = useState('collection');
  const [banknotes, setBanknotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBanknotes();
  }, []);

  const fetchBanknotes = async () => {
    try {
      setLoading(true);
      const response = await banknotesAPI.getAll();
      setBanknotes(response.data);
    } catch (err) {
      setError('Помилка завантаження даних');
      console.error('Error fetching banknotes:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
      
      <div className="main-content">
        {currentTab === 'collection' ? (
          <div>
            {loading && (
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <p>Завантаження...</p>
              </div>
            )}
            {error && (
              <div style={{ 
                textAlign: 'center', 
                padding: '20px', 
                color: 'red',
                backgroundColor: '#ffe6e6',
                margin: '20px',
                borderRadius: '8px'
              }}>
                <p>{error}</p>
                <button 
                  onClick={fetchBanknotes}
                  style={{
                    marginTop: '10px',
                    padding: '8px 16px',
                    backgroundColor: '#005BBB',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Спробувати знову
                </button>
              </div>
            )}
            {!loading && !error && (
              <div className="collection-grid">
                {banknotes.map(banknote => (
                  <BanknoteCard key={banknote.id} banknote={banknote} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <About />
        )}
      </div>
    </div>
  );
}

export default App;