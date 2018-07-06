module.exports = {
	geocoding: {
		version: '0.2',
		attribution: 'http://pelias.mapzen.com/v1/attribution',
		query: {
			text: 'kamppi',
			size: 1,
			private: false,
			lang: 'fi',
			querySize: 20,
			parser: 'addressit',
			parsed_text: -{
				neighbourhood: 'kamppi',
				name: 'kamppi'
			}
		},
		engine: {
			name: 'Pelias',
			author: 'Mapzen',
			version: '1.0'
		},
		timestamp: 1530821645370
	},
	type: 'FeatureCollection',
	features: [
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [
					24.93119,
					60.16887
				]
			},
			properties: {
				id: 'GTFS:HSL:1040281#1251',
				gid: 'gtfshsl:stop:GTFS:HSL:1040281#1251',
				layer: 'stop',
				source: 'gtfshsl',
				source_id: 'gtfs:hsl:1040281#1251',
				name: 'Kamppi 1251',
				postalcode: '00100',
				postalcode_gid: 'whosonfirst:postalcode:421479569',
				confidence: 1,
				accuracy: 'centroid',
				country: 'Suomi',
				country_gid: 'whosonfirst:country:85633143',
				country_a: 'FIN',
				region: 'Uusimaa',
				region_gid: 'whosonfirst:region:85683067',
				localadmin: 'Helsinki',
				localadmin_gid: 'whosonfirst:localadmin:907199715',
				locality: 'Helsinki',
				locality_gid: 'whosonfirst:locality:101748417',
				neighbourhood: 'Kamppi',
				neighbourhood_gid: 'whosonfirst:neighbourhood:85898845',
				label: 'Kamppi 1251, Kamppi, Helsinki'
			}
		}
	],
	bbox: [
		24.93119,
		60.16887,
		24.93119,
		60.16887
	]
};
