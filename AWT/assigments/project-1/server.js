const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// GET all quotes
app.get('/api/quotes', async (req, res) => {
  const quotes = await prisma.quote.findMany();
  res.json(quotes);
});

// POST a new quote
app.post('/api/quotes', async (req, res) => {
  const { text } = req.body;
  const newQuote = await prisma.quote.create({ data: { text } });
  res.status(201).json(newQuote);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
