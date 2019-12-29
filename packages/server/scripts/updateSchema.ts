import { makeExecutableSchema } from 'apollo-server-express';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { printSchema } from 'graphql';

import { typeDefs } from '../src/typeDefs';

const schema = makeExecutableSchema({
  typeDefs,
});

const path = resolve('schema.graphql');
writeFileSync(path, printSchema(schema));
