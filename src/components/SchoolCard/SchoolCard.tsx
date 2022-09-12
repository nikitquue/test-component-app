import React from "react";
import {
  useTheme,
  useMediaQuery,
  Grid,
  Box,
  Divider,
  Card,
  Chip,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardContent from "@mui/material/CardContent";
import { v4 as uuidv4 } from "uuid";

import { ReactComponent as GradesIcon } from "../../assets/icons/education.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg";
import { ReactComponent as DistanceIcon } from "../../assets/icons/distance.svg";
import { ReactComponent as ChipIcon } from "../../assets/icons/star-filled.svg";
import { SchoolCardProps } from "./types";
import { useStyles } from "./styles";
import { ProgramButton } from "../ProgramButton";

const SchoolCard: React.FC<SchoolCardProps> = ({
  schoolName,
  distance,
  address,
  totalStudents,
  grades,
  programs,
  image,
  location,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  return (
    <Grid item xs={isMobile ? 4 : 12}>
      <Card className={classes.cardContainer}>
        <CardContent sx={{ padding: "0px !important" }}>
          <Box
            className={classes.hoverContainer}
            onClick={() => (window.location.href = "https://www.google.com")}
          >
            <Box
              className={
                isMobile
                  ? classes.detailsMobileContainer
                  : classes.detailsContainer
              }
            >
              <Box
                component={"img"}
                sx={{ marginRight: "24px" }}
                width={isMobile ? "100%" : "inherit"}
                alt="School image"
                src={image}
              />
              <Box>
                <Typography
                  variant="h2"
                  sx={
                    location
                      ? { marginBottom: "11px" }
                      : { marginBottom: "16px" }
                  }
                >
                  {schoolName}
                </Typography>
                {location && (
                  <Chip
                    icon={
                      <ChipIcon
                        className={isMobile ? classes.mobileIcon : classes.icon}
                      />
                    }
                    className={isMobile ? classes.chipMobile : classes.chip}
                    label={location}
                  />
                )}
                {grades && (
                  <Box className={classes.detailsLine}>
                    <GradesIcon
                      className={isMobile ? classes.mobileIcon : classes.icon}
                    />
                    <Typography variant="h4" className={classes.detailsText}>
                      {grades}
                    </Typography>
                  </Box>
                )}
                {totalStudents && (
                  <Box className={classes.detailsLine}>
                    <PersonIcon
                      className={isMobile ? classes.mobileIcon : classes.icon}
                    />
                    <Typography variant="h4" className={classes.detailsText}>
                      {totalStudents}
                    </Typography>
                  </Box>
                )}
                {address && (
                  <Box className={classes.detailsLine}>
                    <LocationIcon
                      className={isMobile ? classes.mobileIcon : classes.icon}
                    />
                    <Typography variant="h4" className={classes.detailsText}>
                      {address}
                    </Typography>
                  </Box>
                )}
                {distance && (
                  <Box className={classes.detailsLine}>
                    <DistanceIcon
                      className={isMobile ? classes.mobileIcon : classes.icon}
                    />
                    <Typography variant="h4" className={classes.detailsText}>
                      {distance}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
          <Box sx={{}}>
            <Divider />
            <Accordion className={classes.hoverContainer} sx={{}} elevation={0}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={isMobile ? classes.mobileIcon : classes.icon}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={
                  isMobile
                    ? classes.accordionMobileSummary
                    : classes.accordionSummary
                }
              >
                <Typography variant="h3">Programs Offered</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: 0, margin: 0 }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {programs.map((program) => (
                    <ProgramButton programName={program} key={uuidv4()} />
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SchoolCard;
