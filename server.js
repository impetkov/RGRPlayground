import express from 'express';

const app = express();

//app.get('/', (_, res) => res.send('Hello fe!'));

app.use(express.static('public'));

app.listen(1480);
