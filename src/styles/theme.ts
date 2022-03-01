import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = responsiveFontSizes(
  createTheme({
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            '@media (min-width: 600px)': {
              paddingLeft: '4%',
              paddingRight: '4%',
            },
          },
        },
      },
    },
  })
)

export default theme
