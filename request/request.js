// API

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dcf08ca77fmsh6a0600835c3ddc4p1626acjsn3b542c621a3a',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};


// FETCH
export const fetchAPI = async (url) => {
  try {
  	const response = await fetch(url, options);
  	const result = await response.json();
  	
  	return result;
  } catch (error) {
  	console.error(error);
  }  
}