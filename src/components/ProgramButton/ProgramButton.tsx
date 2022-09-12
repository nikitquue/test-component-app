import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

import { ProgramButtonProps } from "./types";
import { useStyles } from "./styles";

const ProgramButton: React.FC<ProgramButtonProps> = ({ programName }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  return (
    <Button
      variant="outlined"
      className={isMobile ? classes.rootMobileContainer : classes.rootContainer}
      endIcon={
        <AddIcon className={isMobile ? classes.mobileIcon : classes.icon} />
      }
    >
      <Typography variant="h3" color="#2622FF">
        {programName}
      </Typography>
    </Button>
  );
};

export default ProgramButton;
