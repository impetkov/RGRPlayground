import express from 'express';

const app = express();

app.use(express.static('App/public'));

app.listen(1480);
