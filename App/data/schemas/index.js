import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql';

const Schema = (db) => {
    const medType = new GraphQLObjectType({
        name: 'MedType',
        fields: () => ({
            _id: { type: GraphQLString },
            name: { type: GraphQLString },
            description: { type: GraphQLString },
            expidationDate: { type: GraphQLString },
            tags: { type: GraphQLList(GraphQLString) }
        })
    });
    const MedsQuery = {
        name: 'MedsQuery',
        fields: () => ({
            meds: {
                type: new GraphQLList(medType),
                resolve: () => db.collection('meds').find({}).toArray()
            }
        })
    };

    const graphSchema = new GraphQLSchema({
        query: new GraphQLObjectType(MedsQuery)
    });

    return graphSchema;
};
export default Schema;