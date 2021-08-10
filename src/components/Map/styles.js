import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	paper: {
		padding: "10px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",

		width: "100px",
	},
	mapContainer: {
		margin: "auto",
		width: "97%",
		height: "100vh",
		boxShadow: "0 5px 10px rgba(0,0,0,0.3)",
	},
	markerContainer: {
		position: "absolute",
		transform: "translate(-50%, -50%)",
		zIndex: 1,
		"&:hover": { zIndex: 3 },
	},
	pointer: {
		cursor: "pointer",
	},
}));
