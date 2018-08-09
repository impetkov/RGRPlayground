import express from 'express';
import ExpressGraphQL from 'express-graphql';
import { MongoClient } from 'mongodb';
import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';
import fs from 'fs';
import Schema from './App/data/schemas';
import MONGODB_URL from './secret/mongoDbConnection';

const app = express();

app.use(express.static('App/public'));

const onListen = () => {
    console.log('Listening to port 1480');
};

(async () => {
    const client = await MongoClient.connect(MONGODB_URL, { useNewUrlParser: true });

    const db = client.db('oovesmongodb');
    const schema = Schema(db);
    app.use('/graphql', ExpressGraphQL({
        schema,
        graphiql: true
    }));

    app.listen(1480, onListen);

    // const schemaJson = await graphql(schema, introspectionQuery);
    // fs.writeFile('./App/data/schemas/schema.json', JSON.stringify(schemaJson), (error) => {
    //     if (error) {
    //         throw error;
    //     }

    //     console.log('schema Json created');
    // });
})();