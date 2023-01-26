import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: "Frutiger",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `  
          @font-face {
            font-family: 'Frutiger';
            font-style: normal;
            font-weight: normal;
            src: url(/fonts/Frutiger.woff);
          }          
      
          @font-face {
            font-family: 'Frutiger Bold';
            font-style: normal;
            font-weight: normal;
            src: url(/fonts/Frutiger_bold.woff);
          }        
        `,
      },
    },
    palette: {
      primary: {
        main: "#556cd6",
      },
      secondary: {
        main: "rgba(255,0,0,1)",
      },
      error: {
        main: red.A400,
      },
    },
  })
);

export default theme;
