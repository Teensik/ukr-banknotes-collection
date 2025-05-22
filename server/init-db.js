const pool = require('./config/database');

const initDatabase = async () => {
  try {
    // Створюємо таблицю
    await pool.query(`
      CREATE TABLE IF NOT EXISTS banknotes (
        id SERIAL PRIMARY KEY,
        value INTEGER NOT NULL,
        year INTEGER NOT NULL,
        color VARCHAR(50) NOT NULL,
        image VARCHAR(255),
        description TEXT NOT NULL,
        history TEXT NOT NULL
      )
    `);

    // Перевіряємо чи є дані
    const result = await pool.query('SELECT COUNT(*) FROM banknotes');
    
    if (result.rows[0].count === '0') {
      // Додаємо початкові дані
      const banknotes = [
          [1, 2014, 'Бежевий', '/images/hrivnya_2014.jpg', 'Банкнота номіналом 1 гривня зразка 2014 року', 'Введена в обіг у 2014 році після деномінації української валюти. На лицьовій стороні зображено князя Володимира Великого'],
          [2, 2019, 'Cірий', '/images/2hrivni_2019.jpeg', 'Банкнота номіналом 2 гривні зразка 2019 року', 'Випущена в 2019 році. На банкноті зображено князя Ярослава Мудрого та Софійський собор у Києві'],
          [5, 2015, 'Чорний', '/images/5hriven_2015.jpg', 'Банкнота номіналом 5 гривень зразка 2015 року на день захисника України', 'Оновлена версія 2015 року. На аверсі монети на тлі орнаменту розміщено: постать Пресвятої Богородиці, під омофором якої козаки (ліворуч) та сучасні воїни-захисники (праворуч)'],
          [10, 2019, 'Cірий', '/images/10hriven_2019.jpg', 'Банкнота номіналом 10 гривень зразка 2019 року', 'Банкнота "На варті життя" була створена у 2019 році та посвячена війсковим медикам'],
          [20, 2021, 'Cірий', '/images/20hriven_2021.jpeg', 'Банкнота номіналом 20 гривень зразка 2021 року', 'Банкнота присвячена пам’яті про Лесю Українку та введена у 2021 році'],
          [50, 1999, 'Золотий', '/images/50hriven_1999.jpeg', 'Банкнота номіналом 50 гривень зразка 1999 року', 'Пам’ятна золота монета, випущена в 1999, присвячена народженню Ісуса Христа']
        ];

      for (const banknote of banknotes) {
        await pool.query(
          'INSERT INTO banknotes (value, year, color, image, description, history) VALUES ($1, $2, $3, $4, $5, $6)',
          banknote
        );
      }
      console.log('✅ База даних ініціалізована з тестовими даними');
    } else {
      console.log('✅ База даних вже містить дані');
    }
  } catch (err) {
    console.error('❌ Помилка ініціалізації бази даних:', err);
  } finally {
    pool.end();
  }
};

initDatabase();