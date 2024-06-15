const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

app.use('/users', userRoutes);
app.use('/transactions', transactionRoutes);

app.get('/', (req, res) => {
  res.send('API de Gestão Financeira Pessoal');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
