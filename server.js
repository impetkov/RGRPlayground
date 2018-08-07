import express from 'express';
import ExpressGraphQL from 'express-graphql';
import { MongoClient } from 'mongodb';
import schema from './App/data/schemas';
import MONGODB_URL from './secret/mongoDbConnection';

const app = express();

app.use(express.static('App/public'));

const onListen = () => {
    console.log('Listening to port 1480');
};

let db = {};
const onGetMeds = (response) => {
    db.collection('meds').find({}).toArray((err, meds) => {
        if (err) {
            throw err;
        }

        response.json(meds);
    });
};

MongoClient.connect(MONGODB_URL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        throw error;
    }

    db = client.db('oovesmongodb');

    app.use('/graphql', ExpressGraphQL({
        schema: schema(db),
        graphiql: true
    }));

    app.listen(1480, onListen);
});

app.get('/data/meds', (_, response) => onGetMeds(response));
