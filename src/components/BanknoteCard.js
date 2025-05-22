import React from 'react';

const pluralizeUkrainian = (number, one, few, many) => {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return many;
  if (lastDigit === 1) return one;
  if (lastDigit >= 2 && lastDigit <= 4) return few;
  return many;
};

const BanknoteCard = ({ banknote }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      maxWidth: '350px'
    }}>
      <img 
        src={banknote.image} 
        alt={`${banknote.value} ${pluralizeUkrainian(banknote.value, 'гривня', 'гривні', 'гривень')}`}
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '4px',
          marginBottom: '10px'
        }}
      />
      <h3 style={{ 
        margin: '0 0 10px 0', 
        color: '#005BBB',
        fontSize: '1.3em'
      }}>
        {banknote.value} {pluralizeUkrainian(banknote.value, 'гривня', 'гривні', 'гривень')}
      </h3>
      <p style={{ margin: '5px 0', fontSize: '0.9em', color: '#666' }}>
        <strong>Рік випуску:</strong> {banknote.year}
      </p>
      <p style={{ margin: '5px 0', fontSize: '0.9em', color: '#666' }}>
        <strong>Колір:</strong> {banknote.color}
      </p>
      <p style={{ margin: '10px 0', lineHeight: '1.4' }}>
        {banknote.description}
      </p>
      <div style={{ 
        marginTop: '15px', 
        padding: '10px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '4px' 
      }}>
        <h4 style={{ margin: '0 0 8px 0', color: '#005BBB' }}>Історія:</h4>
        <p style={{ margin: '0', fontSize: '0.9em', lineHeight: '1.4' }}>
          {banknote.history}
        </p>
      </div>
    </div>
  );
};

export default BanknoteCard;
