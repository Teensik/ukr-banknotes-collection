import React from 'react';

const Navigation = ({ currentTab, setCurrentTab }) => {
  return (
    <nav style={{ 
      padding: '10px', 
      backgroundColor: '#005BBB', 
      color: 'white',
      textAlign: 'center'
    }}>
      <h1 style={{ margin: '0 0 15px 0' }}>🏛️ Колекція банкнот України</h1>
      <div>
        <button 
          onClick={() => setCurrentTab('collection')}
          style={{
            padding: '8px 16px',
            margin: '0 5px',
            backgroundColor: currentTab === 'collection' ? '#FFD700' : 'transparent',
            color: currentTab === 'collection' ? '#005BBB' : 'white',
            border: '1px solid white',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Колекція
        </button>
        <button 
          onClick={() => setCurrentTab('about')}
          style={{
            padding: '8px 16px',
            margin: '0 5px',
            backgroundColor: currentTab === 'about' ? '#FFD700' : 'transparent',
            color: currentTab === 'about' ? '#005BBB' : 'white',
            border: '1px solid white',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Про автора
        </button>
      </div>
    </nav>
  );
};

export default Navigation;