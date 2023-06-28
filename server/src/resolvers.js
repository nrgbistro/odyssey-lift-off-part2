const resolvers = {
	Query: {
		// returns an array of Tracks that will be used to populate
		// the homepage grid of our web client
		tracksForHome: (_, __, contextValue, info) => {
			return dataSources.trackAPI.getTracksForHome();
		},
	},
	Track: {
		author: (parent, _, { dataSources }) => {
			return dataSources.trackAPI.getAuthor(parent.authorId);
		}
	}
};

module.exports = resolvers;
