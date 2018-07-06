export const getStopsQuery = (lat: number, long: number, cursor?: (object | null)) => {
	const queryCursor = cursor ? `${Object.keys(cursor)[0]}:"${Object.values(cursor)[0]}"` : '';
	return {
		query: `
		  {
		  stopsByRadius(${queryCursor}, first: 15, lat:${lat}, lon:${long}, radius: 500) {
			edges {
			  node {
				stop {
				gtfsId
				name
				desc
				}
			  distance
			}
		  }
		  pageInfo {
		  hasNextPage
		  hasPreviousPage
		  startCursor
		  endCursor
		}
		}
		}
	 }`,
	};
};
