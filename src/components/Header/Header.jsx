import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

const Header = ({ setCoordinates, setType }) => {
	const classes = useStyles();
	const [autoComplete, setAutoComplete] = useState(null);

	const onLoad = (autoC) => setAutoComplete(autoC);
	const onPlaceChanged = () => {
		const lat = autoComplete.getPlace().geometry.location.lat();
		const lng = autoComplete.getPlace().geometry.location.lng();
		setCoordinates({ lat, lng });
	};

	const changeType = (e) => {
		setType(e.target.value);
	};

	return (
		<AppBar position="static" className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Typography variant="h5" className={classes.logo}>
					Explore Easy
				</Typography>
				<Box className={classes.searchBar}>
					<Typography variant="h5">Explore new places</Typography>
					<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase placeholder="Search 100's of cities" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
						</div>
					</Autocomplete>
				</Box>
				<div className={classes.btnContainer}>
					<button
						className={classes.button}
						value="hotels"
						onClick={(e) => {
							changeType(e);
						}}
					>
						Hotels
					</button>
					<button
						className={classes.button}
						value="restaurants"
						onClick={(e) => {
							changeType(e);
						}}
					>
						Restaurants
					</button>
					<button
						className={classes.button}
						value="attractions"
						onClick={(e) => {
							changeType(e);
						}}
					>
						Attractions
					</button>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
