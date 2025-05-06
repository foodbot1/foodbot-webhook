const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Servidor do FoodBot Webhook ativo!');
});

app.post('/webhook', (req, res) => {
  console.log('🔔 Notificação recebida do Mercado Pago:');
  console.log(JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`✅ Servidor iniciado na porta ${PORT}`);
});
