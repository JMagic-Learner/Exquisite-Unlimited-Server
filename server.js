const { ApolloServer, gql } = require('apollo-server');
require('dotenv').config();
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const {
    ApolloServerPluginLandingPageLocalDefault
  } = require('apollo-server-core');


  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    /**
     * What's up with this embed: true option?
     * These are our recommended settings for using AS;
     * they aren't the defaults in AS3 for backwards-compatibility reasons but
     * will be the defaults in AS4. For production environments, use
     * ApolloServerPluginLandingPageProductionDefault instead.
    **/
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });


      db.once('open', () => {
        server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
          console.log(`
            🚀  Server is ready at ${url}
            📭  Query at https://studio.apollographql.com/dev
          `);
        });
  });
 

