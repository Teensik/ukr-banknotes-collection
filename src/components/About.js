import React from 'react';

const About = () => {
  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '600px', 
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      marginTop: '20px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img 
          src="/images/my_photo.jpg"
          alt="Фото автора"
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid #005BBB',
            marginBottom: '15px'
          }}
        />
        <h2 style={{ color: '#005BBB', margin: '0' }}>Про автора</h2>
      </div>
      
      <div style={{ lineHeight: '1.6', fontSize: '1.1em' }}>
        <p>
          Привіт! Мене звати Мамонт Владислав, я навчаюсь у КНТ-223.
          Я створив цей проєкт в рамках Єкзаменаційної роботи по дисципліні "Вебпрограмування".
        </p>

        <h2> Тема проєкту - Історія банкнот України </h2>
        
        <p>
          Моя мета - зберегти та поширити знання про українську валюту, її дизайн 
          та історичне значення. Кожна банкнота розповідає унікальну історію про 
          видатних особистостей та архітектурні пам'ятки України
        </p>
        
        <p>
            В цьому проєкті я намагавався показати різні банкноти. Від тих, які ми ще досі використовуємо
            до тих, які пам'ятають тільки наші батьки.
            Україна багата на банкноти в різні періоди. В моєму проєкті збережена тільки частина тих, які мене зацікавили
        </p>

        <p>Дякую за увагу!</p>
      </div>

      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#f0f8ff', 
        borderRadius: '6px',
        textAlign: 'center'
      }}>
        <p style={{ 
          margin: '0', 
          fontStyle: 'italic', 
          color: '#005BBB',
          fontSize: '0.95em'
        }}>
          "Гроші - це не тільки засіб обміну, але й відображення культури та історії народу"
        </p>
      </div>
    </div>
  );
};

export default About;