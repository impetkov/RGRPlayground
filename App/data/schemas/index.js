import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql';

const schema = (db) => {
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

    // const SimpleMutation = {
    //     name: 'SimpleMutation',
    //     fields: () => ({
    //         incrementCounter: {
    //             type: GraphQLInt,
    //             resolve: () => {
    //                 fortyTwo += 1;
    //                 return fortyTwo;
    //             }
    //         }
    //     })
    // };

    const graphSchema = new GraphQLSchema({
        query: new GraphQLObjectType(MedsQuery)
        // mutation: new GraphQLObjectType(SimpleMutation)
    });

    return graphSchema;
};
export default schema;