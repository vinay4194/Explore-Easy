import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	logo: {
		display: "block",
		fontFamily: "Salsa, cursive",
		fontSize: "35px",
		// color: "#00b3a6",
		marginBottom: "0",
		[theme.breakpoints.up("sm")]: {
			display: "block",
			fontSize: "40px",
		},
	},

	title: {
		display: "block",
	},
	appBar: {
		marginBottom: "20px",
		boxShadow: "0 5px 10px rgba(0,0,0,0.4)",
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.3),
		"&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.4) },
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		height: "50px",
		[theme.breakpoints.up("sm")]: { marginLeft: theme.spacing(3), width: "auto" },
		display: "flex",
		alignItems: "center",
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: { width: "30ch" },
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-around",
		background: "url(../../images/bg2.jpg)",
		backgroundSize: "cover",

		backgroundPosition: "center",
		display: "flex",
		flexDirection: "column",
		padding: "20px",
	},
	searchBar: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		gap: "7px",
		flexDirection: "column",
		padding: "25px",
		width: "100%",
	},
	btnContainer: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	button: {
		padding: "7px 15px",
		outline: "none",
		margin: "10px",
		border: "none",
		borderRadius: "3px",
		fontWeight: "600",
		color: "#222",
		fontSize: "14px",
		cursor: "pointer",
		backgroundColor: alpha(theme.palette.common.white, 0.8),
		transition: ".2s all ease-in-out",
		"&:hover": {
			color: "#fff",
			backgroundColor: alpha(theme.palette.common.white, 0.5),
		},
	},
}));
