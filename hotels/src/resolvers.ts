export const resolvers = {
  Query: {
    hotels: async (obj: undefined, args: undefined, context: any) => {
      const { dataSources } = context;

      return dataSources.hotelsApi.getHotels();
    },
  },
};
