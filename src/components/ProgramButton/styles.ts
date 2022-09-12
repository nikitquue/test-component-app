import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  rootMobileContainer: {
    padding: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textTransform: "none",
    borderColor: "#E0E0E0",
    margin: "0px 10px 5px 10px",
    borderRadius: "8px",
    "&:last-of-type": {
      marginBottom: "10px",
    },
  },
  rootContainer: {
    padding: "13px 15px 20px 13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textTransform: "none",
    borderColor: "#E0E0E0",
    margin: "0px 23px 10px 23px",
    borderRadius: "8px",
    "&:last-of-type": {
      marginBottom: "26px",
    },
  },
  icon: {
    color: "#2622FF",
  },
  mobileIcon: {
    height: "15px",
    width: "auto",
    color: "#2622FF",
  },
});
