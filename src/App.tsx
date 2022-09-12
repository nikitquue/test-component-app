import React from "react";
import { Grid } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";

import { SchoolCard } from "./components/SchoolCard";
import SchoolImg from "./assets/images/school.png";

const defaultTheme = createTheme({});
const { breakpoints } = defaultTheme;

const theme = createTheme({
  ...defaultTheme,
  typography: {
    h2: {
      fontSize: "1.5em",
      fontWeight: 700,
      color: "#052B52",
      [breakpoints.down("sm")]: {
        fontSize: "0.8em",
      },
    },
    h3: {
      fontSize: "1.125em",
      fontWeight: 700,
      color: "#052B52",
      [breakpoints.down("sm")]: {
        fontSize: "0.6em",
      },
    },
    h4: {
      fontSize: "0.75em",
      color: "#032B52",
      fontWeight: 400,
      [breakpoints.down("sm")]: {
        fontSize: "0.5em",
      },
    },
    fontFamily: ["IBM Plex Sans", "sans-serif"].join(","),
  },
});

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <Grid container columnSpacing={1} rowSpacing={6} alignSelf="center">
            <SchoolCard
              image={SchoolImg}
              schoolName="School Name"
              distance="2"
              address="Address"
              totalStudents={30}
              grades="Grades"
              programs={[
                "Program name",
                "Program name",
                "Program name",
                "Program name",
              ]}
            />
            <SchoolCard
              image={SchoolImg}
              schoolName="School Name"
              distance="2"
              totalStudents={30}
              grades="Grades"
              programs={[
                "Program name",
                "Program name",
                "Program name",
                "Program name",
              ]}
            />
            <SchoolCard
              image={SchoolImg}
              schoolName="School Name"
              distance="2"
              address="Address"
              totalStudents={30}
              grades="Grades"
              programs={[
                "Program name",
                "Program name",
                "Program name",
                "Program name",
              ]}
            />
            <SchoolCard
              image={SchoolImg}
              schoolName="School Name"
              distance="2"
              address="Address"
              totalStudents={30}
              grades="Grades"
              programs={[
                "Program name",
                "Program name",
                "Program name",
                "Program name",
              ]}
            />
          </Grid>
        </StyledEngineProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
