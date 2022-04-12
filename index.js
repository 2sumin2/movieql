import { createServer } from '@graphql-yoga/node';
import resolvers from './graphql/resolvers.js';

// Create your server
const server = createServer({
    schema: {
        typeDefs:
            `type Movie {
                id:Int!,
                title:String!,
                rating: Float!,
                summary :String,
                language: String,
                medium_cover_image:String!
            } 
            type Query {
                movies(limit:Int, rating:Float): [Movie]!
            }`,
        resolvers
    }

});
// start the server and explore http://localhost:4000/graphql
server.start(); 