import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  detailsContainer: {
    display: "flex",
    padding: "34px 0px 31px 28px",
  },
  detailsMobileContainer: {
    padding: "10px",
  },
  detailsLine: {
    display: "flex",
    "& svg": {
      marginRight: "4px",
    },
  },
  detailsText: {
    marginBottom: "8px",
  },
  marginIcon: {
    marginRight: "35px",
  },
  accordionSummary: {
    padding: "0px 31px 0px 31px",
    margin: "0px 0px 8px 0px",
  },
  accordionMobileSummary: {
    padding: "0px 5px 0px 5px",
    margin: "0px 0px 0px 0px",
  },
  hoverContainer: {
    transition: "200ms",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#ECFFFF",
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
  cardContainer: {
    width: "83%",
    maxWidth: "550px",
    margin: "0 auto",
  },
});
