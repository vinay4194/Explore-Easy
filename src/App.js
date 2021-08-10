import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import { getPlacesData } from "./api";

function App() {
	const [type, setType] = useState("resturants");
	const [rating, setRating] = useState("");
	const [places, setPlaces] = useState([]);
	const [filteredPlaces, setFilteredPlaces] = useState([]);
	const [coordinates, setCoordinates] = useState({});
	const [bounds, setBounds] = useState({});
	const [childClicked, setChildClicked] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	//get user's geolocation from browser
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
			setCoordinates({ lat: latitude, lng: longitude });
		});
	}, []);

	useEffect(() => {
		const filteredPlaces = places.filter((place) => place.rating > rating);
		setFilteredPlaces(filteredPlaces);
	}, [rating]);

	//get data for the location on the map
	useEffect(() => {
		if (bounds.sw && bounds.ne) {
			setIsLoading(true);
			getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
				setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
				setFilteredPlaces([]);
				setIsLoading(false);
			});
		}
	}, [type, bounds]);

	return (
		<>
			<CssBaseline />
			<Header setCoordinates={setCoordinates} setType={setType} />
			<Grid container style={{ width: "100%" }} alignItems="center">
				<Grid item xs={12} md={4} alignContent="center">
					<List
						places={filteredPlaces.length ? filteredPlaces : places}
						childClicked={childClicked}
						isLoading={isLoading}
						type={type}
						setType={setType}
						rating={rating}
						setRating={setRating}
					/>
				</Grid>
				<Grid item xs={12} md={8} alignContent="center">
					<Map
						setCoordinates={setCoordinates}
						setBounds={setBounds}
						coordinates={coordinates}
						places={filteredPlaces.length ? filteredPlaces : places}
						setChildClicked={setChildClicked}
					/>
				</Grid>
			</Grid>
		</>
	);
}

export default App;
