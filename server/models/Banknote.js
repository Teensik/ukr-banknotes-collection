const pool = require('../config/database');

class Banknote {
  static async getAll() {
    const result = await pool.query('SELECT * FROM banknotes ORDER BY value');
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query('SELECT * FROM banknotes WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(banknote) {
    const { value, year, color, image, description, history } = banknote;
    const result = await pool.query(
      'INSERT INTO banknotes (value, year, color, image, description, history) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [value, year, color, image, description, history]
    );
    return result.rows[0];
  }
}

module.exports = Banknote;