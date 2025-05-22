const express = require('express');
const router = express.Router();
const Banknote = require('../models/Banknote');

// Отримати всі банкноти
router.get('/', async (req, res) => {
  try {
    const banknotes = await Banknote.getAll();
    res.json(banknotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Отримати банкноту за ID
router.get('/:id', async (req, res) => {
  try {
    const banknote = await Banknote.getById(req.params.id);
    if (!banknote) {
      return res.status(404).json({ error: 'Банкноту не знайдено' });
    }
    res.json(banknote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Створити нову банкноту
router.post('/', async (req, res) => {
  try {
    const banknote = await Banknote.create(req.body);
    res.status(201).json(banknote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;