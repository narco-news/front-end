export const state = () => ({
	geojson: {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [-100.83970919251442, 20.54082290446217]
				},
				properties: {
					color: '#F26457',
					title: 'Female with cartulina',
					date: '15/09/2020',
					muni: 'San Juanico, Celaya',
					desc: 'Punisher logo, CSRL and triangle, similar handwriting',
					links: [
						'https://celayanews.com/seguridad/encuentran-cuerpo-decapitado-en-san-juanico-celaya-durante-la-madrugada/'
					]
				}
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [-100.99357008934021, 20.17595718444703]
				},
				properties: {
					color: '#F26457',
					title: 'Male with cartulina',
					date: '26/08/2020',
					muni: 'Santiago Maravatío',
					desc: '',
					links: [
						'https://puntocero.news/2020/08/26/localizan-a-ejecutado-en-santiago-maravatio/'
					]
				}
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [-100.56145548820494, 20.512670653111872]
				},
				properties: {
					color: '#F26457',
					title: 'Male with cartulina',
					date: '24/08/2020',
					muni: 'Marroquín',
					desc: '',
					links: [
						'https://www.am.com.mx/guanajuato/noticias/Desmembrado-y-dentro-de-una-maleta-encuentran-a-hombre-en-Celaya-20200825-0024.html',
						'https://www.facebook.com/permalink.php?story_fbid=1451018655104502&id=425140334359011'
					]
				}
			}
		]
	}
});
