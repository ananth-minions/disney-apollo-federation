import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server';

import {
  ATTRACTIONS_SERVICE,
  DINING_SERVICE,
  HOTELS_SERVICE,
  PARKS_SERVICE,
} from './config';

const startServer = async () => {
  const gateway = new ApolloGateway({
    debug: true,
    serviceList: [
      { name: 'attractions', url: ATTRACTIONS_SERVICE },
      { name: 'dining', url: DINING_SERVICE },
      { name: 'hotels', url: HOTELS_SERVICE },
      { name: 'parks', url: PARKS_SERVICE },
    ],
  });

  const { schema, executor } = await gateway.load();

  const server = new ApolloServer({ schema, executor } as any);

  server.listen({ port: 3000 }).then(({ url }: { url: string }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

startServer().catch((error: Error) => {
  console.error(`Unable to start gateway: ${error.message}`);

  process.exit(1);
});
