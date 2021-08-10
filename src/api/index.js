import axios from "axios";

// const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// const options = {
// 	params: {
// 		bl_latitude: "11.847676",
// 		tr_latitude: "12.838442",
// 		bl_longitude: "109.095887",
// 		tr_longitude: "109.149359",
// 	},
// 	headers: {
// 		"x-rapidapi-key": "338326bf77msheb219c9a236b1aep1e553ejsn650084546ed2",
// 		"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
// 	},
// };

export const getPlacesData = async (type, sw, ne) => {
	try {
		const {
			data: { data },
		} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
			params: {
				bl_latitude: sw.lat,
				tr_latitude: ne.lat,
				bl_longitude: sw.lng,
				tr_longitude: ne.lng,
			},
			headers: {
				"x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
				"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
			},
		});
		return data;
	} catch (error) {
		console.log(error);
	}
};
