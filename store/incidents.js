export const state = () => ({
	list: {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				properties: {
					'marker-color': '#ee1919',
					'marker-size': 'medium',
					'marker-symbol': 'police'
				},
				geometry: {
					type: 'Point',
					coordinates: [-101.18408203124999, 20.679044609010408]
				}
			}
		]
	}
});
