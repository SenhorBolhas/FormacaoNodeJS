const express = require('express');

const app = express();

app.listen(3000, () => console.log('servidor rodando na porta 3000'))

app.get('/', (req, res) => res.send('Rota /'))
app.get('/atendimentos', (req, res) => res.send('Rota /atendimentos'))