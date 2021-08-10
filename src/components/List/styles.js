import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(3),
		minWidth: 120,
		marginBottom: "30px",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	loading: {
		height: "600px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		height: "100vh",
		background: "#f4f4f4",
		margin: "auto",
		width: "95%",
		padding: "20px",
		boxShadow: "0 5px 10px rgba(0,0,0,0.3)",
	},

	text: {
		fontSize: "21px",
	},
	list: {
		height: "80vh",
		overflow: "auto",
	},
}));
