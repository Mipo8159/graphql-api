import { graphqlHTTP } from 'express-graphql';
import { schema } from './../schema';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

export default app;
