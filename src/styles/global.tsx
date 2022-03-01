import GlobalStyles from '@mui/material/GlobalStyles'

export const Global = () => (
  <GlobalStyles
    styles={{
      '*': {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
      },

      '*, input, button': {
        fontFamily: "'Roboto', sans-serif",
      },

      'body, html': {
        scrollBehavior: 'smooth',
        color: '#171a20',
        WebkitFontSmoothing: 'antialiased',
        height: '100%',
        'scroll-behavior': 'smooth',
      },

      li: {
        listStyleType: 'none',
      },

      'a, a:visited': {
        color: 'inherit',
        textDecoration: 'inherit',
      },
    }}
  />
)

export default Global
