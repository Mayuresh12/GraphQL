const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
    type Query{
        greeting: String
    }
`;

const resolvers = {
    Query: {
        greeting: () => 'Hello Mayuresh to the world of GraphQL'
    }
};

const server = new ApolloServer({typeDefs, resolvers});
server.listen({port: 9000}).then(({url}) => console.log(` Server running at ${url}`))

