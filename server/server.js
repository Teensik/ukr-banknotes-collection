const express = require('express');
const cors = require('cors');
const banknotesRoutes = require('./routes/banknotes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/banknotes', banknotesRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server працює!' });
});

app.listen(PORT, () => {
  console.log(`Server запущено на порту ${PORT}`);
});